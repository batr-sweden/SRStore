import React from 'react';
import { View } from 'react-native';

const HorizontalLine = () => {
  return (
    <View
    style={{
      flexDirection: 'row',
      alignItems: 'stretch',
      borderWidth: 2,
      borderBottomColor: '#fff',
      marginRight: 5,
      marginLeft: 5
    }}
    />
  );
};


export { HorizontalLine };
