import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Dash from 'react-native-dash';
import { AppButton, Header } from '../common';
import { primaryColor } from '../../config';
import { styles } from './style';
import { signOutUser } from '../../redux/actions';

class Settings extends Component {
  signOut() {
    this.props.signOutUser();
  }

  render() {
    const { logOut, sectionContainer, scrollContainer, viewContainer } = styles;
    return (
      <View style={viewContainer}>
        <Header
        headerText='More'
        />

        <ScrollView contentContainerStyle={scrollContainer}>
          <Text style={sectionContainer.header}>
            Ditt konto
          </Text>
          <View style={sectionContainer.msgContainer}>
            <Section
              text='Företags information'
            />
            <Section
              text='Ändra inställningar'
            />
          </View>
          <Dash dashColor={primaryColor} style={{ width: null, height: 1, }} />
        </ScrollView>

        <AppButton
          text='Sign Out'
          onPress={this.signOut.bind(this)}
          componentButtonStyle={logOut.btnStyle}
          componentTextStyle={logOut.txtStyle}
        />
      </View>
    );
  }
}

const Section = ({ text }) => {
  const { sectionStyle } = styles;

  return (
    <View>
      <Dash dashColor={primaryColor} style={{ width: null, height: 1, }} />
        <View style={sectionStyle.textContainer}>
          <AppButton
            text={text}
            componentButtonStyle={sectionStyle.btnStyle}
            componentTextStyle={sectionStyle.btnTxt}
          />
        </View>
    </View>
  );
};


export default connect(null, { signOutUser })(Settings);
