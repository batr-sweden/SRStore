import React from 'react';
import { View, Image, Text } from 'react-native';
import { Input, Button } from '../common';

const CreateCheck = (props) => {
  const {
    parentStyle, qrStyle, imageStyle, inputContainer, valueContainer,
    noteContainer, expireContainer, inputContainerStyle, inputValueStyle,
    inputNoteStyle, expireRowContainer, expireCenterContainer,
    expireMarginContainer } = styles;

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
          <View style={valueContainer}>
            <Input
              componentContainerStyle={inputContainerStyle}
              componentInputStyle={inputValueStyle}
              placeholder='50 KR ...'
              maxLength={11}
            />
          </View>
        <View style={noteContainer}>
          <Input
            componentContainerStyle={inputContainerStyle}
            componentInputStyle={inputNoteStyle}
            placeholder='Gäller endast i restaurangen...'
            maxLength={42}
            numberOfLines={2}
          />
        </View>
        <View style={expireRowContainer}>
        <View style={expireCenterContainer}>
        <Text style={expireMarginContainer}>
        Giltlig t.o.m:
        </Text>
        </View>
        <View style={expireContainer}>
          <Input
            componentContainerStyle={inputContainerStyle}
            componentInputStyle={{ color: '#000', marginLeft: 3, fontSize: 15 }}
            maxLength={10}
          />
        </View>
      </View>
      </View>
    </View>
    <Button
      buttonContainerStyle={{ marginTop: 15, height: 50 }}
      text='Skapa'
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2
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
  valueContainer: {
    backgroundColor: '#eeeeee', justifyContent: 'center', marginTop: 5, margin: 3, height: 50
  },
  noteContainer: {
    backgroundColor: '#eeeeee', justifyContent: 'center', margin: 3, height: 40
  },
  expireContainer: {
    backgroundColor: '#eeeeee', justifyContent: 'center', margin: 3, height: 23, flex: 1
  },
  inputContainerStyle: {
    backgroundColor: 'transparent'
  },
  inputValueStyle: {
    color: '#e74c3c',
    fontWeight: 'bold',
    fontSize: 33,
    marginLeft: 3
  },
  inputNoteStyle: {
    color: '#000', marginLeft: 3, fontSize: 15
  },
  expireRowContainer: {
    flexDirection: 'row'
  },
  expireCenterContainer: {
    justifyContent: 'center'
  },
  expireMarginContainer: {
    marginLeft: 10
  }
};

export { CreateCheck };
