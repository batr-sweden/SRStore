import firebase from 'firebase';
import { BTN_FETCH, BONUS_STAMP } from './types';

export const CreateViewChanged = (text) => {
  return {
    type: BONUS_STAMP,
    payload: text
  };
};

export const btnFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/Stores/${currentUser.uid}/logic/rewardBtns`)
    .once('value', snapshot => {
      dispatch({
        type: BTN_FETCH,
        payload: snapshot.val()
      });
    });
  };
};
