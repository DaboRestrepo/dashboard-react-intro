import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<Login />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('Renders without crashing', () => {
    shallow(<Login />);
  });
  it('Button is disable', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find({ type: 'submit' }).prop('disabled')).toBe(true);
  });
  it('On change button enable', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.state('email')).toEqual("");
    expect(wrapper.state('password')).toEqual("");
    wrapper.find({ id: 'email' }).simulate('change', { target: { name: 'email', value: 'test@email.com' } });
    wrapper.find({ id: 'password' }).simulate('change', { target: { name: 'password', value: 'testPasword' } });
    expect(wrapper.find({ type: 'submit' }).prop('disabled')).toBe(false);
  });
});
