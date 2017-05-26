import React from 'react';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


export default class AlbumList extends React.Component {

constructor() {
    super();
    this.state = {
        albums: [],
    };
}
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => {
                this.setState({
                    albums: response.data
                });
            })
            .catch(error => { console.log('error', error); });
    }

    showAlbums() {
        return this.state.albums.map(album => <AlbumDetail test={'testing'} album={album} key={album.title} />);
            }
    
    render() {
        return (
            <div>
                
                {this.showAlbums()}
            </div>
        );
    }

}
