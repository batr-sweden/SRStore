import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from '../common';

class HomeScreen extends Component {

  render() {
    const { viewContainer } = styles;
    return (
      <View style={viewContainer}>
        <Header
        headerText='Home'
        />
      </View>
    );
  }
}

const styles = {
  viewContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
};


export default HomeScreen;
