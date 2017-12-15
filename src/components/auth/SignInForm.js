import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, formChanges } from '../../actions';
import { Spinner, Input, Button, CardSection } from '../common';
import { authStyles } from './styles';
import { boxShadow } from '../../styles';
import { inputColorSignUp } from '../../config';

class SignInForm extends Component {

// ACTIONS, CREATES PROPS WHEN USER STARTS TYPEING AND SAVE THE RESULT
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
// - !! -
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  // SETS THE formChanges to true and calls this component.
  onChangeForm() {
    this.props.formChanges(true);
  }
  // Saves the props and check if there is an valid user.
  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }
  // when press render this when loading
  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button
      onPress={this.onButtonPress.bind(this)}
      componentContainerStyle={{ height: 50 }}
      text='Login'
      />
    );
  }

  render() {
    return (
      <View style={authStyles.parentView}>
        <CardSection style={[authStyles.cardSectionStyle, boxShadow]}>
          <StatusBar barStyle="light-content" />
            <Input
              placeholder="E-Mail Adress"
              placeholderTextColor={inputColorSignUp}
              //label="Email"
              value={this.props.email}
              onChangeText={this.onEmailChange.bind(this)}
              returnKeyType="next"
              keyboardType="email-address"
              autoCorrect="none"
              autoCapitalize={false}
              componentContainerStyle={authStyles.inputContainerStyle}
              componentInputStyle={{ color: inputColorSignUp }}
            />
          <View style={authStyles.lineStyle} />
            <Input
              secureTextEntry
              placeholderTextColor={inputColorSignUp}
              placeholder="Password"
              //label="Password"
              value={this.props.password}
              returnKeyType="go"
              onChangeText={this.onPasswordChange.bind(this)}
              componentContainerStyle={authStyles.inputContainerStyle}
              componentInputStyle={{ color: inputColorSignUp }}
            />
          </CardSection>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        {this.renderButton()}
      </View>
      <Text
        onPress={this.onChangeForm.bind(this)}
        style={authStyles.textChangeForm}
      >
          Create an Account
      </Text>
      <Text style={authStyles.errorTextStyle}>
        {this.props.error}
      </Text>
      </View>

    );
  }
}

//destructuring done.. check bellow for un destructured
const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading, signUp } = auth;
  //Pass state to Component
  return { email, password, error, loading, signUp };
};


export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser, formChanges
})(SignInForm);
