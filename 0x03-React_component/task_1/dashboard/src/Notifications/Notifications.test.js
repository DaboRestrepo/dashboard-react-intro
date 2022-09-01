import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from '../utils/utils';


describe('<NotificationItem />', () => {
  const listNotifications = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'urgent', value: 'New resume available'},
    {id: 3, type: 'urgent', html: {__html: getLatestNotification()}}
  ]
  it('render without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });
  it('Renders the p tag', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications p').text()).toEqual('Here is the list of notifications');
  });
  it('Check the first elelment', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-notification-type=\"default\">New course available</li>');
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
  it('Renders correctly with empty array or not listNotifications', () => {
    let wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(1);
  });
  it('With list of notifications', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}  />);
    expect(wrapper.find(NotificationItem));
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });
  it('listNotifications is empty', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-notification-type="no-new">No new notification for now</li>');
  });
});
