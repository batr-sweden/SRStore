import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  alignCenter: {
    alignSelf: 'center'
  },
  cardStyle: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  viewStyle: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1.0,
    elevation: 2
  },
  imgBackground: {
    width: null,
    height: (Dimensions.get('window').height * 0.4), //Set image height to 4th of window height
    overflow: 'hidden',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  img: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  messageContainer: {
    padding: 10
  },
  header: {
    color: 'grey',
    fontWeight: 'bold',
    paddingBottom: 5
  },
  icon: {
    alignSelf: 'flex-end',
    padding: 2
  },
  innerText: {
    paddingBottom: 3
  }
});
