import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList'
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';

export default function App({isLoggedIn}) {
  return (
    <>
    <Notifications />
    <div className='App'>
      <Header />
      { !isLoggedIn ? <Login /> : <CourseList /> }
      <Footer />
    </div>
    </>
  );
}

App.defaultProp = {
  isLoggedIn: false
};

App.propTypes = {
  isLoggedIn: PropTypes.bool
};
