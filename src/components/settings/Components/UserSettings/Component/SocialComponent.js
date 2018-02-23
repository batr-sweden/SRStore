import React from 'react';
import { View } from 'react-native';
import { SocialIcon, CheckBox } from 'react-native-elements';
import { Input } from '../../../../common';
import { styles } from '../Styles';

export const SocialComponent = (props) => {
  return props.socialicon.map((prop, key) => {
    return (
      <View key={key}>
      <View style={prop.checked ? styles.Display : styles.notDisplay}>
      <View style={{ flex: 1, alignItems: 'center', }}>
        <SocialIcon
        center
        type={prop.type}
        />
      </View>
      </View>
    <View style={props.edit}>
    <View>
      <CheckBox
        title={prop.title}
        containerStyle={{
          padding: 0,
          marginLeft: 10,
          marginTop: 15,
          borderWidth: 0,
          backgroundColor: 'transparent' }}
        center
        style={{ backgroundColor: 'transparent' }}
        checked={prop.checked}
        onPress={() => props.onPress(prop.id)}
      />
      </View>
      <View style={prop.checked ? styles.Display : styles.notDisplay}>
      <View style={styles.socialIconContainer}>
   <SocialIcon
   type={prop.type}
   />
   <Input
     placeholder='Lägg till länk'
     placeholderTextColor={'#000'}
     componentContainerStyle={{
       marginRight: 10,
       height: 30,
       flex: 1,
       borderColor: '#449faa',
       borderWidth: 1, }}
   />
   </View>
   </View>
   </View>
   </View>

  );
});
};
