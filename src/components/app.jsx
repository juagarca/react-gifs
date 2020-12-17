import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGif: "wUdz3pB1wAMhNgPLzn"
    };
    this.fetchGifs("");
    console.log(this.state);
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

  render() {

    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.fetchGifs} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
