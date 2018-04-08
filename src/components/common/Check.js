import React from 'react';
import { View } from 'react-native';
import { Button, SimpleCheck } from '../common';

const Check = (props) => {
  const { buttonStyle } = styles;

  return (
    <View style={styles.parentStyle}>
      <SimpleCheck
        name={props.name}
        value={props.value}
        description={props.description}
        expire={props.expire}
        info={props.info}
        checkID={props.checkID}
      />
      <Button
        buttonContainerStyle={buttonStyle}
        text='Välj'
        onPress={props.onPress}
      />
    </View>
  );
};

const styles = {
  parentStyle: {
    width: 300,
  },
  buttonStyle: {
    flex: 0,
    marginTop: 5
  }
};

export { Check };
