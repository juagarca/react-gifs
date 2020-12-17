import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {
  render() {
    const gifs = [
      { id: 'wUdz3pB1wAMhNgPLzn' },
      { id: 'wUdz3pB1wAMhNgPLzn' },
      { id: 'wUdz3pB1wAMhNgPLzn' },
      { id: 'wUdz3pB1wAMhNgPLzn' },
      { id: 'wUdz3pB1wAMhNgPLzn' },
      { id: 'wUdz3pB1wAMhNgPLzn' },
      { id: 'wUdz3pB1wAMhNgPLzn' },
      { id: 'wUdz3pB1wAMhNgPLzn' },
      { id: 'wUdz3pB1wAMhNgPLzn' },
      { id: 'wUdz3pB1wAMhNgPLzn' },
      { id: 'wUdz3pB1wAMhNgPLzn' }
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
