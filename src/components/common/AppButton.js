//Import libraries for Component
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { textFontFamily } from '../../config';

// Create component
const AppButton = ({ onPress, text, componentTextStyle, componentButtonStyle }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, componentButtonStyle]}>
      <Text style={[textStyle, componentTextStyle]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontFamily: textFontFamily,
    fontSize: 22,
    letterSpacing: 2,
    //fontWeight: '200',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
});

export { AppButton };
