import _ from 'lodash';
import React, { Component } from 'react';
import { Modal, Text, ScrollView, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Icon, List, ListItem } from 'react-native-elements';
import { Header, Logo } from '../common';
import { fetchFAQ, signOutUser } from '../../redux/actions';
import { styles } from './style';
import {
  CompanyInfo,
  FAQ,
  Checks,
  ContactUs,
  TermsCondition,
  UserSettings,
  accountList,
  supportList,
  termsList,
  moreList } from './Components';


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
          headerText='Alternativ'
        />
        <ScrollView>
        <View contentContainerStyle={scrollContainer}>
        <Logo
          headerText='Mitt konto'
          containerStyle={sectionContainer.h1Container}
          headerStyle={sectionContainer.h1TextStyle}
        />
          <List>
          {
            accountList.map((item, i) => (
              <ListItem
              key={i}
              title={item.title}
              leftIcon={{ color: item.color, name: item.icon, type: item.type }}
              onPress={(e) => this._showModal(item.navigate, e)}
              />
            ))
          }
        </List>
        </View>
        <View contentContainerStyle={scrollContainer}>
        <Logo
          headerText='Support'
          containerStyle={sectionContainer.h1Container}
          headerStyle={sectionContainer.h1TextStyle}
        />
          <List>
          {
            supportList.map((item, i) => (
              <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon, type: item.type }}
              onPress={(e) => this._showModal(item.navigate, e)}
              />
            ))
          }
        </List>
        </View>
        <View contentContainerStyle={scrollContainer}>
          <Logo
            headerText='Användarvillkor'
            containerStyle={sectionContainer.h1Container}
            headerStyle={sectionContainer.h1TextStyle}
          />
          <List>
          {
            termsList.map((item, i) => (
              <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon, type: item.type }}
              onPress={(e) => this._showModal(item.navigate, e)}
              />
            ))
          }
        </List>
        </View>
        <View contentContainerStyle={scrollContainer}>
        <Logo
          headerText='Mer'
          containerStyle={sectionContainer.h1Container}
          headerStyle={sectionContainer.h1TextStyle}
        />
          <List>
          {
            moreList.map((item, i) => (
              <ListItem
              key={i}
              title={item.title}
              leftIcon={{ color: item.color, name: item.icon, type: item.type }}
              onPress={(e) => this._showModal(item.navigate, e)}
              />
            ))
          }
          <ListItem
            title={'Logga ut'}
            leftIcon={{ name: 'logout', type: 'material-community' }}
            onPress={this.signOut}
          />
        </List>
        </View>
        <Modal
          visible={this.state.isModalVisible}
          animationType={"slide"}
          transparent
        >
        <StatusBar hidden />
          <View style={modalContainer}>
            <Icon
              raised
              name='close'
              type='font-awesome'
              color='#000'
              size={15}
              containerStyle={{ backgroundColor: '#fff' }}
              containerStyle={styles.hideIconStyle}
              onPress={this._hideModal}
            />
            {(() => {
              switch (this.state.modalChild) {
               case "compInfo": return <CompanyInfo info={this.props.store} />;
               case "FAQ": return <FAQ faq={this.props.faq} />;
               case "Check": return <Checks faq={this.props.faq} />;
               case "contact": return <ContactUs info={this.props.store} />;
               case "terms": return <TermsCondition faq={this.props.faq} />;
               case "UserSettings": return <UserSettings info={this.props.store} />;
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
