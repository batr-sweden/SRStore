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
    flex: 1,
  },
  headerText: {
    fontWeight: '700', marginLeft: 10, color: '#fff'
  },
  subText: {
    fontWeight: '400', marginLeft: 10, color: '#fff'
  },
  display: {
    display: 'flex'
  },
  notDisplay: {
    display: 'none'
  },
  imgBackground: {
    width: null,
    height: (Dimensions.get('window').height * 0.8), //Set image height to 4th of window height
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
    paddingBottom: 3,
    fontWeight: '400',
    color: '#212121'
  },
  descAlign: {
    justifyContent: 'flex-end',
    flex: 1
  },
  descContainer: {
      height: 60,
      backgroundColor: 'rgba(000,000,000, 0.5)',
      justifyContent: 'center'
  },
  editLogoContainer: {
    marginTop: 5,
    padding: 2,
    backgroundColor: '#449faa',
    borderRadius: 10,
    marginLeft: 20,
    width: 80,
    justifyContent: 'center'
  },
  editTextLogo: {
    color: '#fff',
    fontWeight: '400',
    textAlign: 'center',
    backgroundColor: 'transparent'
  },
  editBGAlign: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  editBGContainer: {
    marginTop: 5,
    padding: 2,
    backgroundColor: '#449faa',
    borderRadius: 10,
    marginLeft: 20,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  editTextBG: {
    color: '#fff',
    fontWeight: '400',
    textAlign: 'center',
    backgroundColor: 'transparent'
  },
  editDescContainer: {
     flex: 1
  },
  socialIconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    flexDirection: 'row'
  },
  iconStyleEdit: {
    flex: 1
  },
  iconStyle: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  saveButtonStyle: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  }
});
