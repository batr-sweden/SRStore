import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { secondaryColor } from '../../config';

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator
        size={size || 'large'}
        color={secondaryColor}
      />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };
