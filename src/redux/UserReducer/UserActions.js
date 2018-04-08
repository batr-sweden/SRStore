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
        payload: snapshot.val(),
      });
    });
  };
};

export const fetchSettings = () => {
  return (dispatch) => {
    firebase.database().ref('/App/Settings')
    .once('value', snapshot => {
      console.log(snapshot.val());
      dispatch({
        type: types.SETTINGS_FETCH,
        payload: snapshot.val()
      });
    });
  };
};

export const fetchFAQ = () => {
  return (dispatch) => {
    firebase.database().ref('/App/Faq')
    .once('value', snapshot => {
      dispatch({
        type: types.FAQ_FETCH,
        payload: snapshot.val()
      });
    });
  };
};

// Store open hours
export const toggleDateModal = (title, start, end, type) => {
  const time = { title, start, end, type };
  return {
    type: types.TOGGLE_DATE_MODAL,
    payload: time
  };
};

export const updateOpenHour = (val, hour) => {
  const toSet = { val, hour };
  return {
    type: types.SET_OPEN_HOUR,
    payload: toSet
  };
};

export const toggleOpen = (id, type) => {
  const openToToggle = { id, type };
  return {
    type: types.TOGGLE_OPEN,
    payload: openToToggle
  };
};

export const toggleForm = (formType, val) => {
  const fields = { formType, val };
  return {
    type: types.TOGGLE_FORM,
    payload: fields
  };
};

export const updateStoreInfo = (info) => {
  return {
    type: types.UPDATE_STORE_INFO,
    payload: info
  };
};

export const updateGpsLocation = (position) => {
  return {
    type: types.UPDATE_GPS_LOCATION,
    payload: position
  };
};

export const updateSocialIcon = (iconType) => {
  return {
    type: types.UPDATE_SOCIAL_ICON,
    payload: iconType
  };
};

export const actionUpdate = (dataToMutate) => {
  console.log(dataToMutate);
  const { currentUser } = firebase.auth();
  firebase.database().ref(`/Stores/${currentUser.uid}/info`)
    .update(dataToMutate);
};
