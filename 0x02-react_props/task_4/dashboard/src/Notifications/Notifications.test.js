import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';


describe('<NotificationItem />', () => {
  it('render without crashing', () => {
    const wrapper = shallow(<Notifications/>);
    expect(wrapper.exists()).toEqual(true);
  });
  it('Renders the p tag', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications p').text()).toEqual('Here is the list of notifications');
  });
  it('Check the first elelment', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('NotificationItem').first().html()).toEqual('<li data-notification-type=\"default\">New course available</li>');
  });
  it('Menu when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.menuItem').exists()).toEqual(true);
  });
  it('div Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.Notifications')).toHaveLength(0);
  });
  it('Menu when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div.menuItem').exists()).toEqual(true);
  });
  it('div Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div.Notifications').exists()).toEqual(true);
  });
});
