import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import { btnFetch } from '../../redux/actions';
import { Header, RewardButton, Spinner } from '../common';
import homeStyle from './styles';

class HomeScreen extends Component {
//Fetch button from firebase
 componentWillMount() {
   this.props.btnFetch();
 }
//SignOutUser
 signOut() {
     this.props.signOutUser();
   }

 _nav() {
   console.log('clicked');
   this.props.navigation.navigate('CreateButton');
 }

 _renderBtn({ item }) {
   return (
     <RewardButton
      text={item.name}
      onPress={() => console.log('yoyo')}
      onPress={() => console.log(item.name, item.point, item.pointValue, item.category, item.color)}
      componentParentStyle={{ backgroundColor: item.color }}
      categoryText={item.category}
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
           renderItem={this._renderBtn}
           keyExtractor={item => item.uid}
         />
       );
   }

 render() {
   return (
     <View style={{ flex: 1, backgroundColor: 'transparent' }}>
      <StatusBar barStyle="light-content" />
      <Header
        componentInputContainerStyle={{ display: 'flex' }}
        componentSortStyle={{ display: 'flex' }}
        componentViewStyle={{ height: 80 }}
      />
      <View style={{ flex: 1, justifyContent: 'center' }}>
        { this._renderSpinner() }
      </View>
      <View style={{ right: 0, bottom: 0, position: 'absolute' }}>
        <Icon
          reverse
          name='plus-square-o'
          type='font-awesome'
          color='#449faa'
          containerStyle={homeStyle.iconStyle}
          iconStyle={{ color: '#fff' }}
          // onPress={{}}
          size={30}
        />
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
