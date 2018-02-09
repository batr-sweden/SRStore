import React from 'react';
import { Icon } from 'react-native-elements';
import { Text, View, TouchableOpacity } from 'react-native';
import { primaryColor } from '../../config';

// Make a component
const Header = (props) => {
  const {
    parentViewContainer,
    searchContainer,
    sortStyle,
    textStyle,
    contentContainer,
    viewContainer } = styles;
  return (
    <View style={parentViewContainer}>
      <View style={viewContainer}>
        <View style={contentContainer}>
          <View style={[searchContainer, props.searchContainer]}>
            <Icon
              name='search'
              type='evilicon'
              size={35}
              color={primaryColor}s
            />
          </View>
          <Text style={[textStyle, props.textStyle]}>{props.headerText}</Text>
          <View style={[sortStyle, props.sortStyle]}>
            <TouchableOpacity onPress={props.onPress}>
              <Icon
                name='plus'
                type='evilicon'
                size={35}
                color={primaryColor}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = {
  parentViewContainer: {
     backgroundColor: '#fff'
  },
  searchContainer: {
    flex: 1,
    display: 'none',
    alignItems: 'flex-start',
  },
  sortExpand: {
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  viewContainer: {
    marginTop: 15,
    height: 50,
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
    fontSize: 22,
    fontWeight: '500',
    color: '#424242'
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
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
    height: 30,
    marginLeft: 10,

  }
};

// Make the component available to other parts of the app
export { Header };
