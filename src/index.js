import SearchBar from './components/search_bar';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import searchApi from './search-api';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import debounce from 'lodash.debounce';
import SourceSelector from './components/source_selector.js';
import './style.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      source: 'youtube',
      currentSearch: 'britney spears',
    };

    this.search(this.state.source, this.state.currentSearch);
    this.search = debounce(this.search, 300);
    this.changeSource = this.changeSource.bind(this);
  }

  search(source, text) {
    searchApi(source, text).then(videos => {
      if (videos.length) {
        this.setState({
          videos,
          selectedVideo: videos[0],
          currentSearch: text,
        });
      }
    });
  }

  changeSource(source) {
    this.setState({ source });
    this.search(source, this.state.currentSearch);
  }

  render() {
    if (!this.state.selectedVideo) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <nav>
          <SearchBar onSearchChange={text => this.search(this.state.source, text)} />
          <SourceSelector onSourceChange={this.changeSource} />
        </nav>
        <div id="video-section">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList onVideoSelect={selectedVideo => this.setState({ selectedVideo })} videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
