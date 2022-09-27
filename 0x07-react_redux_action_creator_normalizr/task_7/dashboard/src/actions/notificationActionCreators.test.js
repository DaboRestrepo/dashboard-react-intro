import { markAsAread, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

describe('notificationActions', () => {
  it('markAsRead', () => {
    const data = {
      type: MARK_AS_READ,
      index: 1
    };
    const callResult = markAsAread(1);
    expect(callResult).toEqual(data);
  });
  it('setNotificationFilter', () => {
    const data = {
      type: SET_TYPE_FILTER,
      filter: "DEFAULT"
    };
    const callResult = setNotificationFilter('DEFAULT');
    expect(callResult).toEqual(data);
  });
});
