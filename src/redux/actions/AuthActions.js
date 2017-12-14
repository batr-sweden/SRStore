import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  CONTACT_CHANGED,
  STORENAME_CHANGED,
  PASSWORD_CHANGED,
  PHONE_CHANGED,
  RE_PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START,
  PASSWORD_CHECK,
  ANNONIMOUS_ACTION
  } from './types';

export const pageNav = () => {
  return {
    type: ANNONIMOUS_ACTION
  };
};


export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const storeNameChange = (text) => {
  return {
    type: STORENAME_CHANGED,
    payload: text
  };
};

export const contactChange = (text) => {
  return {
    type: CONTACT_CHANGED,
    payload: text
  };
};

export const phoneChanged = (text) => {
  return {
    type: PHONE_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const rePasswordChanged = (text) => {
  return {
    type: RE_PASSWORD_CHANGED,
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
      dispatch({ type: LOGIN_USER_START });

      firebase.auth().createUserWithEmailAndPassword(email, rePassword)
        .then(user => {
          const info = {
            info: {
              ad: '',
              backgroundImg: '',
              contactName,
              btnCounter: 0, // counter how many btns created
              rewardValCounter: 0, // counter how many rewards val created
              opening: {
                mon: time,
                tue: time,
                wed: time,
                thu: time,
                fri: time,
                sat: time,
                sun: time
              },
              storeDescription: '',
              email,
              location: '',
              id: user.uid,
              logo: '',
              phone,
              storeName,
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
               type: LOGIN_USER_SUCCESS,
               payload: 'success'
             });
          })
        .catch((error) => {
          console.log(error);
          loginUserFail(dispatch, error);
        });
      }) //End .then SignUp
        .catch((error) => {
          console.log(error);
          loginUserFail(dispatch, error);
        });
    };
  }

  return {
    type: PASSWORD_CHECK,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER_START });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        loginUserFail(dispatch, error);
      });
  };
};


const loginUserFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    payload: error
   });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};

// Set user info start
const time = {
  opening: { open: false, timeStart: 0, timeEnd: 0 },
  breakFast: { offer: false, timeStart: 0, timeEnd: 0 },
  lunch: { offer: false, timeStart: 0, timeEnd: 0 }
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
