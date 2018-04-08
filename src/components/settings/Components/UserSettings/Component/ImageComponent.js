import React from 'react';
import { Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Card, Icon } from 'react-native-elements';

export const ImageComponent = (props) => {
  const { data } = props;
  return (
    <Card
      containerStyle={styles.containerStyle}
      image={{ uri: data.backgroundImg }}
      wrapperStyle={{ paddingVertical: 0 }}
      imageStyle={{ height: 200 }}
    >
      <Image
       style={styles.img}
       source={{ uri: data.logo }}
      />
      <Text style={{ fontSize: 20, bottom: -10 }}>
        {data.storeName}
      </Text>
      <TextField
        multiline
        disabled={!props.updateForm.img_sec}
        inputContainerStyle={styles.textfield}
        label='Mini Advert'
        value={data.storeDescription}
        characterRestriction={140}
      />
      <TouchableOpacity
        style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingBottom: 10 }}
        onPress={() => props.toggleForm('img_sec', props.updateForm.img_sec)}
      >
        <Icon
          color='#517fa4'
          type='evilicon'
          name={props.updateForm.img_sec ? 'check' : 'pencil'}
          size={35}
        />
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
