import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Input } from '../../../../common';
import { styles } from '../Styles';
import { image } from './Styles';

export const ImageComponent = (props) => {
  return (
    <ImageBackground
     style={styles.imgBackground}
     source={{ uri: props.backgroundImg }}
    >
      <View style={{ flex: 1 }}>
        <Image
         style={styles.img}
         source={{ uri: props.logo }}
        />
        <TouchableOpacity style={[styles.editLogoContainer, props.edit]}>
          <Text style={styles.editTextLogo}>
            Ladda upp logga
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.editBGAlign, props.edit]}>
        <TouchableOpacity style={styles.editBGContainer}>
          <Text style={styles.editTextBG}>
            Ladda upp bakgroundsbild
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.descAlign} >
        <View style={styles.descContainer}>
          <Text style={styles.headerText}>
            {props.storeName}
          </Text>
          <Text style={[styles.subText, props.hide]}>
            {props.storeDescription}
          </Text>
          <View style={[styles.editDescContainer, props.edit]}>
            <Input
              value={props.value}
              onChangeText={props.onChangeText}
              multiline
              editable
              numberOfLines={2}
              placeholderTextColor={'#000'}
              componentInputStyle={{ fontSize: 14, flex: 0 }}
              componentContainerStyle={image.inputStyle}
              placeholder={props.storeDescription}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
