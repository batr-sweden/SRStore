//Import libraries for Component
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { boxShadow, secondaryColor } from '../../styles';

// Create component
const Button = ({
  onPress,
  componentContainerStyle,
  text,
  }) => {
  const { ContainerStyle, textStyle } = styles;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[boxShadow, ContainerStyle, componentContainerStyle]}>
        <Text style={textStyle}>
          {text}
        </Text>
    </TouchableOpacity>
  );
};

const styles = {
  ContainerStyle: {
    backgroundColor: secondaryColor,
    height: 40,
    width: '100%',
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
