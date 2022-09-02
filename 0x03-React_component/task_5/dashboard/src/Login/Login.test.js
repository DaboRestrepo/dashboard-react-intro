import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

const wrapper = shallow(<Login />)

it('Renders without crashing', () => {
  shallow(<Login />);
});
it('Renders login', () => {
  expect(wrapper.find('main.login').exists()).toEqual(true);
});
it('Renders two input', () => {
  expect(wrapper.find('main.login label')).toHaveLength(2);
});
it('Renders two input', () => {
  expect(wrapper.find('main.login input')).toHaveLength(2);
});
