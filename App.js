/**
  Initiate Redux,
  Firebase,
  Auto navigation for logged in users
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { config } from './src/services';
import reducers from './src/redux/reducers';
import Index from './src/index';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends Component<{}> {

  componentWillMount() {
    // const config = {
    //   apiKey: 'AIzaSyB9tT1Q_jYiqba_6M8F8BRERyR977SAD94',
    //   authDomain: 'batr-9978b.firebaseapp.com',
    //   databaseURL: 'https://batr-9978b.firebaseio.com',
    //   projectId: 'batr-9978b',
    //   storageBucket: 'batr-9978b.appspot.com',
    //   messagingSenderId: '716778603456'
    // };

    firebase.initializeApp(config);
  } //End componentWillMount

  render() {
    return (
      <Provider store={store}>
          <Index />
      </Provider>
    );
  }
}
