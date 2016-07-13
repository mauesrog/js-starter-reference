import React, { Component } from 'react';

class SourceSelector extends Component {
  constructor(props) {
    super(props);

    this.state = { source: 'youtube' };
    this.onSourceChange = this.onSourceChange.bind(this);
  }
  onSourceChange(event) {
    this.setState({ source: event.target.value });
    this.props.onSourceChange(event.target.value);
  }

  render() {
    return (
      <select name="Source" onChange={this.onSourceChange} >
        <option value="youtube">Youtube</option>
        <option value="vimeo">Vimeo</option>
      </select>
    );
  }
}

export default SourceSelector;
