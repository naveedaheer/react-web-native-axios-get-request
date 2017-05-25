import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

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
        return this.state.albums.map(album => <Text>{album.title}</Text>);
    }
    render() {
        console.log('this.state', this.state);
        return (
            <View>
                <Text>
                    Album List
                </Text>
                {this.showAlbums()}
            </View>    
        );
    }
}
