/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import Header from './src/native/components/header';
import AlbumList from './src/native/components/AlbumList';

export default class step05 extends Component {
  render() {
    return (
      <View>
      <Header headerText={'Albums!'} />
      <AlbumList />
       </View>
    );
  }
}

AppRegistry.registerComponent('step05', () => step05);
