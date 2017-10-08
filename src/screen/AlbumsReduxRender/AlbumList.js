import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';
import { getData } from './Action';
import { connect } from 'react-redux';

class AlbumList extends Component {
    
    static navigationOptions = {
        title: 'AlbumList-Redux',
    };
    
    componentDidMount() {
        console.log("AlbumList-componentDidMount")
        this.props.getData();
    }
    
    renderAlbums() {
        return this.props.albums.map(album =>
            <AlbumDetail key={album.title} album={album}/>
        );
    }
    
    render() {
        //recursion problem
        //this.props.getData();
        console.log("AlbumList-render", this.props);
        
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

const mapStateToProps = ({ albums }) => {
    //const {albums} = albums;
    console.log("AlbumList-mapStateToProps albums:", albums)
    
    return {albums};
};

export default connect(mapStateToProps, {
    getData,
})(AlbumList);

