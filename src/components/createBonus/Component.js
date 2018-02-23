import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Input } from '../common';
import { primaryColor } from '../../config';
import bonusStyle from './styles';

//Input Value Component
const InputValue = (props) => {
  return (
    <View style={bonusStyle.addBtnStyle.parentContainer}>
    <Text style={bonusStyle.addBtnStyle.txtStyle}>{props.sectionName}</Text>
    <View style={bonusStyle.addBtnStyle.sectionContainer}>
    <View style={bonusStyle.addBtnStyle.numberContainer}>
      <Text style={bonusStyle.addBtnStyle.txtNumberStyle}>{props.sectionNumner}</Text>
    </View>
    <Input
    componentContainerStyle={bonusStyle.addBtnStyle.inputContainerStyle}
    componentInputStyle={bonusStyle.addBtnStyle.inputStyle}
    autoFocus={props.autoFocus}
    onChangeText={props.onChangeText}
    value={props.value}
    // keyboardType='numeric'
    placeholder=''
    returnKeyType={props.returnKeyType}
    />
    </View>
    </View>
  );
};

export { InputValue };

// Choose Icon Component
const ChooseIcon = (props) => {
  console.log(props);
  return (
    <View style={bonusStyle.addBtnStyle.parentContainer}>
      <Text style={bonusStyle.addBtnStyle.txtStyle}>{props.sectionName}</Text>
      <View style={bonusStyle.addBtnStyle.sectionContainer}>
        <View style={bonusStyle.addBtnStyle.numberContainer}>
          <Text style={bonusStyle.addBtnStyle.txtNumberStyle}>{props.sectionNumner}</Text>
        </View>

      {props.icons.map((prop, key) => {
        return (
          <TouchableOpacity
            key={key}
            style={[bonusStyle.addBtnStyle.iconContainer,
              { backgroundColor: prop.selected ? primaryColor : '#fff' }]}
          >
            <Icon
              name={prop.name}
              type={prop.type}
              size={40}
              color={prop.selected ? '#fff' : primaryColor}
              onPress={() => props.onPress(prop.id)}
            />
          </TouchableOpacity>
        );
      })}

      </View>
    </View>
  );
};

export { ChooseIcon };

// Choose Color Component
const ChooseColor = (props) => {
  return (
    <View style={bonusStyle.addBtnStyle.parentContainer}>
    <Text style={bonusStyle.addBtnStyle.txtStyle}>{props.sectionName}</Text>
    <View style={bonusStyle.addBtnStyle.sectionContainer}>
    <View style={bonusStyle.addBtnStyle.numberContainer}>
      <Text style={bonusStyle.addBtnStyle.txtNumberStyle}>{props.sectionNumner}</Text>
    </View>
    {props.colors.map((prop, key) => {
      return (
        <TouchableOpacity
        key={key}
        onPress={() => props.onPress(prop.id)}
        style={[bonusStyle.addBtnStyle.colorContainer, { backgroundColor: prop.selected ? primaryColor : '#fff' }]}
        >
          <View style={[bonusStyle.addBtnStyle.colorSection, { backgroundColor: prop.color }]} />
        </TouchableOpacity>
      );
    })}
    </View>
    </View>
  );
};

export { ChooseColor };
