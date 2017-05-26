import React from 'react';

const AlbumDetail = (props) => {
    console.log(props);
    return (
       <div> {props.album.title} </div>
    );
};

export default AlbumDetail;
