import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('<App />', () => {
  it('render without crashing', () => {
    shallow(<App />);
  });
  it('Contain Notifications',() => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).to.have.lengthOf(1);
  });
  it('Contain Notifications',() => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).to.have.lengthOf(1);
  });
  it('Contain Notifications',() => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).to.have.lengthOf(1);
  });
  it('Contain Notifications',() => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).to.have.lengthOf(1);
  });
});
