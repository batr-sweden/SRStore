import React from 'react';
import { View } from 'react-native';
import { Card, CheckBox, Icon, SocialIcon } from 'react-native-elements';
import { Input } from '../../../../common';
import { styles } from '../Styles';

export const SocialComponent = (props) => {
  return (
    <Card containerStyle={{ margin: 10, flex: 1 }}>
      {
        props.updateForm ?
        setSocialIcon(props) :
        showSocialIcon(props)
      }
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Icon color='#517fa4' type='evilicon' name='pencil' size={32} />
      </View>
    </Card>
  );
};

const showSocialIcon = (props) =>
  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
    {props.socialicon.map((prop, key) =>
      prop.checked ?
      <View key={key}>
          <SocialIcon
            center
            type={prop.type}
          />
      </View>
      : null
    )}
  </View>

const setSocialIcon = (props) =>
  props.socialicon.map((prop, key) =>
    <View key={key}>
      <View>
        <CheckBox
          title={`Add ${prop.type} link`}
          containerStyle={{
            padding: 0,
            marginLeft: 10,
            marginTop: 15,
            borderWidth: 0,
            backgroundColor: 'transparent'
          }}
          center
          style={{ backgroundColor: 'transparent' }}
          checked={prop.checked}
          onPress={() => props.updateSocialIcon(prop.type)}
        />
      </View>
      <View style={prop.checked ? styles.display : styles.notDisplay}>
        <View style={styles.socialIconContainer}>
          <SocialIcon
           type={prop.type}
          />
          <Input
           placeholder={`Add ${prop.type} link`}
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
  );
