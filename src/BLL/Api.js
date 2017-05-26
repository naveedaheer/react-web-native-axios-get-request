import axios from 'axios';


export default class GetAlbum {

constructor() {
    this.state = {
        albums: [],
    };
}
    static getAlbums() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => {
                this.setState({
                    albums: response.data
                });
            })
            .catch(error => { console.log('error', error); });
    }

}
