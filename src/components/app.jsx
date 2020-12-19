import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGif: "",
      overlay: false
    };
  }

  fetchGifs = (word) => {
    const key = "g8kdTGU1YAtC5zf00r9qu9TlTJYo7NyG";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${word}&limit=10`;

    fetch(url)
      .then(response => response.json())
      .then((data) => {
        const gifsArray = data.data;
        this.setState({
          gifs: gifsArray
        });
      });
  }

  changeSelectedGif = (id) => {
    this.setState({
      selectedGif: id
    });
  }

  changeOverlay = (value) => {
    this.setState({
      overlay: value
    });
  }

  addOverlay = () => {
    let overlayClass = "";
    if (this.state.overlay) {
      overlayClass = "overlay";
    }
    return overlayClass;
  }

  render() {
    const image = this.state.selectedGif !== "";

    return (
      <div>
        <div className="left-scene">
          <div className="searchIcon">🔍</div>
          <div className={this.addOverlay()}>
            <SearchBar search={this.fetchGifs} changeOverlay={this.changeOverlay} />
            <div className="selected-gif">
              { image && <Gif id={this.state.selectedGif} />}
            </div>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} changeSelectedGif={this.changeSelectedGif} />
        </div>
      </div>
    );
  }
}

//

export default App;
