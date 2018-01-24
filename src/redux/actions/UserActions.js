import firebase from 'firebase';
import { USER_FETCH, BONUS_STAMP, FAQ_FETCH } from './types';

export const CreateViewChanged = (text) => {
  return {
    type: BONUS_STAMP,
    payload: text
  };
};

export const fetchUser = () => {
  //Get currentUser id
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/Stores/${currentUser.uid}`)
    .once('value', snapshot => {
      dispatch({
        type: USER_FETCH,
        payload: snapshot.val()
      });
    });
  };
};

export const fetchFAQ = () => {
  return (dispatch) => {
    firebase.database().ref('/App/Faq')
    .once('value', snapshot => {
      console.log(snapshot.val());
      dispatch({
        type: FAQ_FETCH,
        payload: snapshot.val()
      });
    });
  };
};
