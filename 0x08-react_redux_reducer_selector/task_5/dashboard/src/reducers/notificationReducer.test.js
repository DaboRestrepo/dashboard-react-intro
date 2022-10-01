import notificationsReducer, { initialState } from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  it('notificationReducer initial state', () => {
    const state = notificationsReducer(undefined, {});
    expect(state).toEqual(initialState);
  });
});
