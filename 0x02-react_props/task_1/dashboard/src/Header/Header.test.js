import React from "react";
import Header from "../Header/Header";
import { shallow } from 'enzyme';

const wrapper = shallow(<Header />);
it('renders without crashing', () => {
  shallow(<Header />);
});
it('renders header img', () => {
  expect(wrapper.find('header.header').exists()).toEqual(true);
});
it('renders header img', () => {
  expect(wrapper.find('header.header img').exists()).toEqual(true);
});
it('renders header img', () => {
  expect(wrapper.find('header.header h1').exists()).toEqual(true);
});
