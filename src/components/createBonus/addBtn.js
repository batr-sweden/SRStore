import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView } from 'react-native';
import {
  checkValueChange,
  btnNameChange,
  btnValueChange,
  btnNoteChange,
  createCheck,
  colorChoosen,
  iconChoosen,
} from '../../redux/CheckReducer';
import { SimpleCheck, Button } from '../common';
import { InputValue, ChooseIcon, ChooseColor } from './Component';
import bonusStyle from './styles';

class addBtn extends Component {
  state = {
    selectedItem: 'null',
    icons: [{
        id: 1,
        name: 'like',
        type: 'evilicon',
        selected: false
      },
      {
        id: 2,
        name: 'heart',
        type: 'evilicon',
        selected: false
      },
      {
        id: 3,
        name: 'star',
        type: 'evilicon',
        selected: false
      }
    ],
    colors: [{
      id: 1,
      color: '#00cec9',
      selected: false
    }, {
      id: 2,
      color: '#0984e3',
      selected: false
    }, {
      id: 3,
      color: '#6c5ce7',
      selected: false
    },
  ]
  }

  onChangeValue(text) {
    this.props.checkValueChange(text);
  }
  onChangeBtnName(text) {
    this.props.btnNameChange(text);
  }
  onChangeBtnPoint(text) {
    this.props.btnValueChange(text);
  }
  onChangeBtnNote(text) {
    this.props.btnNoteChange(text);
  }
  onChangeCoolor(text) {
    this.props.coolorChoosen(text);
  }
  onChangeIcon(text) {
    this.props.iconChoosen(text);
  }

  _selectedIcon = (name) => {
    const newState = this.state.icons.map(obj => {
      if (obj.selected) {
        return Object.assign({}, obj, { selected: !obj.selected });
      }
      if (obj.name === name) {
        return Object.assign({}, obj, { selected: !obj.selected });
      }
      return obj;
    });

    this.setState({ icons: newState });
    // const isSelectedUser = this.state.selectedItem === id;
    //  console.log(`Rendered item - ${id} for ${isSelectedUser}`);
  };

  _selectedColor = (color) => {
    const newState = this.state.colors.map(obj => {
      if (obj.selected) {
        return Object.assign({}, obj, { selected: !obj.selected });
      }
      if (obj.color === color) {
        return Object.assign({}, obj, { selected: !obj.selected });
      }
      return obj;
    });

    this.setState({ colors: newState });
    // const isSelectedUser = this.state.selectedItem === id;
    //  console.log(`Rendered item - ${id} for ${isSelectedUser}`);
  };

  _renderCheck = () => {
    const props = this.props.navigation.state.params;
    return (
    <SimpleCheck
      fontSize={40}
      source={require('../../images/qrcode-static.png')}
      name={props.item.checkOffer}
      description={props.item.checkDesc}
      expire={props.item.checkExpire}
      info={props.item.checkInfo}
      parentStyle={bonusStyle.addBtnStyle.checkStyle}
      buttonStyle={bonusStyle.addBtnStyle.displayCheckBtn}
    />
  );
  }
  _createCheck = () => {
    const {
    checkDesc,
    checkExpire,
    checkInfo,
    checkOffer,
    checkValue,
    btnValue,
    btnNote,
    btnName,
    btnPoint } = this.props;
    this.props.createCheck({
    checkDesc,
    checkExpire,
    checkInfo,
    checkOffer,
    checkValue,
    btnValue,
    btnNote,
    btnName,
    btnPoint });
  }
  _checkValue = () => {
    const props = this.props.navigation.state.params;
    if (props.item.checkValue) {
      return (
        props.item.checkValue.toString()
      );
    } return;
  }

  render() {
    return (
      <View style={bonusStyle.addBtnStyle.viewContainer}>
        <ScrollView>
        <View style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>
          {this._renderCheck()}
          </View>
          <InputValue
            sectionName='Poäng för att uppnå check'
            sectionNumner='1'
            autoFocus
            onChangeText={this.onChangeValue.bind(this)}
            value={this._checkValue()}
          />
          <InputValue
            sectionName='Poäng tillgodo vid köp'
            sectionNumner='2'
            onChangeText={this.onChangeBtnPoint.bind(this)}
          />
          <InputValue
            sectionName='Namnge knappen'
            sectionNumner='3'
            onChangeText={this.onChangeBtnName.bind(this)}
          />
          <ChooseIcon
            onPress={(name) => this._selectedIcon(name)}
            icons={this.state.icons}
          />
          <ChooseColor
            sectionName='Färg'
            sectionNumner='5'
            onPress={(color) => this._selectedColor(color)}
            colors={this.state.colors}
          />
          <InputValue
            sectionName='Notering'
            sectionNumner='6'
            onChangeText={this.onChangeBtnNote.bind(this)}
          />
          <Button
            buttonContainerStyle={bonusStyle.addBtnStyle.btnStyle}
            text='Skapa'
            onPress={() => this._createCheck()}
          />
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = ({ checks, user }) => {
  const btnSettings = user.btnSettings;
  const { checkDesc, checkExpire, checkInfo, checkOffer, checkValue, iconName, btnValue, icon, coolor, btnNote, btnName } = checks;

  return {
    checkDesc,
    checkExpire,
    checkInfo,
    checkOffer,
    checkValue,
    iconName,
    icon,
    coolor,
    btnSettings,
    btnNote,
    btnValue,
    btnName,
   };
};
export default connect(mapStateToProps, {
  createCheck,
  iconChoosen,
  colorChoosen,
  checkValueChange,
  btnNameChange,
  btnValueChange,
  btnNoteChange
})(addBtn);
