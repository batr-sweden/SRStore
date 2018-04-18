import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LayoutAnimation, View, FlatList, Alert, StatusBar, AlertIOS } from 'react-native';
import { fetchUser, deleteBtn, fetchSettings } from '../../redux/UserReducer';
import { Header, RewardButton, Spinner } from '../common';
import homeStyle from './styles';
import { CustomLayoutSpring } from './Component';

class HomeScreen extends Component {

  state = {
    btn: null,
    promptVisible: false,
    loading: false
  }

  //Removes This Button From FireBase
  componentWillMount() {
      //Fetch user info from firebase
      this.props.fetchUser();
      this.props.fetchSettings();
  }
  _removeFirebaseData = (rowItem) => {
    deleteBtn(rowItem.uid);
  }

  _deleteButton = (item) => {
    Alert.alert(
      'VARNING',
      'Vill du radera denna knappen?',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'JA', onPress: () => this._removeFirebaseData(item) },
      ],
      { cancelable: false }
    );
  }

  diplayPointMsg = (points, kund) => {
    Alert.alert(
      kund,
      'Kommer få ' + points + ' bonus pöang',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'JA', onPress: () => console.log('Store to firebase') },
      ],
      { cancelable: false }
    );
  }

  givePoint = (item) => {
    AlertIOS.prompt(
      'Enter Buyer Telephone Number',
      null,
      text => this.diplayPointMsg(item, text)
    );
  }

 _nav() {
   this.props.navigation.navigate('CreateButton');
 }

_onPressAction = (rowItem) => {
    LayoutAnimation.configureNext(CustomLayoutSpring);
    this.setState({ selectedItem: rowItem.uid, toggle: !this.state.toggle });
    if (this.state.toggle) {
    }
  }

 _renderBtn = ({ item }) => {
   const isSelectedUser = this.state.selectedItem === item.uid;
    const viewStyle = isSelectedUser ? homeStyle.showMore : homeStyle.hideMore;
   return (
     <RewardButton
      text={item.btnName}
      onPressMore={() => this._onPressAction(item)}
      onPressEdit={() => console.log('Edit')}
      onPressDelete={() => this._deleteButton(item)}
      onPressButton={() => this.givePoint(item.btnPoint)}
      parentStyle={{ backgroundColor: item.btnColor }}
      expandViewStyle={viewStyle}
      infoText={item.btnNote}
      iconName={item.btnIcon}
      iconType={item.btnIconType}
     />
  );
 }
 _renderSpinner() {
   if (this.props.loading) {
     return (<Spinner size='large' />
   );
   }
       return (
         <FlatList
           data={this.props.logic}
           extraData={this.state}
           renderItem={this._renderBtn}
           keyExtractor={item => item.uid}
         />
       );
   }

 render() {
   return (
     <View style={homeStyle.parentContainer}>
      <Header
        headerText='utdelning'
        onPress={() => this.props.navigation.navigate('createCheck')}
      />
      <StatusBar
        barStyle="dark-content"
      />
      <View style={homeStyle.buttonContainer}>
        { this._renderSpinner() }
      </View>
    </View>
  );
 }
}

const mapStateToProps = ({ user }) => {
  const logic = _.map(user.logic, (val, uid) => {
    return { ...val, uid };
  });
  const loading = user.loading;
  //Pass state to Component
  return { logic, loading };
};

export default connect(mapStateToProps, {
  fetchSettings,
  fetchUser,
  // deleteBtn
})(HomeScreen);
