import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {

    state = {
        albums: [],
    }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => {
                this.setState({
                    albums: response.data
                });
            });
    }

    showAlbums() {
        return this.state.albums.map(album => <AlbumDetail album={album} key={album.title} />);
    }
    render() {
        return (
            <View>

                {this.showAlbums()}

            </View>
        );
    }
}
