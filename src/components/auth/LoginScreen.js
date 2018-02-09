import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  KeyboardAvoidingView,
  LayoutAnimation,
  View,
  Text,
  StatusBar } from 'react-native';
import SignInForm from './SignInForm';
import SignUp from './SignUp';
import { authStyles } from './styles';

//ANIMATION FOR DIFFERENT VIEW SIGNUP / SIGNIN
const CustomLayoutSpring = {
    duration: 1400,
    create: {
      type: LayoutAnimation.Types.spring,
      property: LayoutAnimation.Properties.scaleXY,
      springDamping: 0.7,
    },
    update: {
      type: LayoutAnimation.Types.spring,
      springDamping: 0.3,
    },
  };

class LoginScreen extends Component {

//CALL THE ANIMATION WHEN COMPONENT UPDATES
componentWillUpdate() {
  LayoutAnimation.configureNext(CustomLayoutSpring);
}
// RENDERS SIGNUP OR SIGNIN
renderDisplay() {
  if (this.props.signUp) {
    return <SignUp />;
  }
  return <SignInForm />;
}
    render() {
        return (
          <KeyboardAvoidingView behavior="padding" style={authStyles.screenContainer}>
            <StatusBar
              barStyle="light-content"
            />
              <View style={authStyles.logo.container}>
                <Text style={authStyles.logo.headerText}>
                BATHER
                </Text>
                <Text style={authStyles.logo.underText}>
                Business
                </Text>
              </View>
                {this.renderDisplay()}

          </KeyboardAvoidingView>
        );
    }
    }

    const mapStateToProps = ({ auth }) => {
      const { signUp } = auth;
        return { signUp };
    };

    export default connect(mapStateToProps)(LoginScreen);
