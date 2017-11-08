import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';

const {
  View,
  Text,
  TouchableHighlight
} = ReactNative;

class AppContaniner extends Component {
  addRecipe() {
    this.props.addRecipe();
  };

  render() {
    console.log('logging man!')
    return (
      <View>
        <Text style={{marginTop: 20}}>
          Voila! Counter: { this.props.recipeCount }
        </Text>
        <TouchableHighlight onPress={ () => { this.addRecipe() }}>
          <Text>Add recipe</Text>
        </TouchableHighlight>
      </View>
    );
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
};

// state === global state of the app
export default connect((state) => {
  return {
    recipeCount: state.recipeCount
  };
}, mapDispatchToProps)(AppContaniner);
