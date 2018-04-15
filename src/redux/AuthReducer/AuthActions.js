import firebase from 'firebase';
import * as types from './types';

export const contactChange = (text) => {
  return {
    type: types.CONTACT_CHANGED,
    payload: text
  };
};

export const formChanges = (text) => {
  return {
    type: types.SIGNIN_SIGNUP,
    payload: text
  };
};

export const emailChanged = (text) => {
  return {
    type: types.EMAIL_CHANGED,
    payload: text
  };
};

export const pageNav = () => {
  return {
    type: types.ANNONIMOUS_ACTION
  };
};

export const phoneChanged = (text) => {
  return {
    type: types.PHONE_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: types.PASSWORD_CHANGED,
    payload: text
  };
};

export const rePasswordChanged = (text) => {
  return {
    type: types.RE_PASSWORD_CHANGED,
    payload: text
  };
};

export const signOutUser = () => {
  return (dispatch) => {
    firebase.auth().signOut()
      .then(() => {
        dispatch({
          type: types.USER_SIGN_OUT
        });
      });
  };
};

export const storeNameChange = (text) => {
  return {
    type: types.STORENAME_CHANGED,
    payload: text
  };
};

export const passwordCheck = ({ storeName, contactName, phone, email, password, rePassword }) => {
  let text = 'Password not corresponding';

  if (contactName === '') {
    text = 'Contact name missing';
  } else if (storeName === '') {
    text = 'Store name missing';
  } else if (phone === '') {
    text = 'Please fill phone number';
  } else if (email === '') {
    text = 'We need your email';
  } else if (password === '') {
    text = 'Password missing';
  } else if (password === rePassword) {
    return (dispatch) => {
      dispatch({ type: types.LOGIN_USER_START });

      firebase.auth().createUserWithEmailAndPassword(email, rePassword)
        .then(user => {
          const info = {
            info: {
              ad: '',
              backgroundImg: '',
              btnCounter: 0, // counter how many btns created
              contactName,
              email,
              id: user.uid,
              location: {
                gpsLocation: {
                  geoLocation: false
                }
               },
              logo: '',
              message: '',
              open: [
                {
                  id: 1,
                  open: false,
                  title: 'Vardagar',
                  start: '00:00',
                  end: '00:00',
                  startBreak: '00:00',
                  endBreak: '00:00',
                  breakfast: false,
                  startLunch: '00:00',
                  endLunch: '00:00',
                  lunch: false,
                },
                {
                  id: 2,
                  open: false,
                  title: 'Helgen',
                  start: '00:00',
                  end: '00:00',
                  startBreak: '00:00',
                  endBreak: '00:00',
                  breakfast: false,
                  startLunch: '00:00',
                  endLunch: '00:00',
                  lunch: false,
                },
                {
                  id: 3,
                  open: false,
                  title: 'Röd-dagar',
                  start: '00:00',
                  end: '00:00',
                  startBreak: '00:00',
                  endBreak: '00:00',
                  breakfast: false,
                  startLunch: '00:00',
                  endLunch: '00:00',
                  lunch: false,
                }
              ],
              phone,
              rewardValCounter: 0, // counter how many rewards val created
              socialicon: [
                {
                  type: 'facebook',
                  checked: false,
                },
                 {
                  type: 'instagram',
                  checked: false,
                },
                 {
                  type: 'youtube',
                  checked: false,
                }
              ],
              storeDescription: '',
              storeName,
              text: '',
            },
            logic: {
              rewardBtns: { //This is stores different btn logic
                defaultBtn: buttonType
              },
              rewardVal: { //This is point and what you get
                defaultVal: { point: 10, whatToGet: '10% Discount of payment' }
              }
            }
          };
          firebase.database().ref(`/Stores/${user.uid}`).set(info)
          .then(() => {
             dispatch({
               type: types.LOGIN_USER_SUCCESS,
               payload: 'success'
             });
          })
        .catch((error) => {
          loginUserFail(dispatch, error);
        });
      }) //End .then SignUp
        .catch((error) => {
          loginUserFail(dispatch, error);
        });
    };
  }

  return {
    type: types.PASSWORD_CHECK,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: types.LOGIN_USER_START });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        loginUserFail(dispatch, error);
      });
  };
};


const loginUserFail = (dispatch, error) => {
  dispatch({
    type: types.LOGIN_USER_FAIL,
    payload: error
   });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: types.LOGIN_USER_SUCCESS,
    payload: user
  });
};


//Set Button type
const buttonType = {
  color: '#2962ff',
  pointValue: 1,
  name: 'Default',
  info: 'Detta är en standardknapp då 1kr = 1 poäng',
  input: true,
  point: 0,
  timmed: false,
  timeStart: 0,
  timeEnd: 0,
  textColor: '#fff'
};
