
// Import libraries for making a component
import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { primaryColor } from '../../config';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={[viewStyle, props.viewStyle]}>
      <StatusBar
        barStyle="light-content"
      />
      <Text style={[textStyle, props.textStyle]}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE'
  },
  textStyle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '500'
  }
};

// Make the component available to other parts of the app
export { Header };
