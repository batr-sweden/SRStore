import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { config } from './src/services';
import reducers from './src/redux';
import Index from './src/index';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends Component<{}> {

  componentWillMount() {
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
