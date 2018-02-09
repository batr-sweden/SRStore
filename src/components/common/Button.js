//Import libraries for Component
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { boxShadow } from '../../styles';
import { secondaryColor } from '../../config';
// Create component
const Button = (props) => {
  const { ContainerStyle, textStyle } = styles;

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[boxShadow, ContainerStyle, props.buttonContainerStyle]}
    >
        <Text style={textStyle}>
          {props.text}
        </Text>
    </TouchableOpacity>
  );
};

const styles = {
  ContainerStyle: {
    backgroundColor: secondaryColor,
    height: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

  textStyle: {
    fontSize: 20,
    color: '#fff'
  },
};

export { Button };
