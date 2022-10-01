import { toJS } from 'immutable';
import uiReducer, { initialState } from "../reducers/uiReducer";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";

describe('uiReducer', () => {
  it('uiReducer initial state', () => {
    const state = uiReducer(undefined, {});
    expect(initialState).toEqual(state.toJS());
  });
  it('uiReducer when SELECT_COURSE is passed', () => {
    const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(initialState).toEqual(state.toJS());
  });
  it('uiReducer when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.toJS()).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true
    });
  });
});
