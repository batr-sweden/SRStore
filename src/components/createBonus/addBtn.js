import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Check, Button } from '../common';
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

  _renderCheck = () => {
    const props = this.props.navigation.state.params;
    return (
    <Check
      source={require('../../images/qrcode-static.png')}
      value={props.item.value}
      description={props.item.description}
      expire={props.item.expire}
      parentStyle={bonusStyle.addBtnStyle.checkStyle}
      buttonStyle={bonusStyle.addBtnStyle.displayCheckBtn}
    />
  );
  }

  render() {
    return (
      <View style={bonusStyle.addBtnStyle.viewContainer}>
        <ScrollView>
          {this._renderCheck()}
          <InputValue
            sectionName='Poäng för att uppnå check'
            sectionNumner='1'
            autoFocus={true}
          />
          <InputValue
            sectionName='Poäng tillgodo vid köp'
            sectionNumner='2'
          />
          <ChooseIcon
            onPress={(id) => this._selectedIcon(id)}
            sectionName='Kategori'
            sectionNumner='3'
            color={this.state.icons}
            icons={this.state.icons}
          />
          <ChooseColor
            sectionName='Färg'
            sectionNumner='4'
            colorSectionOne={{ backgroundColor: '#00cec9' }}
            colorSectionTwo={{ backgroundColor: '#0984e3' }}
            colorSectionThree={{ backgroundColor: '#6c5ce7' }}
          />
          <InputValue
            sectionName='Notering'
            sectionNumner='5'
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
