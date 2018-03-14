import React from 'react';
import { Icon } from 'react-native-elements';
import { StackNavigator, TabNavigator } from 'react-navigation';
// import { ifIphoneX } from 'react-native-iphone-x-helper';
import { Settings, LoginScreen, SignUp, HomeScreen, createCheck, addBtn } from './components';
import { primaryColor, secondaryColor, textFontFamily } from '../src/config';

export const NotAuthenticated = StackNavigator({
  LoginScreen: {
    screen: LoginScreen,
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

export const createButtonStack = StackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  createCheck: {
    screen: createCheck,
    navigationOptions: {
      title: 'Check',
      headerStyle: { height: 60,
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      },
      headerTitleStyle: {
      fontFamily: textFontFamily,
      color: '#424242',
      fontWeight: '300',
      backgroundColor: 'transparent',
      fontSize: 22 },
      headerTintColor: primaryColor
    },
  },
  addBtn: {
    screen: addBtn,
    navigationOptions: {
      title: 'Skapa knapp',
      headerStyle: { height: 60,
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      },
      headerTitleStyle: {
      fontFamily: textFontFamily,
      color: '#424242',
      fontWeight: '300',
      backgroundColor: 'transparent',
      fontSize: 22 },
      headerTintColor: primaryColor
    },
  }
});

export const Authenticated = TabNavigator({
  Home: {
    screen: createButtonStack,
    navigationOptions: {
      tabBarLabel: 'Hem',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={35} color={tintColor} />
      )
    }
   },
   Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Inställningar',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="settings" size={30} color={tintColor} />
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
