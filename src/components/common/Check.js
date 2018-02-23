import React from 'react';
import { View } from 'react-native';
import { Button, SimpleCheck } from '../common';

const Check = (props) => {
  const { buttonStyle } = styles;

  return (
    <View>
      <SimpleCheck
        value={props.value}
        description={props.description}
        expire={props.expire}
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
    borderRadius: 5,
    backgroundColor: '#fff',
    padding: 5,
    flexDirection: 'row',
    height: 150,
    width: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2
  },
  textValueStyle: {
    color: '#e74c3c',
    fontWeight: 'bold',
    fontSize: 33,
    marginLeft: 3
  },
  textValueContainer: {
    backgroundColor: 'transparent', marginTop: 0, margin: 3, height: 50
  },
  textDescStyle: {
    color: '#000',
    marginLeft: 3,
  },
  textDescContainer: {
    backgroundColor: 'transparent', margin: 3, height: 40
  },
  textExpireStyle: {
    color: '#000',
    marginLeft: 3,
  },
  textExpireContainer: {
    backgroundColor: 'transparent', margin: 3, height: 23
  },
  qrContainer: {
    margin: 5,
    flex: 3
  },
  imageStyle: {
    height: 130, width: 130
  },
  inputContainer: {
    flex: 5
  },
  buttonStyle: {
    flex: 0, marginTop: 5
  }
};

export { Check };
