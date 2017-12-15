import React from 'react';
import { TextInput, View } from 'react-native';

const Input = (props) => {
const { containerStyle, inputStyle } = styles;

  return (
    <View style={[containerStyle, props.componentContainerStyle]}>
    <TextInput
    placeholderTextColor={props.placeholderTextColor}
    secureTextEntry={props.secureTextEntry}
    placeholder={props.placeholder}
    autoCorrect={false}
    style={[inputStyle, props.componentInputStyle]}
    value={value}
    onChangeText={props.onChangeText}
    returnKeyType={props.returnKeyType}
    keyboardType={props.keyboardType}
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
