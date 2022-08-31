import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';


describe('<NotificationItem />', () => {
  it('render without crashing', () => {
    const wrapper = shallow(<Notifications/>);
    expect(wrapper.exists()).toEqual(true);
  });
  it('Renders the p tag', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications p').text()).toEqual('Here is the list of notifications');
  });
  it('Check the first elelment', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('NotificationItem').first().html()).toEqual('<li data-notification-type=\"default\">New course available</li>');
  });
});
