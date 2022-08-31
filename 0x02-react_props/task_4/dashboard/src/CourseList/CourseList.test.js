import React from "react";
import { shallow } from 'enzyme';
import CourseList from "./CourseList";

describe('<CourseList />', () => {
  it('Renders withput crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toEqual(true);
  });
  it('Renders 5 rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow')).toHaveLength(5);
  });
});
