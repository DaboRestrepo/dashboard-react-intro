import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<CourseListRow />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('Renders without crashing', () => {
    const wrapper = shallow(<CourseListRow textFirstCell='first'/>);
    expect(wrapper.exists()).toEqual(true);
  });
  it('When isHeader is true', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='first'/>);
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').prop('colSpan')).toEqual('2');
  });
  it('When second cell is present', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='first' textSecondCell='second' />);
    expect(wrapper.find('th')).toHaveLength(2);
    expect(wrapper.find('th').first().text()).toEqual('first');
    expect(wrapper.find('th').at(1).text()).toEqual('second');
  });
  it('When isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='first' textSecondCell='second' />);
    expect(wrapper.find('tr')).toHaveLength(1);
    expect(wrapper.find('tr').children('td')).toHaveLength(2);
  });
});
