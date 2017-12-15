import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  KeyboardAvoidingView,
  LayoutAnimation,
  View,
  Text } from 'react-native';
import SignInForm from './SignInForm';
import { primaryColor, textColorSignIn } from '../../styles';

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
    // return <SignUpForm />;
  }
  return <SignInForm />;
}
    render() {
        return (
          <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: primaryColor }}>
              <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: textColorSignIn, fontWeight: '100', fontSize: 55 }}>
                BATHER
                </Text>
                <Text style={{ fontSize: 17, color: textColorSignIn, fontWeight: '200' }}>
                Business
                </Text>
              </View>
                {this.renderDisplay()}
            </View>
          </KeyboardAvoidingView>
        );
    }
    }

    const mapStateToProps = ({ auth }) => {
      const { signUp } = auth;
        return { signUp };
    };

    export default connect(mapStateToProps)(LoginScreen);
