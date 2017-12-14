/*
Text source:
https://github.com/react-native-training/react-native-fonts/issues
*/

import { Platform } from 'react-native';

const textFontFamily = (Platform.OS === 'ios') ? 'HelveticaNeue-Light' : 'Roboto';
const headerFontFamily = (Platform.OS === 'ios') ? 'HelveticaNeue-UltraLight' : 'Roboto';

export {
  headerFontFamily,
  textFontFamily
};
