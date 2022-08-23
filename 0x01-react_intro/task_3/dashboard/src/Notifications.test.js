import { shallow } from 'enzyme';
import Noti from './Notifications';

const wrapper = shallow(<Noti />);

it('render without crashing', () => {
    shallow(<Noti />);
});

it('render three list items', () => {
    expect(wrapper.find('li').children().length).toEqual(3);
});

it('reder Notification text', () => {
    expect(wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toBeTruthy();
});
