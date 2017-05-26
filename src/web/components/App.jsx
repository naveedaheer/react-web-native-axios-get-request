
/*
    ./src/web/components/App.jsx
*/
import React from 'react';
import Header from './header';
import AlbumList from './AlbumList';

export default class App extends React.Component {
  render() {
    return (
      <div>
     <Header headerText={'Albums!'} />
     <AlbumList />
     </div>
    );
  }
}
