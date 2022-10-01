import React  from "react";
import { shallow } from 'enzyme';
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from 'aphrodite';

describe('<NotificationsItem />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('Renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toEqual(true);
  });
  it('Renders the correct type and value', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' />);
    expect(wrapper.find('li')).toHaveLength(1);
    expect(wrapper.find('li').text()).toEqual('test');
    expect(wrapper.find('li').prop('data-notification-type')).toEqual('default');
  });
  it('Renders the html', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.find('li').html()).toEqual('<li class=\"default_1tsdo2i-o_O-general_v3ptr9\" data-notification-type=\"default\"><u>test</u></li>');
  });
});
