import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    flexDirection: 'column',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
