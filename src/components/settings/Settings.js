import _ from 'lodash';
import React, { Component } from 'react';
import { Modal, Text, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import Dash from 'react-native-dash';
import { Icon } from 'react-native-elements';
import { RaisedTextButton } from 'react-native-material-buttons';
import { AppButton, Header } from '../common';
import { primaryColor, secondaryColor } from '../../config';
import { fetchFAQ, signOutUser } from '../../redux/actions';
import { styles } from './style';
import { CompanyInfo, FAQ, Checks, ContactUs, TermsCondition } from './helpers';

class Settings extends Component {
  state = {
    isModalVisible: false,
    modalChild: null
  };

  componentWillMount() {
    this.props.fetchFAQ();
  }


  _showModal = (input) => this.setState({ modalChild: input, isModalVisible: true });
  _hideModal = () => this.setState({ isModalVisible: false });

  signOut = () => this.props.signOutUser();

  render() {
    const { modalContainer, sectionContainer, scrollContainer, viewContainer } = styles;
    return (
      <View style={viewContainer}>
        <Header
          headerText='More'
          componentTextStyle={styles.headerText}
        />
        <ScrollView>
        <View contentContainerStyle={scrollContainer}>
          <Text style={sectionContainer.header}>
            Ditt konto
          </Text>
          <View style={sectionContainer.msgContainer}>
            <Section
              onPress={(e) => this._showModal('compInfo', e)}
              text='Företags information'
            />
            <Section
              onPress={(e) => this._showModal('null', e)}
              text='Ändra inställningar'
            />
            <Section
              onPress={(e) => this._showModal('Check', e)}
              text='Mina checker'
            />
          </View>
          <Dashed />
        </View>

        <View contentContainerStyle={scrollContainer}>
          <Text style={sectionContainer.header}>
            Support
          </Text>

          <View style={sectionContainer.msgContainer}>
            <Section
              onPress={(e) => this._showModal('contact', e)}
              text='Kontakta oss'
            />

            <Section
              onPress={(e) => this._showModal('FAQ', e)}
              text='FAQ'
            />

            <Section
              text='App version: 0.01'
            />
          </View>
          <Dashed />
        </View>

        <View contentContainerStyle={scrollContainer}>
          <Text style={sectionContainer.header}>
            Användarvilkor
          </Text>
          <View style={sectionContainer.msgContainer}>
            <Section
              onPress={(e) => this._showModal('terms', e)}
              text='Terms & Policy'
            />
          </View>
          <Dashed />
        </View>

        <RaisedTextButton
          style={{ margin: 10 }}
          title='Sign Out'
          onPress={this.signOut}
          color={secondaryColor}
          titleColor='white'
        />

        <Modal
          visible={this.state.isModalVisible}
          animationType={"slide"}
          transparent
        >
          <View style={modalContainer}>
            <Icon
              name='arrow-down'
              type='evilicon'
              color='#424242'
              size={30}
              containerStyle={{ alignSelf: 'flex-end', padding: 5 }}
              onPress={this._hideModal}
            />
            {(() => {
              switch (this.state.modalChild) {
               case "compInfo": return <CompanyInfo info={this.props.store} />;
               case "FAQ": return <FAQ faq={this.props.faq} />;
               case "Check": return <Checks faq={this.props.faq} />;
               case "contact": return <ContactUs info={this.props.store} />;
               case "terms": return <TermsCondition faq={this.props.faq} />;
               default: return <FAQ faq={this.props.faq} />;
              }
            })()}
          </View>
        </Modal>
        </ScrollView>
      </View>
    );
  }
}

const Section = ({ text, onPress }) => {
  const { sectionStyle } = styles;

  return (
    <View>
      <Dashed />
      <View style={sectionStyle.textContainer}>
        <AppButton
          text={text}
          onPress={onPress}
          componentButtonStyle={sectionStyle.btnStyle}
          componentTextStyle={sectionStyle.btnTxt}
        />
      </View>
    </View>
  );
};

const Dashed = () =>
  <Dash dashColor={primaryColor} dashThickness={1} dashLength={3} />;

const mapStateToProps = ({ user }) => {
  const store = user.info;
  const faq = _.map(user.faq, (val, uid) => {
    return { ...val, uid };
  });
  return { store, faq };
};

const mapDispatchToProps = {
  signOutUser,
  fetchFAQ
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
