import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import moreStyle from '../styles';

const IconContainer = (props) => {
  return (
    <View style={[moreStyle.viewContainer, props.viewContainer]}>
    <TouchableOpacity
    onPress={props.onPress}
    style={[moreStyle.touchableContainer, props.touchableContainer]}
    >
    <View style={moreStyle.iconContainer}>
    <Icon
      name={props.iconName}
      type={'evilicon'}
      color={'#FFF'}
      size={50}
      iconStyle={moreStyle.iconStyle}
    />
    <Text style={moreStyle.textStyle}>{props.name}</Text>
    </View>
    </TouchableOpacity>
    <View style={[moreStyle.coming.container, props.displayContainer]}>
    <Text style={moreStyle.coming.textStyle}>KOMMER SNART</Text>
    </View>
    </View>

  );
};


export { IconContainer };
