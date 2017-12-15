import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { NotAuthenticated, Authenticated } from '../router';

// CHECK IF THE USER IS / WAS LOGGED IN OR NOT
class Index extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    if (this.state.loggedIn) {
      return (
        <Authenticated />
      );
    }

    return <NotAuthenticated />;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
      {this.renderContent()}
      </View>
    );
  }
}

export default Index;
