import firebase from 'firebase';
import * as types from './types';

export const CreateViewChanged = (text) => {
  return {
    type: types.BONUS_STAMP,
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
        type: types.USER_FETCH,
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
        type: types.FAQ_FETCH,
        payload: snapshot.val()
      });
    });
  };
};
