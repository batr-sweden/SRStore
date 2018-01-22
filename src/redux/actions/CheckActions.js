import firebase from 'firebase';
import { CHECK_FETCH } from './types';

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
