import React from 'react';
import { Icon, Divider } from 'react-native-elements';
import { Text, View, TouchableOpacity } from 'react-native';
import { Logo } from './Logo';
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
  <View>
  <View style={{ backgroundColor: '#fff', paddingTop: 10, height: 75, flexDirection: 'row' }}>
  <View style={{ marginLeft: 3, flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
  <Icon
  raised
  name='menu'
  type='simple-line-icon'
  size={18}
  color='#f50'
  onPress={() => console.log('hello')} />
  </View>
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Logo
    headerText={props.headerText.toUpperCase()}
  />
  </View>
  <View style={{ marginRight: 3, flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
  <Icon
  raised
  name='plus'
  type='simple-line-icon'
  size={18}
  color='#f50'
  onPress={props.onPress}
  />
  </View>
  </View>
  <Divider style={{ backgroundColor: '#E0E0E0', marginLeft: 10, marginRight: 10 }} />
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
