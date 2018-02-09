import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from '../common';
import { IconContainer } from './components/iconContainer';

class more extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Header
      textStyle={{ display: 'flex' }}
      headerText='Mer'
      />
      <View style={{ flex: 2 }} />
      <View style={{ flex: 1, flexDirection: 'row' }}>
      <IconContainer
      iconName='user'
      name='Marknadsföring'
      onPress={() => console.log('Marknadsföring')}
      viewContainer={{ backgroundColor: '#449faa', }}
      touchableContainer={{ backgroundColor: '#449faa', }}
      displayContainer={{ display: 'none' }}
      />
      <IconContainer
      iconName='search'
      name='Kundundersökning'
      onPress={() => console.log('Kundundersökning')}
      viewContainer={{ backgroundColor: '#5dacb5', }}
      touchableContainer={{ backgroundColor: '#5dacb5', }}
      displayContainer={{ display: 'none' }}
      />
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
      <IconContainer
      iconName='like'
      name='Sociala medier'
      onPress={() => console.log('Sociala medier')}
      viewContainer={{ backgroundColor: '#5dacb5' }}
      touchableContainer={{ backgroundColor: '#5dacb5' }}
      displayContainer={{ display: 'none' }}
      />
      <IconContainer
      iconName='envelope'
      name='Push notiser'
      onPress={() => console.log('Push notiser')}
      viewContainer={{ backgroundColor: '#449faa', }}
      touchableContainer={{ backgroundColor: '#449faa', }}
      displayContainer={{ display: 'none' }}
      />
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
      <IconContainer
      iconName='chart'
      name='Analys'
      onPress={() => console.log('Analys')}
      viewContainer={{ backgroundColor: '#449faa', }}
      touchableContainer={{ backgroundColor: '#449faa', }}
      displayContainer={{ display: 'none' }}
      />
      <IconContainer
      iconName='plus'
      name='Premium'
      onPress={() => console.log('Premium')}
      viewContainer={{ backgroundColor: '#5dacb5' }}
      touchableContainer={{ backgroundColor: '#5dacb5' }}
      displayContainer={{ display: 'none' }}
      />
      </View>
      </View>

    );
  }
}
export default more;
