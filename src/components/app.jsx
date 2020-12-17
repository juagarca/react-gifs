import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {


  fetchGifs = (word) => {
    const key = "g8kdTGU1YAtC5zf00r9qu9TlTJYo7NyG";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${word}&limit=10`;

    fetch(url)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  render() {
    const gifs = [
      { id: 'wUdz3pB1wAMhNgPLzn' },
      { id: 'BBFJQKmBF8ACc' },
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="wUdz3pB1wAMhNgPLzn" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
