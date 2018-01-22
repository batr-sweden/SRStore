import React from 'react';
import { Icon } from 'react-native-elements';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { LoginScreen, SignUp, HomeScreen, Settings, createCheck } from './components';
import { primaryColor, secondaryColor } from '../src/config';

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
      title: 'Skapa check',
      headerStyle: { height: 60, backgroundColor: primaryColor },
      headerTitleStyle: { fontSize: 25 },
      headerTintColor: '#fff'
    },
  }
});

export const Authenticated = TabNavigator({
  Home: {
    screen: createButtonStack,
    navigationOptions: {
      tabBarLabel: 'SYSTEM',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={35} color={tintColor} />
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
  tabBarOptions: {
    activeTintColor: primaryColor,
    style: {
      backgroundColor: 'transparent',
      ...ifIphoneX({
        marginBottom: 20,
      })
    }
  }
}, {
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: secondaryColor,
    inactiveTintColor: primaryColor
  },
});
