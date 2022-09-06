import React from "react";
import { shallow } from 'enzyme';
import BodySection from "./BodySection";
import { StyleSheetTestUtils } from 'aphrodite';

describe('<BodySection />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('Renders the children and the h2', () => {
    const wrapper = shallow((
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    ));
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h2').text()).toEqual('test title');
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('p').text()).toEqual('test children node');
  });
})
