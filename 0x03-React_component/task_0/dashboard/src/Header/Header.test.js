import React from "react";
import Header from "../Header/Header";
import { shallow } from 'enzyme';

const wrapper = shallow(<Header />);
it('renders without crashing', () => {
  shallow(<Header />);
});
it('renders header', () => {
  expect(wrapper.find('header.App-header').exists()).toEqual(true);
});
it('renders header img', () => {
  expect(wrapper.find('header.App-header img').exists()).toEqual(true);
});
it('renders header h1', () => {
  expect(wrapper.find('header.App-header h1').exists()).toEqual(true);
});
