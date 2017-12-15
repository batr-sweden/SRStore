import React from 'react';
import { Icon } from 'react-native-elements';
import { Text, View, TouchableOpacity } from 'react-native';
import { Input } from '../common';
import { primaryColor, searchText } from '../../config';

// Make a component
const Header = ({
  componentSortStyle,
  componentViewStyle,
  componentInputContainerStyle,
  headerText,
  componentTextStyle }) => {
  const { sortStyle, textStyle, parentViewStyle, viewStyle, inputContainerStyle } = styles;

  return (
    <View style={[viewStyle, componentViewStyle]}>
      <View style={parentViewStyle}>
        <Input
          placeholder="Sök..."
          placeholderTextColor={searchText}
          componentContainerStyle={[inputContainerStyle, componentInputContainerStyle]}
          componentInputStyle={{ fontSize: 15, color: searchText }}
        />
        <Text style={[textStyle, componentTextStyle]}>{headerText}</Text>
        <View style={[sortStyle, componentSortStyle]}>
          <TouchableOpacity onPress={() => console.log('hello')}>
            <Icon
              name='sort-amount-desc'
              type='font-awesome'
              color='#fff'
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = {
  viewStyle: {
    height: 60,
    backgroundColor: primaryColor,
    shadowColor: primaryColor,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
  },
  textStyle: {
    display: 'none',
    flex: 1,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '600',
    color: '#212121'
  },
  parentViewStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  inputContainerStyle: {
    display: 'none',
    borderRadius: 5,
    height: 30,
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  sortStyle: {
    display: 'none',
    justifyContent: 'center',
    height: 30,
    marginLeft: 10,
    marginRight: 15,
  }
};

// Make the component available to other parts of the app
export { Header };
