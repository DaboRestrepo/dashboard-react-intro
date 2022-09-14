import React from "react";
import Header from "../Header/Header";
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<Header />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('renders without crashing', () => {
    shallow(<Header />);
  });
});
