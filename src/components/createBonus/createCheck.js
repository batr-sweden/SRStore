import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import { checkFetch } from '../../redux/actions';
import { CreateCheck, Check, Spinner } from '../common';
import bonusStyle from './styles';

class createCheck extends Component {
  state = {
    item: null,
  }

  componentWillMount() {
    this.props.checkFetch();
  }

  _renderCheck = ({ item }) => {
    return (
      <View style={bonusStyle.checkContainer}>
      <Check
        source={require('../../images/qrcode-static.png')}
        value={item.value}
        description={item.description}
        expire={item.expire}
        onPress={() => console.log(item.value)}
      />
      </View>
    );
  }

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
          source={require('../../images/qrcode-static.png')}
          onPress={() => console.log('Skapa check')}
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
