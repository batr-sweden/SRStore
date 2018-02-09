import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const checkStyles = StyleSheet.create({
  checkContainerStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    borderColor: 'grey',
    borderWidth: 1,
    marginLeft: 5,
    marginVertical: 0
  },
  swiper: {
    height: (height * 0.3) + 2,
    paddingVertical: 10,
  }
});

export const infoStyles = StyleSheet.create({
  swiper: {
    height: (height * 0.2) + 20,
    paddingVertical: 10,
  },
  swiperChild: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: (width * 0.4) / 2
  }
});
