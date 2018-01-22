import React from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from '../common';

const Check = (props) => {
  const { parentStyle, qrStyle, imageStyle, inputContainer, textValueStyle,
  textDescStyle, textExpireStyle, textValueContainer, textDescContainer,
  textExpireContainer, buttonStyle } = styles;

  return (
    <View>
    <View style={parentStyle}>
      <View style={qrStyle}>
        <Image
          source={props.source}
          style={imageStyle}
        />
      </View>
      <View style={inputContainer}>
        <View style={textValueContainer}>
          <Text style={textValueStyle}>
            {props.value}
          </Text>
        </View>
        <View style={textDescContainer}>
          <Text style={textDescStyle}>
            {props.description}
          </Text>
        </View>
        <View style={textExpireContainer}>
          <Text style={textExpireStyle}>
            Giltlig t.o.m: {props.expire}
          </Text>
        </View>
      </View>
    </View>
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
    marginTop: 15, height: 50
  }
};

export { Check };
