import React from 'react';
import { Text, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { Input } from '../../../../common';
import { about } from './Styles';

export const AboutComponent = (props) => {
  return (
    <View style={about.viewContainer}>
      <Text style={about.aboutHeader}>
      {props.storeName.toUpperCase()}
      </Text>
      <View>
        <Divider style={about.divider} />
        <Text style={[about.textDescStyle, props.hide]}>
        Heyday – A combined coffee bar and concept store with a lively atmosphere which stocks tasty bites and festive accessories. We showcase a modern take on every day details with a fresh twist and a pop of color for those who wish to add some love style to their lives.\
        Det är ett sätt att beskriva Heyday. Men för oss är Heyday mycket mer än så. Det är en dröm om att våga gå sin väg, tro på sin idé och vara modig nog att genomföra den. Vi heter Kajsa och Charlotta. Välkommen till oss!,
        </Text>
      </View>
      <Input
        onChangeText={props.onChangeText}
        value={props.value}
        componentContainerStyle={[about.componentContainerStyle, props.edit]}
        componentInputStyle={props.style}
        editable
        placeholderTextColor={'#000'}
        multiline
      />
    </View>
  );
};
