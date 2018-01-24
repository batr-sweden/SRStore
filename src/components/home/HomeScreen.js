import _ from 'lodash';
import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { LayoutAnimation, View, FlatList, StatusBar, Alert } from 'react-native';
import { btnFetch } from '../../redux/actions';
import { Header, RewardButton, Spinner } from '../common';
import homeStyle from './styles';

//ANIMATION FOR DIFFERENT VIEW SIGNUP / SIGNIN
const CustomLayoutSpring = {
    duration: 500,
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
      springDamping: 0.1,
    },
  };

class HomeScreen extends Component {
state = {
  item: null,
  toggle: false,
  selectedItem: 'null',
  display: 'none'
}

//Fetch button from firebase
 componentWillMount() {
   this.props.btnFetch();
 }

//SignOutUser
 signOut() {
     this.props.signOutUser();
   }
//Removes This Button From FireBase
  _removeFirebaseData = (rowItem) => {
    const { currentUser } = firebase.auth();
    this.setState({ selectedItem: rowItem.uid });
    console.log(rowItem.uid);
    firebase.database().ref(`/Stores/${currentUser.uid}/logic/rewardBtns/${rowItem.uid}`)
    .remove()
    .then(() => {
      this.props.btnFetch();
    });
  }

  _deleteButton = (item) => {
    console.log('Delete');
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

 _nav() {
   this.props.navigation.navigate('CreateButton');
 }

_onPressAction = (rowItem) => {
    console.log('ListItem was selected');
    LayoutAnimation.configureNext(CustomLayoutSpring);
    this.setState({ selectedItem: rowItem.uid, toggle: !this.state.toggle });
    if (this.state.toggle) {
      // this.setState({ selectedItem: 'null' });
    }
  }

 _renderBtn = ({ item }) => {
   const isSelectedUser = this.state.selectedItem === item.uid;
    console.log(`Rendered item - ${item.uid} for ${isSelectedUser}`);
    const viewStyle = isSelectedUser ? homeStyle.showMore : homeStyle.hideMore;
   return (
     <RewardButton
      text={item.name}
      onPressMore={() => this._onPressAction(item)}
      onPressEdit={() => console.log('Edit')}
      onPressDelete={() => this._deleteButton(item)}
      onPressButton={() => console.log(this.state)}
      parentStyle={{ backgroundColor: item.color }}
      expandViewStyle={viewStyle}
      categoryText={item.category}
      infoText={item.info}
      iconName={item.iconName}
      iconType={item.iconType}
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
      <StatusBar barStyle="light-content" />
      <Header
        componentInputContainerStyle={{ display: 'flex' }}
        componentSortStyle={{ display: 'flex' }}
        componentViewStyle={{ height: 80 }}
        placeholder={'Sök..'}
        sortExpand={{ display: this.state.display }}
        onPress={() => this.props.navigation.navigate('createCheck')}
      />
      <View style={homeStyle.buttonContainer}>
        { this._renderSpinner() }
      </View>
    </View>
  );
 }
}

const mapStateToProps = ({ btns }) => {
  const logic = _.map(btns.logic, (val, uid) => {
    return { ...val, uid };
  });
  const loading = btns.loading;
  //Pass state to Component
  return { logic, loading };
};


export default connect(mapStateToProps, {
  btnFetch,
})(HomeScreen);
