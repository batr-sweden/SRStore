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
            style={[bonusStyle.addBtnStyle.iconContainer, props.iconContainer]}
          >
            <Icon
              name={prop.name}
              type={prop.type}
              size={40}
              color={prop.selected ? 'red' : 'green'}
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
    <View style={bonusStyle.addBtnStyle.colorContainer}>
    <View style={[bonusStyle.addBtnStyle.colorSection, props.colorSectionOne]} />
    </View>
    <View style={bonusStyle.addBtnStyle.colorContainer}>
    <View style={[bonusStyle.addBtnStyle.colorSection, props.colorSectionTwo]} />
    </View>
    <View style={bonusStyle.addBtnStyle.colorContainer}>
    <View style={[bonusStyle.addBtnStyle.colorSection, props.colorSectionThree]} />
    </View>
    </View>
    </View>
  );
};

export { ChooseColor };
