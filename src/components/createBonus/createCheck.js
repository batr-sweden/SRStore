import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import {
  checkFetch,
  checkOfferChange,
  checkDescChange,
  checkExpireChange,
  checkInfoChange,
} from '../../redux/CheckReducer';
import { CreateCheck, Check, Spinner } from '../common';
import bonusStyle from './styles';

class createCheck extends Component {
  constructor(props) {
    super(props);
    this.state = { error: '' };
  }
//Fetch Check from firebase before component lanches
  componentWillMount() {
    this.props.checkFetch();
  }
  changeCheckName(text) {
    this.props.checkOfferChange(text);
  }
  changeCheckDescription(text) {
    this.props.checkDescChange(text);
  }
  changeCheckExpire(text) {
    this.props.checkExpireChange(text);
  }
  changeCheckInfo(text) {
    this.props.checkInfoChange(text);
  }
  _createCheck() {
    const { checkDesc, checkExpire, checkInfo, checkOffer } = this.props;
    let text;
    if (checkOffer === '') {
      text = 'Belöning måste fyllas i';
      this.setState({ error: text });
    } else if (checkDesc === '') {
      text = 'Beskrivning måste fyllas i';
      this.setState({ error: text });
    } else if (checkExpire === '') {
      text = 'Utgångsdatum måste fyllas i';
      this.setState({ error: text });
    } else if (checkInfo === '') {
      text = 'Info måste fyllas i';
      this.setState({ error: text });
    } else {
    this.props.navigation.navigate('addBtn', { item: this.props });
    console.log(this.state.error);

    // this.props.checkCreateCheck({ checkDesc, checkExpire, checkInfo, checkOffer, checkValue });
  }
  }

//Render Check and pass item as prop
  _renderCheck = ({ item }) => {
    return (
      <View style={bonusStyle.checkContainer}>
      <Check
        fontSize={29}
        source={require('../../images/qrcode-static.png')}
        value={item.checkValue}
        name={item.checkOffer}
        info={item.checkInfo}
        description={item.checkDesc}
        expire={item.checkExpire}
        onPress={() => this.props.navigation.navigate('addBtn', { item })}
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
          onChangeCheckName={this.changeCheckName.bind(this)}
          onChangeCheckDescription={this.changeCheckDescription.bind(this)}
          onChangeCheckExpire={this.changeCheckExpire.bind(this)}
          onChangeCheckInfo={this.changeCheckInfo.bind(this)}
          source={require('../../images/qrcode-static.png')}
          onPress={() => this._createCheck()}
        />
        </View>
        <Text>{this.state.error}</Text>
        <Text style={bonusStyle.textStyle}>
          Välj befintlig check
        </Text>
        { this._renderSpinner() }
      </View>
    );
  }
}

const mapStateToProps = ({ checks }) => {
  const { checkDesc, checkExpire, checkInfo, checkOffer, checkValue } = checks;
  const check = _.map(checks.check, (val, uid) => {
    return { ...val, uid };
  });
  const loading = checks.loading;

  return { checkDesc, checkExpire, checkInfo, checkOffer, checkValue, check, loading };
};
export default connect(mapStateToProps, {
  checkFetch,
  checkOfferChange,
  checkDescChange,
  checkExpireChange,
  checkInfoChange,
  })(createCheck);
