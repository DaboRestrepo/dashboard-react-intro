import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const wrapper = shallow(<App />);

it('render without crashing', () => {
  shallow(<App />);
});

it('render App-header', () => {
  expect(wrapper.find('header.App-header').exists()).toEqual(true);
});

it('render App-body', () => {
  expect(wrapper.find('body.App-body').exists()).toEqual(true);
});

it('render App-footer', () => {
  expect(wrapper.find('footer.App-footer').exists()).toEqual(true);
});
