import React from 'react';
import { Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Card, Icon } from 'react-native-elements';

export const ImageComponent = (props) => {
  return (
    <Card
      containerStyle={styles.containerStyle}
      image={{ uri: props.backgroundImg }}
      wrapperStyle={{ paddingVertical: 0 }}
      imageStyle={{ height: 200 }}
    >
      <Image
       style={styles.img}
       source={{ uri: props.logo }}
      />
      <Text style={{ fontSize: 20, bottom: -10 }}>
        {props.storeName}
      </Text>
      <TextField
        multiline
        editable={props.updateForm.img_sec}
        inputContainerStyle={styles.textfield}
        label='Mini Advert'
        value={props.storeDescription}
        characterRestriction={140}
      />
      <TouchableOpacity
        style={{ flexDirection: 'row', justifyContent: 'flex-end' }}
        onPress={() => props.toggleForm('img_sec', props.updateForm.img_sec)}
      >
        <Icon color='#517fa4' type='evilicon' name='pencil' size={32} />
      </TouchableOpacity>
    </Card>
  );
};

export const styles = StyleSheet.create({
  containerStyle: {
    margin: 0,
    borderWidth: 0
  },
  img: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 10,
    alignSelf: 'flex-start',
    top: -200,
    position: 'absolute',
    zIndex: 1
  }
});
