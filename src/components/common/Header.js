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
  componentTextStyle,
  placeholder,
  onChangeText,
  value,
  onPress,
  sortExpand }) => {
  const { sortStyle, textStyle, parentViewStyle, viewStyle, inputContainerStyle } = styles;
  // <Input
  //   placeholder={placeholder}
  //   placeholderTextColor={searchText}
  //   onChangeText={onChangeText}
  //   value={value}
  //   componentContainerStyle={[inputContainerStyle, componentInputContainerStyle]}
  //   componentInputStyle={{ fontSize: 15, color: searchText, borderWidth: 1, borderRadius: 5 }}
  // />
  return (
    <View style={{ marginBottom: 10, }}>
    <View style={[viewStyle, componentViewStyle]}>
      <View style={parentViewStyle}>
<View style={{ flex: 1, alignItems: 'flex-start' }}>
<Icon
  name='search'
  type='evilicon'
  size={40}
  color={primaryColor}
/>
</View>
        <Text style={[textStyle, componentTextStyle]}>{headerText}</Text>
        <View style={[sortStyle, componentSortStyle]}>
          <TouchableOpacity onPress={onPress}>
            <Icon
              name='plus'
              type='evilicon'
              size={40}
              color={primaryColor}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    <View style={[sortExpand, sortExpand]}>
    <View style={{ backgroundColor: '#FFF', alignItems: 'center', height: 60 }}>
    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', }} onPress={() => console.log('hello')}>
    <View style={{ alignItems: 'flex-start', justifyContent: 'center', marginLeft: 10, }}>
    <Icon
  name='library-add'
  type='material'
  color={primaryColor}
  size={40}
  containerStyle={{ margin: 0 }}
  onPress={() => console.log('hello')}
  />
  </View>
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
  <Text style={{ fontWeight: '400', fontSize: 23, marginLeft: -70, }}>
  Skapa bonussystem
  </Text>
  </View>
  </TouchableOpacity>
  </View>
    </View>
    </View>
  );
};

const styles = {
  sortExpand: {
    backgroundColor: '#FFF', alignItems: 'center', height: 60
  },
  viewStyle: {
    height: 80,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#A2A6AC'
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

  }
};

// Make the component available to other parts of the app
export { Header };
