import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = (event) => {
    const word = event.currentTarget.value;
    this.props.search(word);
  }

  handleFocus = () => {
    this.props.changeOverlay(true);
  }

  handleBlur = () => {
    this.props.changeOverlay(false);
  }

  render() {
    return (
      <input type="text" className="form-search form-control" onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur} />
    );
  }
}

export default SearchBar;
