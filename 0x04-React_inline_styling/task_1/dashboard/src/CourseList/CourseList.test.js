import React from "react";
import { shallow } from 'enzyme';
import CourseList from "./CourseList";
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<CourseList />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];
  it('Renders withput crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toEqual(true);
  });
  it('Renders 5 rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).toHaveLength(3);
  });
  it('Renders without array', () =>{
    const wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(3);
  });
  it('Renders it correctly', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses}/>);
    expect(wrapper.find(CourseListRow).first().html()).toEqual('<tr style=\"background:#deb5b545\"><th colSpan=\"2\">Available courses</th></tr>');
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  });
});
