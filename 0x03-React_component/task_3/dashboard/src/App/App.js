import React, { Component }from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList'
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleLogout);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleLogout);
  }
  handleLogout(event) {
    if(event.ctrlkey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out'); /* Alert of logging out */
      this.props.logOut(); /* Call the logout function */
    }
  }
  render() {
    const listCourses = [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40}
    ]
    
    const listNotifications = [
      {id: 1, type: 'default', value: 'New course available'},
      {id: 2, type: 'urgent', value: 'New resume available'},
      {id: 3, type: 'urgent', html: {__html: getLatestNotification()}}
    ]
    const { isLoggedIn } = this.props;

    return (
      <>
      <Notifications listNotifications={listNotifications} />
      <div className='App'>
        <Header />
        { !isLoggedIn ? <Login /> : <CourseList listCourses={listCourses} /> }
        <Footer />
      </div>
      </>
    );
  }
}

App.defaultProp = {
  isLoggedIn: false,
  logOut: () => undefined
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};
