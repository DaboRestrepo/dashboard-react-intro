import { FETCH_NOTIFICATIONS_SUCCESS,
         MARK_AS_READ,
         SET_TYPE_FILTER } from "../actions/notificationActionTypes";

export const initialState = {
  notifications: [],
  filter: 'DEFAULT'
};

export default function notificationsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.data.map((not) => {
          return {
            ...state,
            isRead: false
          };
        })
      };
    case MARK_AS_READ: state.map((not) => {
      if (action.index === not.id) {
        return {
          ...not,
          isRead: true
        };
      }
      return {...not};
    });
    case SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter
      }
    default:
      break;
  }
  return state;
};
