import React from 'react';
import { View, Image, Text, Dimensions, StyleSheet } from 'react-native';
import { Input, Button } from '../common';
import { subHeaderFontFamily, textFontFamily, secondaryColor } from '../../config';
import QRCode from 'react-native-qrcode';

const CreateCheck = (props) => {



//Guideline sizes are based on standard ~5" screen mobile device


// const scale = size => width / (guidelineBaseWidth * size);
// const verticalScale = size => height / (guidelineBaseHeight * size);
// const moderateScale = (size, factor = 0.5) => (size + (scale(size) - size) * factor);
  const {
    parentStyle, qrStyle, imageStyle, inputContainer, valueContainer,
    noteContainer, expireContainer, inputContainerStyle, inputValueStyle,
    inputNoteStyle, expireRowContainer, expireCenterContainer,
    expireMarginContainer } = styles;
    // <View style={qrStyle}>
    //     <Image
    //     source={props.source}
    //     style={imageStyle}
    //     />
    //   </View>
    //     <View style={inputContainer}>
    //       <View style={valueContainer}>
    //         <Input
    //           componentContainerStyle={inputContainerStyle}
    //           componentInputStyle={inputValueStyle}
    //           placeholder='50 KR ...'
    //           maxLength={11}
    //           value={props.value}
    //           onChangeText={props.onChangeCheckValue}
    //         />
    //       </View>
    //     <View style={noteContainer}>
    //       <Input
    //         componentContainerStyle={inputContainerStyle}
    //         componentInputStyle={inputNoteStyle}
    //         placeholder='Gäller endast i restaurangen...'
    //         maxLength={42}
    //         numberOfLines={2}
    //         value={props.value}
    //         onChangeText={props.onChangeCheckDescription}
    //       />
    //     </View>
    //     <View style={expireRowContainer}>
    //     <View style={expireCenterContainer}>
    //     <Text style={expireMarginContainer}>
    //     Giltlig t.o.m:
    //     </Text>
    //     </View>
    //     <View style={expireContainer}>
    //       <Input
    //         componentContainerStyle={inputContainerStyle}
    //         componentInputStyle={{ color: '#000', marginLeft: 3, fontSize: 15 }}
    //         maxLength={10}
    //         value={props.value}
    //         onChangeText={props.onChangeCheckExpire}
    //       />
    //     </View>
    //   </View>
    //   </View>
    // </View>
    // <Button
    //   buttonContainerStyle={{ flex: 0, marginTop: 15 }}
    //   text='Skapa'
    //   onPress={props.onPress}
    // />
  return (
    <View>
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
     numberOfLines={1}
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
       BATHER BUISNESS</Text>
     </View>
     <View style={{ flex: 10 }}>
     <View style={{ marginLeft: 40, marginRight: 40, alignItems: 'center', justifyContent: 'center', flex: 7 }}>
    <Input
      componentContainerStyle={inputContainerStyle}
      componentInputStyle={inputValueStyle}
      placeholder='50 KR ...'
      // maxLength={12}
      value={props.value}
      onChangeText={props.onChangeCheckValue}
    />
     </View>
     <View style={{ marginLeft: 20, marginRight: 20, alignItems: 'center', flex: 4.5 }}>
           <Input
             componentContainerStyle={inputContainerStyle}
             componentInputStyle={inputNoteStyle}
             placeholder='Gäller endast i restaurangen...'
             maxLength={43}
             numberOfLines={2}
             value={props.value}
             onChangeText={props.onChangeCheckDescription}
           />
     </View>
     <View style={{ marginLeft: 20, marginRight: 20, alignItems: 'center', flex: 2 }}>
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
             value={props.value}
             onChangeText={props.onChangeCheckExpire}
           />
         </View>
         </View>
         </View>
     <View style={{ marginLeft: 10, marginRight: 10, alignItems: 'center', flex: 2 }}>
     <Text
     adjustsFontSizeToFit
     numberOfLines={1}
     minimumFontScale={0.01}
     style={{
       textAlign: 'center',
       color: '#2d2c2c',
       backgroundColor: 'transparent',
       fontSize: 12,
       width: '100%',
      height: '100%',
       fontFamily: subHeaderFontFamily
     }}>
     Du samlar dina poängen endast vid köp i butiken, gäller ej kaféet</Text>
     </View>
    </View>
    </View>
    <Button
      buttonContainerStyle={{ flex: 0, marginTop: 15 }}
      text='Skapa'
      onPress={props.onPress}
    />
    </View>
  );
};
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
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
  qrContainer: {
    margin: 5,
    flex: 3
  },
  imageStyle: {
    height: 130,
    width: 130
  },
  inputContainer: {
    flex: 5
  },
  valueContainer: {
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
    marginTop: 5,
    margin: 3,
    height: 50
  },
  noteContainer: {
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
    margin: 3,
    height: 40
  },
  expireContainer: {
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
    margin: 3,
    height: 23,
    flex: 1
  },
  inputContainerStyle: {
    backgroundColor: 'transparent'
  },
  inputValueStyle: {
    color: '#e74c3c',
    fontWeight: 'bold',
    width: width,
    height: '100%',
    fontSize: 33,
    marginLeft: 3
  },
  inputNoteStyle: {
    color: '#000',
    marginLeft: 3,
    fontSize: 15
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
});

export { CreateCheck };
