import React, { Component } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
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
    
        console.log("AlbumList-render this.props.animating : ", this.props.animating);
        
        const isAnimating = this.props.animating;
        console.log("AlbumList-render isAnimating : ", isAnimating)
        
        if (isAnimating) {
            return (<ActivityIndicator
                animating={isAnimating}
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

const mapStateToProps = ({ albums, ownProps }) => {
    //const {albums} = albums;
    console.log("AlbumList-mapStateToProps albums :", albums)
    console.log("AlbumList-mapStateToProps albums.length :", albums.length)
    
    const animating = albums.length == 0;
    console.log("AlbumList-mapStateToProps animating :", animating)
    
    return { albums, animating: animating };
};

export default connect(mapStateToProps, {
    getData,
})(AlbumList);

