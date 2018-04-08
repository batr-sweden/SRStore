import firebase from 'firebase';
import { NavigationActions } from 'react-navigation'
import * as types from './types';

export const deleteBtn = (rowItem) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/Stores/${currentUser.uid}/logic/rewardBtns/${rowItem.uid}`)
    .remove()
    .then(() => {
      dispatch({
      type: types.DELETE_BTN
    });
    });
  };
};
export const checkValueChange = (text) => {
  return {
    type: types.CHECKVALUE_CHANGE,
    payload: text
  };
};
export const checkFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/Stores/${currentUser.uid}/logic/checks`)
    .once('value', snapshot => {
      dispatch({
        type: types.CHECK_FETCH,
        payload: snapshot.val()
      });
    });
  };
};
export const checkOfferChange = (text) => {
  return {
    type: types.CHECKNAME_CHANGE,
    payload: text
  };
};
export const checkDescChange = (text) => {
  return {
    type: types.CHECKDESCRIPTION_CHANGE,
    payload: text
  };
};
export const checkExpireChange = (text) => {
  return {
    type: types.CHECKEXPIRE_CHANGE,
    payload: text
  };
};
export const checkInfoChange = (text) => {
  return {
    type: types.CHECKINFO_CHANGE,
    payload: text
  };
};
export const btnNameChange = (text) => {
  return {
    type: types.BTNNAME_CHANGE,
    payload: text
  };
};
export const btnValueChange = (text) => {
  return {
    type: types.BTNVALUE_CHANGE,
    payload: text
  };
};
export const btnNoteChange = (text) => {
  return {
    type: types.BTNNOTE_CHANGE,
    payload: text
  };
};

export const createCheck = ({ checkDesc, checkExpire, checkInfo, checkOffer, checkValue, btnNote, btnName, btnValue }) => {
    return (dispatch) => {
      dispatch({ type: types.CHECK_CREATE_START });
      const { currentUser } = firebase.auth();
      const newCheck = {
          checkDesc,
          checkExpire,
          checkOffer,
          checkValue,
          checkInfo
      };
      const newBtn = {
          btnNote,
          btnName,
          btnValue,
      };
      if (checkValue === '') {
        firebase.database().ref(`/Stores/${currentUser.uid}/logic/rewardBtns`).push(newBtn);
      } else if (checkValue !== '') {
        firebase.database().ref(`/Stores/${currentUser.uid}/logic/checks`).push(newCheck);
        firebase.database().ref(`/Stores/${currentUser.uid}/logic/rewardBtns`).push(newBtn);
      }
    };
};

export const colorChoosen = (text) => {
  return {
    type: types.COOLOR_CHOOSEN,
    payload: text
  };
};

export const iconChoosen = (text) => {
  return {
    type: types.ICON_CHOOSEN,
    payload: text
  };
};
