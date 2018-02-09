import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import {
  emailChanged,
  passwordChanged,
  rePasswordChanged,
  passwordCheck,
  phoneChanged,
  contactChange,
  storeNameChange,
  formChanges
} from '../../redux/actions';
import { AppButton, Card, CardSection, Input, Spinner } from '../common';
import { authStyles } from './styles';

class SignUp extends Component {

  onChangeForm() {
    this.props.formChanges(false);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onStoreNameChange(text) {
    this.props.storeNameChange(text);
  }

  onContactChange(text) {
    this.props.contactChange(text);
  }

  onPhoneChange(text) {
    this.props.phoneChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onRePasswordChange(text) {
    this.props.rePasswordChanged(text);
  }

  signMeUp() {
    const { email, storeName, phone, contactName, password, rePassword } = this.props;

    this.props.passwordCheck({ email, storeName, phone, contactName, password, rePassword });
  }

  navigateToPage() {
    this.props.pageNav();
    this.props.navigation.goBack();
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <AppButton
        onPress={this.signMeUp.bind(this)}
        text="Sign up"
        componentTextStyle={authStyles.signUpBtn.message}
        componentButtonStyle={authStyles.signUpBtn.btn}
      />
    );
  }
  render() {
    return (
      <View style={{ flex: 10 }}>
        <Card style={authStyles.cardStyle}>
          <Card style={authStyles.sectionStyle}>
            <CardSection style={authStyles.headerMsg.container}>
              <Text style={authStyles.headerMsg.message}>
                Become a BATR Business member {'\n'}
                This application is free to use.
              </Text>
            </CardSection>

            <CardSection style={authStyles.infoDiv.container}>
              <Text style={authStyles.infoDiv.message}>
                Your Information
              </Text>
            </CardSection>
            <CardSection>
              <Input
                placeholder="Contact Full Name"
                onChangeText={this.onContactChange.bind(this)}
                value={this.props.contact}
                inputStyle={authStyles.inputStyle}
                labelStyle={authStyles.labelStyle}
              />
            </CardSection>
            <CardSection>
              <Input
                placeholder="Store Name"
                onChangeText={this.onStoreNameChange.bind(this)}
                value={this.props.storeName}
                inputStyle={authStyles.inputStyle}
                labelStyle={authStyles.labelStyle}
              />
            </CardSection>
            <CardSection>
              <Input
                keyboardType='phone-pad'
                placeholder="Phone Number"
                onChangeText={this.onPhoneChange.bind(this)}
                value={this.props.phone}
                inputStyle={authStyles.inputStyle}
                labelStyle={authStyles.labelStyle}
              />
            </CardSection>

            <CardSection style={authStyles.infoDiv.container}>
              <Text style={authStyles.infoDiv.message}>
                Log In Information
              </Text>
            </CardSection>
            <CardSection>
              <Input
                keyboardType='email-address'
                placeholder="email@provider.com"
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
                inputStyle={authStyles.inputStyle}
                labelStyle={authStyles.labelStyle}
              />
            </CardSection>
            <CardSection>
              <Input
                secureTextEntry
                placeholder="Password"
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
                inputStyle={authStyles.inputStyle}
                labelStyle={authStyles.labelStyle}
              />
            </CardSection>
            <CardSection>
              <Input
                secureTextEntry
                placeholder="Re type password"
                onChangeText={this.onRePasswordChange.bind(this)}
                value={this.props.rePassword}
                inputStyle={authStyles.inputStyle}
                labelStyle={authStyles.labelStyle}
              />
            </CardSection>
            <Text style={authStyles.errorTextStyle}>
              {this.props.error}
            </Text>

            <CardSection style={authStyles.bottomButton.container}>
              {this.renderButton()}
            </CardSection>

            <CardSection style={authStyles.bottomButton.container}>
              <AppButton
                onPress={this.navigateToPage.bind(this)}
                text="Terms & Policy"
                componentTextStyle={authStyles.bottomButton.message}
                componentButtonStyle={authStyles.bottomButton.button}
              />
              <AppButton
                onPress={this.onChangeForm.bind(this)}
                text="Login"
                componentTextStyle={authStyles.bottomButton.message}
                componentButtonStyle={authStyles.bottomButton.button}
              />
            </CardSection>
          </Card>
        </Card>
        </View>
    );
  }
}

//destructuring done.. check bellow for un destructured
const mapStateToProps = ({ auth }) => {
  const { email, storeName, phone, contactName, password, rePassword, error, loading } = auth;
  //Pass state to Component
  return { email, storeName, phone, contactName, password, rePassword, error, loading };
};


export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  rePasswordChanged,
  passwordCheck,
  contactChange,
  phoneChanged,
  storeNameChange,
  formChanges
})(SignUp);
