import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import { Grid } from 'semantic-ui-react'
const API_KEY = 'AIzaSyA7pxQyCGTmLX_oMZZ0oth6o8H2k24SzBo';
// const App = () => {
//   return (<SearchBar />);
// }

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('surfboards')
  }
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term},(videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }
  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <Grid columns>
          <Grid.Column fluid={true} width={10}>
            <VideoDetail video ={this.state.selectedVideo} />
          </Grid.Column>
          <Grid.Column fluid={true} width={6}>
            <VideoList onVideoSelect = {selectedVideo => this.setState({selectedVideo})} videos={this.state.videos} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
ReactDOM.render(<App/>,document.querySelector('.container'));
