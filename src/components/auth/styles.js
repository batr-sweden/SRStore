import {
  primaryColor,
  secondaryColor,
} from '../../styles';

const authStyles = {
  textChangeForm: {
    marginTop: 15,
    fontSize: 18,
    backgroundColor: 'transparent',
    color: '#cbc9c9',
  },
  parentView: {
    flex: 3,
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  cardSectionStyle: {
    backgroundColor: secondaryColor,
    paddingTop: 0,
    paddingBottom: 6,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 5,
  },
  inputContainerStyle: {
    paddingLeft: 7,
    height: 50,
    backgroundColor: 'transparent'
  },
  lineStyle: {
    borderBottomWidth: 1,
    borderColor: primaryColor,
    alignSelf: "stretch"
  },
  errorTextStyle: {
    color: 'red'
  },
};

export { authStyles };
