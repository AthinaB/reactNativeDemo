/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,  combineReduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './android/app/reducers';
import AppContainer from './android/app/containers/AppContainer';

/*
 * This is used to see the network traffic in chrome dev tools
 * https://github.com/facebook/react-native/issues/934#issuecomment-150772039
 */
if(process.env.NODE_ENV === 'development') {
  GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
}

/*
 * The logger works only in develop mode
 * It logs the actions
 */
const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
});



function configureStore(initialState) {
  const enhancer = compose(
  applyMiddleware(thunkMiddleware, loggerMiddleware)
  );

  return createStore(reducer, initialState, enhancer);
};

// Here you would add a prefetch for initialization
const store = configureStore({});


class ReactNativeDemo extends Component {
  render() {
    return (
      <View>
        <Text>
          Lalala
        </Text>
      </View>
    )
  }
};

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);


AppRegistry.registerComponent('reactNativeDemo', () => App);
