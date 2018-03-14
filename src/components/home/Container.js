import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LayoutAnimation, View, FlatList, Alert, StatusBar } from 'react-native';
import { fetchUser, deleteBtn } from '../../redux/actions';
import { Header, RewardButton, Spinner } from '../common';
import homeStyle from './styles';
import { CustomLayoutSpring } from './Component';

class HomeScreen extends Component {
state = {
  item: null,
  toggle: false,
  selectedItem: 'null',
}

  componentWillMount() {
    //Fetch user info from firebase
    this.props.fetchUser();
  }

//Removes This Button From FireBase
  _removeFirebaseData = (rowItem) => {
    /**
      ALL LOGICS SHOULD BE IN REDUX FOLDER NOT HERE
    **/
    this.setState({ selectedItem: rowItem.uid });
    console.log(rowItem.uid);
    this.props.deleteBtn();
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
  fetchUser,
  deleteBtn
})(HomeScreen);
