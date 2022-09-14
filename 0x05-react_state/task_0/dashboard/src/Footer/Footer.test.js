import React from "react";
import { shallow } from 'enzyme';
import Footer from "./Footer";

const wrapper = shallow(<Footer />);

it('Renders without crashing', () => {
  shallow(<Footer />);
});
it('Renders Footer', () => {
  expect(wrapper.find('footer.App-footer').exists()).toEqual(true);
});
it('Renders Copyright', () => {
  expect(wrapper.find('footer.App-footer p').exists()).toEqual(true);
  expect(wrapper.find('footer.App-footer p').text()).toContain('Copyright');
});
