import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';
import Home from './Home';

class AppContaniner extends Component {
  render() {
    console.log('logging man!')
    return (
      <Home {...this.props} />
    );
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
};

// state: global state of the app
export default connect((state) => ({}), mapDispatchToProps)(AppContaniner);
