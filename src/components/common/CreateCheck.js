import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { Input, Button } from '../common';
import { subHeaderFontFamily, secondaryColor } from '../../config';
//responsiveHeight, responsiveWidth,

const CreateCheck = (props) => {
  const { parentStyle } = styles;
  return (
    <View>
      <View style={parentStyle}>
        <View style={{ flex: 1 }}>
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text adjustsFontSizeToFit numberOfLines={1} style={styles.textStyle}>
                Utdelning
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <Input
                componentContainerStyle={{ flex: 1 }}
                componentInputStyle={{ fontSize: 20, color: '#e74c3c' }}
                placeholder='50 KR ...'
                // maxLength={12}
                name={props.name}
                onChangeText={props.onChangeCheckName} // CHECKNAME_CHANGE
              />
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text adjustsFontSizeToFit numberOfLines={1} style={styles.textStyle}>
                Beskrivning
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <Input
                maxLength={43}
                numberOfLines={2}
                componentContainerStyle={{ flex: 1 }}
                componentInputStyle={{ fontSize: 15, color: '#e74c3c' }}
                placeholder='Rabatt på valfri vara i butiken ...'
                // maxLength={12}
                value={props.description}
                onChangeText={props.onChangeCheckDescription}//CHECKDESCRIPTION_CHANGE
              />
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text adjustsFontSizeToFit numberOfLines={1} style={styles.textStyle}>
                Giltlighet
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <Input
                componentContainerStyle={{ flex: 1 }}
                componentInputStyle={{ fontSize: 15, color: '#e74c3c' }}
                placeholder='t.ex. 2018-12-12'
                // maxLength={12}
                value={props.expire}
                onChangeText={props.onChangeCheckExpire}//CHECKEXPIRE_CHANGE
              />
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text adjustsFontSizeToFit numberOfLines={1} style={styles.textStyle}>
                Info
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <Input
                componentContainerStyle={{ flex: 1 }}
                componentInputStyle={{ fontSize: 12, color: '#e74c3c' }}
                placeholder='Du samlar poängen vid köp i resturangen, ej butiken'
                // maxLength={12}
                value={props.info}
                onChangeText={props.onChangeCheckInfo}// CHECKINFO_CHANGE
              />
            </View>
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

const styles = StyleSheet.create({
  parentStyle: {
    borderRadius: 5,
    backgroundColor: '#fff',
    padding: 5,
    borderColor: '#BDBDBD',
    flexDirection: 'row',
    height: 160,
    shadowColor: '#449faa',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    shadowOpacity: 0.8
  },
  textStyle: {
    // marginLeft: 33.5,
    backgroundColor: 'transparent',
    color: '#fff',
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    flex: 1,
    fontFamily: subHeaderFontFamily
  },
  container: {
    shadowColor: '#449faa',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    flexDirection: 'row',
    borderColor: '#BDBDBD',
    borderWidth: 0.5,
    flex: 1,
    margin: 3
  },
  textContainer: {
    backgroundColor: '#449faa',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    flex: 1.5,
    borderColor: '#BDBDBD',
    borderWidth: 0.5
  },
  inputContainer: {
    flex: 3,
    borderColor: '#BDBDBD',
    borderWidth: 0.5
  },
  textStoreName: {
    textAlign: 'center',
    color: secondaryColor,
    backgroundColor: 'transparent',
    fontSize: 30,
    height: '20%',
    width: 140,
    fontFamily: subHeaderFontFamily,
    transform: [{ rotate: '90deg' }]
  },
  containerStoreName: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  }
});

export { CreateCheck };
