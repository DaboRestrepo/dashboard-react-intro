import { login,
         logout,
         displayNotificationDrawer,
         hideNotificationDrawer } from './uiActionCreators';
import { LOGIN,
         LOGOUT,
         DISPLAY_NOTIFICATION_DRAWER,
         HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

describe('uiActions', () => {
  it('login', () => {
    const email = 'test@correo.com';
    const password = 'testPassword';
    const data = {
      type: LOGIN,
      user: {
        email: "test@correo.com",
        password: "testPassword",
      },
    };
    const result = login(email, password);
    expect(result).toEqual(data);
  });
  it('logout', () => {
    const data = { type: LOGOUT };
    const result = logout();
    expect(result).toEqual(data);
  });
  it('displayNotificationDrawer ', () => {
    const data = { type: DISPLAY_NOTIFICATION_DRAWER };
    const result = displayNotificationDrawer();
    expect(result).toEqual(data);
  });
  it('hideNotificationDrawer', () => {
    const data = { type: HIDE_NOTIFICATION_DRAWER };
    const result = hideNotificationDrawer();
    expect(result).toEqual(data);
  });
});
