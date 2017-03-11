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
    let picture = {
      uri: 'https://i.ytimg.com/vi/qTxUKRkOoHM/hqdefault.jpg'
    };
    return (
      // Return *only one element* that can have several children
      <View>
        <Image source={picture} style={{width: 193, height: 110}}/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(data)=><View><Text>{data.name.last} - {data.name.first}</Text></View>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('reactNativeDemo', () => reactNativeDemo);
