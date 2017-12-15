import React from 'react';
import { TextInput, View } from 'react-native';

const Input = ({ placeholderTextColor, secureTextEntry,componentContainerStyle,componentInputStyle, value, onChangeText, placeholder, returnKeyType, keyboardType }) => {
const { containerStyle, inputStyle } = styles;
// <Text style={labelStyle}>
// {label}
// </Text>
  return (
    <View style={[containerStyle, componentContainerStyle]}>
    <TextInput
    placeholderTextColor={placeholderTextColor}
    secureTextEntry={secureTextEntry}
    placeholder={placeholder}
    autoCorrect={false}
    style={[inputStyle, componentInputStyle]}
    value={value}
    onChangeText={onChangeText}
    returnKeyType={returnKeyType}
    keyboardType={keyboardType}
    />
    </View>
  );
};

const styles = {
    containerStyle: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 40,
        alignItems: 'center'
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 0,
        lineHeight: 23,
        flex: 1,
    },
};

export { Input };
