import firebase from 'firebase';
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
export const checkValue = (text) => {
  return {
    type: types.CHECK_VALUE,
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
