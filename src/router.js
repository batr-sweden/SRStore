import React from 'react';
import { Icon } from 'react-native-elements';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { primaryColor } from './styles';
import LoginScreen from './components/auth/LoginScreen';
import home from './components/home/home';

export const NotAuthenticated = StackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Login',
      header: null
    }
  },
});

export const createButtonStack = StackNavigator({
  Main: {
    screen: home,
    navigationOptions: {
      header: null,
    },
  },
});

export const Authenticated = TabNavigator({
  landingScreen: {
    screen: home,
    navigationOptions: {
      tabBarLabel: 'SYSTEM',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={35} color={tintColor} />
      )
    }
   },
}, {
  tabBarOptions: {
    activeTintColor: primaryColor,
    style: {
    backgroundColor: 'transparent',
    ...ifIphoneX({
      marginBottom: 20,
    })
  },
  }
});
