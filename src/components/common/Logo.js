import React from 'react';
import { Text, View } from 'react-native';
import { headerFontFamily, textFontFamily, subHeaderFontFamily } from '../../config';
import { stringToUpper } from '../../helpers';
// <Text style={[styles.textStyle, styles.hearderMiniStyle, props.hearderMiniStyle]}>
//   {'Busniess'}
// </Text>
const Logo = (props) => {
  return (
    <View style={[styles.containerStyle, props.containerStyle]}>
      <Text style={[styles.textStyle, styles.headerStyle, props.headerStyle]}>
        {props.headerText}
      </Text>

    </View>
  );
};

const styles = {
  containerStyle: {
    alignItems: 'center',
    flexDirection: 'column'
  },
  textStyle: {
    fontFamily: textFontFamily,
    color: '#424242',
    backgroundColor: 'transparent'
  },
  headerStyle: {
    fontFamily: textFontFamily,
    fontSize: 22
  },
  headerMiniStyle: {
    fontSize: 20
  }
};

export { Logo };
