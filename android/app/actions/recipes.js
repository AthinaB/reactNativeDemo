import React, { Component } from 'react';
import ReactNative from 'react-native';
import * as types from './types';
import Api from '../lib/api';


handleNetworkErrors = (response) => {
  let errorMsg = `Network error: ${response.status}: ${response.statusText}`;
  throw new Error(errorMsg);
};



export function addRecipe() {
  return {
    type: types.ADD_RECIPE
  }
};

export async function fetchMe(dispatch, getState) {
  let response, responseJson;
  try {
    response = await fetch('http://83.212.98.164:3000/donations/');
    if(!response.ok) {
      handleNetworkErrors(response);
    }
    responseJson = await response.json();
    dispatch(setSearchedRecipes({ recipes: responseJson }));

  } catch(e) {
    console.error('I catched an error!!! :/')
    console.error(e)
  }

};

export function setSearchedRecipes({ recipes }) {
  return {
    type: types.SET_SEARCHED_RECIPES,
    recipes
  };
};

export function fetchRecipes(id) {
  return (dispatch, getState) => {
    return fetchMe(dispatch, getState);
  };
};
