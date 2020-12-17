import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = (event) => {
    const word = event.currentTarget.value;
    this.props.search(word);
  }

  render() {
    return (
      <input type="text" className="form-search form-control" onChange={this.handleChange} />
    );
  }
}

export default SearchBar;
