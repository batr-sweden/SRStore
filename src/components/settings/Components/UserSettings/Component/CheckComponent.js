import React from 'react';
import { Text, View } from 'react-native';
import Dash from 'react-native-dash';
import Swiper from 'react-native-swiper';
import { SimpleCheck } from '../../../../common';
import { checkStyles } from './Styles';
import { styles } from '../Styles';

export const CheckComponent = props => {
  return (
    <View>
      <Dash
        style={{ paddingVertical: 10 }}
        dashColor={'grey'}
        dashThickness={1}
        dashLength={5}
      />

      <Text style={styles.header}>
        Your available checks "Just samples"
      </Text>

      <Swiper style={checkStyles.swiper}>
        <SimpleCheck
          value='50kr'
          description='check description'
          expire='20171012'
          checkID='XANNAB12LKNAASCA'
          containerStyle={checkStyles.checkContainerStyle}
        />

        <SimpleCheck
          value='50kr'
          description='check description'
          expire='20181012'
          checkID='COFFEETORECIEVE18XNMMD167'
          containerStyle={checkStyles.checkContainerStyle}
        />
      </Swiper>

    </View>
  );
};
