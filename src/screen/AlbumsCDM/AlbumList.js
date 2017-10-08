import React, { Component } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [], animating:true };
    
    static navigationOptions = {
        title: 'AlbumList-componentDidMount',
    };
  
  componentDidMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data, animating: false }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);
    
    if (this.state.animating) {
        return (<ActivityIndicator
            animating={this.state.animating}
            color="#0000ff"
            size="large"
        />)
    }
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
