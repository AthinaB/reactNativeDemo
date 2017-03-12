/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import data from './data';
import RowAB from './RowAB';

export default class reactNativeDemo extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      // Here we put all the data that we are going to use in every row
      dataSource: ds.cloneWithRows(data)
    };
  };
  render() {
    return (
      // Return *only one element* that can have several children
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={
            (data)=><RowAB {...data} />
          }
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  }
});

AppRegistry.registerComponent('reactNativeDemo', () => reactNativeDemo);
