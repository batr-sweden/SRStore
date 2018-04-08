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
    placeholder={props.placeholder}
    returnKeyType={props.returnKeyType}
    />
    </View>
    </View>
  );
};

export { InputValue };

// Choose Icon Component
const ChooseIcon1 = (props) => {
  console.log(props);
  return (
        <TouchableOpacity
          onPress={props.onPress}
          style={[bonusStyle.addBtnStyle.iconContainer, props.color]}
        >
          <Icon
            name={props.name}
            type={props.type}
            size={40}
            color={props.iconColor}
          />
        </TouchableOpacity>
  );
};
export { ChooseIcon1 };

const ChooseIcon = (props) => {
  console.log(props);
  return (
    <View style={bonusStyle.addBtnStyle.parentContainer}>
      <Text style={bonusStyle.addBtnStyle.txtStyle}>Kategori</Text>
      <View style={bonusStyle.addBtnStyle.sectionContainer}>
        <View style={bonusStyle.addBtnStyle.numberContainer}>
          <Text style={bonusStyle.addBtnStyle.txtNumberStyle}>4</Text>
        </View>
        {props.icons.map((prop, key) => {
          console.log(prop);
          return (
            <TouchableOpacity
              key={key}
              onPress={() => props.onPress(prop.name)}
              style={[bonusStyle.addBtnStyle.iconContainer, { backgroundColor: prop.selected ? primaryColor : '#fff' }]}
            >
              <Icon
                name={prop.name}
                type={prop.type}
                size={40}
                color={prop.selected ? '#fff' : primaryColor}
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
      console.log(prop);
      return (
        <TouchableOpacity
        key={key}
        onPress={() => props.onPress(prop.color)}
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
