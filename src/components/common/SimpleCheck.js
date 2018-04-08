import React from 'react';
import { Text, View } from 'react-native';
import QRCode from 'react-native-qrcode';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { subHeaderFontFamily, secondaryColor } from '../../config';

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
    <View style={parentStyle}>
    <View style={{ position: 'absolute', top: 10, right: 10, }}>
    <QRCode
      value={props.checkID}
      size={30}
      bgColor='black'
      fgColor='white'
    />
    </View>
     <View
     style={{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    }}>
     <Text
     adjustsFontSizeToFit
     numberOfLines={0}
     minimumFontScale={0.01}
     style={{
      textAlign: 'center',
      color: secondaryColor,
      backgroundColor: 'transparent',
      fontSize: 30,
      height: '20%',
       width: 140,
       fontFamily: subHeaderFontFamily,
       transform: [{ rotate: '90deg' }] }}>
       HEY DAY</Text>
     </View>
     <View style={{ flex: 10 }}>
     <View style={{ flex: 7, alignItems: 'center', justifyContent: 'center' }}>
     <Text
     adjustsFontSizeToFit
     numberOfLines={1}
     // minimumFontScale={0.01}
     style={styles.textStyle}
      >
     {props.name}</Text>
     </View>
     <View style={{ marginLeft: 20, marginRight: 20, alignItems: 'center', flex: 4.5 }}>
     <Text
     numberOfLines={2}
     style={{
       textAlign: 'center',
       lineHeight: 20,
       color: '#2d2c2c',
       backgroundColor: 'transparent',
       fontSize: 20,
       fontFamily: subHeaderFontFamily
     }}>
     {props.description}</Text>
     </View>
     <View style={{ marginLeft: 20, marginRight: 20, alignItems: 'center', flex: 2 }}>
     <Text
     style={{
       textAlign: 'center',
       color: '#2d2c2c',
       backgroundColor: 'transparent',
       fontSize: 15,
       fontFamily: subHeaderFontFamily
     }}>
     Giltlig tom {props.expire}</Text>
     </View>
     <View style={{ marginLeft: 10, marginRight: 10, flex: 2 }}>
     <Text
     adjustsFontSizeToFit
     numberOfLines={1}
     // minimumFontScale={0.01}
     style={{
       textAlign: 'center',
       color: '#2d2c2c',
       backgroundColor: 'transparent',
       fontSize: 100,
       width: '100%',
       flex: 1,
       fontFamily: subHeaderFontFamily
     }}>
     {props.info}</Text>
     </View>
    </View>
    </View>
  );
};
const styles = {
  textStyle: {
    // marginLeft: 33.5,
    backgroundColor: 'transparent',
    color: '#e74c3c',
    textAlign: 'center',
    fontSize: responsiveFontSize(5),
    width: responsiveWidth(60),
    height: 50,
    fontFamily: subHeaderFontFamily
  },
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
    borderRadius: 5,
    backgroundColor: '#fff',
    padding: 5,
    flexDirection: 'row',
    height: 160,
    shadowColor: '#449faa',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    shadowOpacity: 0.8
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
    color: '#000',
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
