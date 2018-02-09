import React from 'react';
import { Text, View } from 'react-native';
import QRCode from 'react-native-qrcode';

const SimpleCheck = props => {
  const {
    containerStyle,
    parentStyle,
    qrContainer,
    inputContainer,
    checkInformation,
    checkValueStyle,
    checkExpireStyle,
    checkInformationContainer,
    footer
  } = styles;

  return (
    <View style={[containerStyle, props.containerStyle]}>
      <View style={parentStyle}>
        <View style={qrContainer}>
          <QRCode
            value={props.checkID}
            size={100}
            bgColor='black'
            fgColor='white'
          />
        </View>
        <View style={inputContainer}>
          <View style={checkInformationContainer}>
            <Text style={[checkValueStyle, checkInformation]}>
              {props.value}
            </Text>
          </View>
          <View style={checkInformationContainer}>
            <Text style={[checkInformation]}>
              {props.description}
            </Text>
          </View>
          <View style={checkInformationContainer}>
            <Text style={[checkExpireStyle, checkInformation]}>
              Giltlig t.o.m: {props.expire}
            </Text>
          </View>
        </View>
      </View>
      <View style={footer}>
        <Text>
          {props.checkID}
        </Text>
      </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'column',
    width: null,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 2
  },
  parentStyle: {
    flexDirection: 'row',
    height: 100,
    marginBottom: 10
  },
  checkInformationText: {
    color: '#000',
    paddingLeft: 5
  },
  checkInformationContainer: {
    margin: 3,
  },
  checkValueStyle: {
    color: '#e74c3c',
    fontWeight: 'bold',
    fontSize: 33,
  },
  checkExpireStyle: {
    color: 'red',
  },
  qrContainer: {
    margin: 5
  },
  inputContainer: {
    flex: 5,
    justifyContent: 'space-between'
  },
  footer: {
    alignSelf: 'center'
  }
};

export { SimpleCheck };
