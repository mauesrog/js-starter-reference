import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchterm: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(event) {
    this.setState({ searchterm: event.target.value });
    this.props.onSearchChange(event.target.value);
  }
  render() {
    return (
      <div id="search-bar">
        <input placeholder="Search" onChange={this.onInputChange} />
      </div>
    );
  }
}

export default SearchBar;
