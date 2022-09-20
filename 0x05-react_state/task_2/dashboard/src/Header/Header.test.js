import React from "react";
import Header from "../Header/Header";
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { ctx } from '../App/AppContext';

describe('<Header />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('renders without crashing', () => {
    shallow(<ctx.Provider><Header /></ctx.Provider>);
  });
  it('mounts a <Header /> component and checks contents', () => {
    const value = { user: {email: '', password: '', isLoggedIn: false}, logOut: () => {} }
    const wrapper = mount(<AppContext.Provider value={value}><Header /></AppContext.Provider>);
    expect(wrapper.find('header h1')).toHaveLength(1);
    expect(wrapper.find('header img')).toHaveLength(1);
	});
  it('mounts a <Header /> component with default context and verifies that logoutSection is not created', () => {
    const value = { user: { email: '', password: '', isLoggedIn: false }, logOut: () => {} }
    const wrapper = mount(<AppContext.Provider value={value}><Header /></AppContext.Provider>);
    expect(wrapper.find('#logoutSection')).toHaveLength(0);
	});
  it('mounts a <Header /> component with user defined and verifies that logoutSection is created', () => {
    const value = { user: { email: 'thedude@aim.com', password: 'thedudeabides', isLoggedIn: true }, logOut: () => {} }
    const wrapper = mount(<AppContext.Provider value={value}><Header /></AppContext.Provider>);
    expect(wrapper.find('#logoutSection')).toHaveLength(1);
	});
  it('mounts a <Header /> component with user defined and verifies that clicking logout link calls logOut()', () => {
    const value = { user: { email: 'thedude@aim.com', password: 'thedudeabides', isLoggedIn: true }, logOut: () => { } }
    const spy = jest.spyOn(value, 'logOut');
    const wrapper = mount(<AppContext.Provider value={value}><Header /></AppContext.Provider>);
    wrapper.find('#logoutSection span').simulate('click');
    expect(spy).toHaveBeenCalled();
	});
});
