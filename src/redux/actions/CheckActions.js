import firebase from 'firebase';
import { CHECK_FETCH, CHECK_VALUE, DELETE_BTN } from './types';

export const deleteBtn = (rowItem) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/Stores/${currentUser.uid}/logic/rewardBtns/${rowItem.uid}`)
    .remove()
    .then(() => {
      dispatch({
      type: DELETE_BTN
    });
    });
  };
};
export const checkValue = (text) => {
  return {
    type: CHECK_VALUE,
    payload: text
  };
};
export const checkFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/Stores/${currentUser.uid}/logic/checks`)
    .once('value', snapshot => {
      dispatch({
        type: CHECK_FETCH,
        payload: snapshot.val()
      });
    });
  };
};
