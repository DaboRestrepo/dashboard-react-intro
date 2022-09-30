import React from "react";
import { shallow, mount } from 'enzyme';
import Footer from "./Footer";
import { StyleSheetTestUtils } from 'aphrodite';
import { ctx } from '../App/AppContext';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Footer />', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toHaveLength(1);
  });
  it('Link is not displayed', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find('footer p')).toHaveLength(1);
  });
  it('Link is displayed', () => {
    const value = { user: { email: 'test@email.com', password: 'testPassword', isLoggedIn: true }, logOut: () => {} };
    const wrapper = mount(<ctx.Provider value={value}><Footer /></ctx.Provider>);
    expect(wrapper.find('footer a').text()).toContain('Contact us');
  });
})
