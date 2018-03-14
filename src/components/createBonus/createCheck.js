import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import { checkFetch } from '../../redux/CheckReducer';
import { CreateCheck, Check, Spinner } from '../common';
import bonusStyle from './styles';

class createCheck extends Component {
  state = {
    item:
    {
    value: '',
    expire: '',
    description: '',
    uid: '23123'
    }
  }
//Fetch Check from firebase before component lanches
  componentWillMount() {
    this.props.checkFetch();
  }

  _oldCheck = (item) => {
    this.props.navigation.navigate('addBtn', { item });
}
  _newCheck = () => {
    this.props.navigation.navigate('addBtn', { item: this.state.item });
}

//Render Check and pass item as prop
  _renderCheck = ({ item }) => {
    return (
      <View style={bonusStyle.checkContainer}>
      <Check
        source={require('../../images/qrcode-static.png')}
        value={item.value}
        description={item.description}
        expire={item.expire}
        onPress={() => this._oldCheck(item)}
      />
      </View>
    );
  }
//Render Spinner until we fetch checks.
  _renderSpinner() {
    if (this.props.loading) {
      return (<Spinner size='large' />
    );
    }
        return (
          <FlatList
            horizontal
            data={this.props.check}
            renderItem={this._renderCheck}
            keyExtractor={item => item.uid}
            enableEmptySections
            removeClippedSubviews={false}
          />
        );
    }
  render() {
    return (
      <View style={bonusStyle.createCheckContainer}>
        <View style={bonusStyle.alignText}>
          <Text style={bonusStyle.txtStyle}>
            Skapa bonus check
          </Text>
        </View>
        <View style={bonusStyle.checkContainer}>
        <CreateCheck
          onChangeCheckValue={(value) => {
           const item = Object.assign({}, this.state.item, { value });
           console.log(item);
           this.setState({ item });
         }}
          onChangeCheckDescription={(description) => {
           const item = Object.assign({}, this.state.item, { description });
           console.log(item);
           this.setState({ item });
         }}
          onChangeCheckExpire={(expire) => {
           const item = Object.assign({}, this.state.item, { expire });
           console.log(item);
           this.setState({ item });
         }}
          source={require('../../images/qrcode-static.png')}
          onPress={() => this._newCheck()}
        />

        </View>
        <Text style={bonusStyle.textStyle}>
          Välj befintlig check
        </Text>
        { this._renderSpinner() }
      </View>
    );
  }
}
const mapStateToProps = ({ checks }) => {
  const check = _.map(checks.check, (val, uid) => {
    return { ...val, uid };
  });
  const loading = checks.loading;

  return { check, loading };
};
export default connect(mapStateToProps, {
  checkFetch,
})(createCheck);
