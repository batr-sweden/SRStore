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
  dataToMutate: {
    message: 'Heyday – A combined coffee bar and concept store with a lively ' +
    'atmosphere which stocks tasty bites and festive accessories. We showcase a ' +
    'modern take on every day details with a fresh twist and a pop of color for '
    + 'those who wish to add some love style to their lives.' +
    ' Det är ett sätt att beskriva Heyday. Men för oss är Heyday mycket mer ' +
    'än så. Det är en dröm om att våga gå sin väg, tro på sin idé och vara ' +
    'modig nog att genomföra den. Vi heter Kajsa och Charlotta. Välkommen till oss!,',
    open: [{
      id: 1,
      open: false,
      title: 'Vardagar',  // Weekdays
      start: '03:00',
      end: '16:00',
      startBreak: '03:00',
      endBreak: '16:00',
      breakfast: false,
      startLunch: '03:00',
      endLunch: '16:00',
      lunch: false,
    },
    {
      id: 2,
      open: true,
      title: 'Helgen', // weekends
      start: '09:00',
      end: '18:00',
      startBreak: '08:00',
      endBreak: '16:00',
      breakfast: true,
      startLunch: '08:00',
      endLunch: '16:00',
      lunch: false,
    },
    {
      id: 3,
      open: true,
      title: 'Röd-dagar', // red-days
      start: '02:00',
      end: '16:00',
      startBreak: '02:00',
      endBreak: '16:00',
      breakfast: false,
      startLunch: '02:00',
      endLunch: '16:00',
      lunch: false,
    }],
    socialicon: [{
      type: 'facebook',
      checked: true,
    },
     {
      type: 'instagram',
      checked: false,
    },
     {
      type: 'youtube',
      checked: false,
    }],
    gpsLocation: {
      geoLocation: false
    },
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.USER_FETCH:
      return {
        ...state,
        loading: false,
        logic: action.payload.logic.rewardBtns,
        info: action.payload.info };
    case types.FAQ_FETCH:
      return { ...state, faq: action.payload };
    case types.BONUS_STAMP:
      return { ...state, btnOrStamp: action.payload };
    case types.USER_INFO_CHANGED:
      return { ...state, dataToMutate: action.payload };
    case types.UPDATE_GPS_LOCATION:
      return { ...state, dataToMutate: { ...state.dataToMutate, gpsLocation: action.payload } };
    case types.UPDATE_STORE_INFO:
      return { ...state, dataToMutate: { ...state.dataToMutate, message: action.payload } };
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
        dataToMutate: { ...state.dataToMutate,
          open: state.dataToMutate.open.map(obj => {
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
        dataToMutate: { ...state.dataToMutate,
        socialicon: state.dataToMutate.socialicon.map(obj => {
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
        dataToMutate: { ...state.dataToMutate,
          open: state.dataToMutate.open.map(obj => {
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
