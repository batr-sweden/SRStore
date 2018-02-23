import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { SimpleCheck, Button } from '../common';
import { InputValue, ChooseIcon, ChooseColor } from './Component';
import bonusStyle from './styles';

//Create Button Component
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

  _selectedIcon = (id) => {
    const newState = this.state.icons.map(obj => {
      if (obj.selected) {
        return Object.assign({}, obj, { selected: !obj.selected });
      }
      if (obj.id === id) {
        return Object.assign({}, obj, { selected: !obj.selected });
      }
      return obj;
    });

    this.setState({ icons: newState });
    // const isSelectedUser = this.state.selectedItem === id;
    //  console.log(`Rendered item - ${id} for ${isSelectedUser}`);
  };

  _selectedColor = (id) => {
    const newState = this.state.colors.map(obj => {
      if (obj.selected) {
        return Object.assign({}, obj, { selected: !obj.selected });
      }
      if (obj.id === id) {
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
      source={require('../../images/qrcode-static.png')}
      value={props.item.value}
      description={props.item.description}
      expire={props.item.expire}
      parentStyle={bonusStyle.addBtnStyle.checkStyle}
      buttonStyle={bonusStyle.addBtnStyle.displayCheckBtn}
    />
  );
  }
  _checkValue = () => {
    const props = this.props.navigation.state.params;
    if (props.item.value) {
      return (
        props.item.value
      );
    } return;
  }

  render() {
    return (
      <View style={bonusStyle.addBtnStyle.viewContainer}>
        <ScrollView>
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          {this._renderCheck()}
          </View>
          <InputValue
            sectionName='Poäng för att uppnå check'
            sectionNumner='1'
            autoFocus
            onChangeText={(text) => console.log(text)}
            value={this._checkValue()}
          />
          <InputValue
            sectionName='Poäng tillgodo vid köp'
            sectionNumner='2'
            onChangeText={(text) => console.log(text)}
          />
          <InputValue
            sectionName='Namnge knappen'
            sectionNumner='3'
            onChangeText={(text) => console.log(text)}
          />
          <ChooseIcon
            onPress={(id) => this._selectedIcon(id)}
            sectionName='Kategori'
            sectionNumner='4'
            color={this.state.icons}
            icons={this.state.icons}
          />
          <ChooseColor
            sectionName='Färg'
            sectionNumner='5'
            onPress={(id) => this._selectedColor(id)}
            colors={this.state.colors}

          />
          <InputValue
            sectionName='Notering'
            sectionNumner='6'
          />
          <Button
            buttonContainerStyle={bonusStyle.addBtnStyle.btnStyle}
            text='Skapa'
            onPress={() => console.log('CreateBtn')}
          />
        </ScrollView>
      </View>
    );
  }
}

export default addBtn;
