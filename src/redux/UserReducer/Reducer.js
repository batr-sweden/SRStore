import * as types from './types';

const INITIAL_STATE = {
  faq: null,
  logic: null,
  info: null,
  loading: true,
  dateModal: false,
  time: null,
  updateForm: {
    img_sec: false,
    about_store: false,
    open_hours: false,
    social_icon: false
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.USER_FETCH:
      return {
        ...state,
        loading: false,
        logic: action.payload.logic.rewardBtns,
        info: action.payload.info,
      };
    case types.FAQ_FETCH:
      return { ...state, faq: action.payload };
    case types.BONUS_STAMP:
      return { ...state, btnOrStamp: action.payload };
    case types.UPDATE_GPS_LOCATION:
      return { ...state, info: { ...state.info, location: { ...state.info.location, gpsLocation: action.payload } } };
    case types.UPDATE_STORE_INFO:
      return { ...state, info: { ...state.info, message: action.payload } };
    case types.TOGGLE_FORM:
      return { ...state, updateForm: { ...state.updateForm, [action.payload.formType]: !action.payload.val } };
    case types.TOGGLE_DATE_MODAL:
      if (action.payload.start && action.payload.end) {
        return { ...state, dateModal: !state.dateModal, time: action.payload };
      }
        return { ...state, dateModal: !state.dateModal, time: null };
    case types.SET_OPEN_HOUR:
      return {
        ...state,
        time: { ...state.time, [action.payload.val]: action.payload.hour },
        info: { ...state.info,
          open: state.info.open.map(obj => {
            if (obj.title === state.time.title) {
              return { ...obj, [action.payload.val + state.time.type]: action.payload.hour };
            }
            return obj;
          })
        }
      };
    case types.UPDATE_SOCIAL_ICON:
      return {
        ...state,
        info: { ...state.info,
        socialicon: state.info.socialicon.map(obj => {
            if (obj.type === action.payload) {
               return { ...obj, checked: !obj.checked };
            }
            return obj;
          })
        }
      };
    case types.TOGGLE_OPEN:
      return {
        ...state,
        info: { ...state.info,
          open: state.info.open.map(obj => {
            if (obj.id === action.payload.id) {
              if (action.payload.type === 'open') {
                return { ...obj, open: !obj.open };
              } else if (action.payload.type === 'breakfast') {
                return { ...obj, breakfast: !obj.breakfast };
              }
                return { ...obj, lunch: !obj.lunch };
            }
            return obj;
          })
        }
      };
    default:
      return state;
  }
};
