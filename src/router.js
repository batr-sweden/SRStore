import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { LogIn, SignUp, HomeScreen, Settings } from './components';
import { primaryColor, secondaryColor } from '../src/config';


export const NotAuthenticated = StackNavigator({
  LogIn: {
    screen: LogIn,
    navigationOptions: {
      title: 'Login',
      header: null
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'Sign Up',
      header: null
    }
  }
});

export const Authenticated = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={40} color={tintColor} />
      )
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'More',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="more-horiz" size={40} color={tintColor} />
      )
    }
  }
}, {
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: secondaryColor,
    inactiveTintColor: primaryColor
  },
});
