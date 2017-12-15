import React from 'react';
import { Text, View } from 'react-native';
import { headerFontFamily, textFontFamily } from '../../config';
import { stringToUpper } from '../../helpers';

const Logo = (props) => {
  return (
    <View style={[styles.containerStyle, props.containerStyle]}>
      <Text style={[styles.textStyle, styles.headerStyle, props.headerStyle]}>
        {stringToUpper(props.header)}
      </Text>
      <Text style={[styles.textStyle, styles.hearderMiniStyle, props.hearderMiniStyle]}>
        {props.headerMini}
      </Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    padding: 15,
    alignItems: 'center',
    flexDirection: 'column'
  },
  textStyle: {
    fontFamily: textFontFamily,
    color: '#fff'
  },
  headerStyle: {
    fontFamily: headerFontFamily,
    fontSize: 40
  },
  headerMiniStyle: {
    fontSize: 20
  }
};

export { Logo };
