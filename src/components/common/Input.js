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
    editable
    numberOfLines={props.numberOfLines}
    style={[inputStyle, props.componentInputStyle]}
    value={props.value}
    onChangeText={props.onChangeText}
    returnKeyType={props.returnKeyType}
    keyboardType={props.keyboardType}
    maxLength={props.maxLength}
    selectionColor={'#449faa'}
    clearButtonMode={'while-editing'}
    autoFocus={props.autoFocus}
    onFocus={props.onFocus}
    focusNextField={props.focusNextField}
    blurOnSubmit={false}
    onSubmitEditing={props.onSubmitEditing}
    multiline={props.multiline}
    onContentSizeChange={props.onContentSizeChange}
    />
    </View>
  );
};

const styles = {
    containerStyle: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        flexDirection: 'row',
        // alignItems: 'center'

    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 20,
        // justifyContent: 'center',
        // alignItems: 'center',
        // flexDirection: 'row',
        marginLeft: 0,
        lineHeight: 23,
        flex: 1,
    },
};

export { Input };
