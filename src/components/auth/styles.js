import {
  callToActionColor,
  primaryColor,
  secondaryColor,
  textFontFamily
} from '../../config';

const authStyles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: primaryColor
  },
  bottomButton: {
    container: {
      marginTop: -10
    },
    message: {
      color: secondaryColor,
      letterSpacing: 1,
      fontSize: 12,
    },
    button: {
      borderWidth: 0,
      backgroundColor: 'transparent'
    }
  },
  cardStyle: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginBottom: 50
  },
  errorTextStyle: {
    fontSize: 10,
    alignSelf: 'center',
    color: callToActionColor,
    letterSpacing: 1
  },
  headerMsg: {
    container: {
      backgroundColor: '#e0e0e0'
    },
    message: {
      fontSize: 20,
      color: '#9e9e9e',
      fontFamily: textFontFamily
    }
  },
  sectionStyle: {
    backgroundColor: '#fff',
    borderBottomWidth: 0
  },
  infoDiv: {
    container: {
      flexDirection: 'column',
      alignContent: 'flex-start',
    },
    message: {
      paddingTop: 10,
      marginBottom: -5,
      paddingLeft: 10,
      letterSpacing: 0.5,
      fontWeight: 'bold'
    }
  },
  inputStyle: {
    borderRadius: 2.5,
    borderColor: '#9e9e9e',
    borderWidth: 1,
    backgroundColor: '#fff',
    minHeight: 20,
    padding: 10,
    color: '#000',
    marginRight: 10,
    fontSize: 16
  },
  labelStyle: {
    paddingLeft: 10,
    color: '#fff'
  },
  signUpBtn: {
    message: {
      color: '#fff'
    },
    btn: {
      backgroundColor: secondaryColor,
      borderRadius: 2,
      marginRight: 15,
      marginLeft: 15,
      marginTop: -10
    }
  }
};

export { authStyles };
