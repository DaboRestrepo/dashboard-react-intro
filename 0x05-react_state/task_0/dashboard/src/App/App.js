import React, { Component }from 'react';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList'
import Notifications from '../Notifications/Notifications';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.state = {displayDrawer: false};
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
  handleDisplayDrawer() {
    this.setState({
      displayDrawer: true
    });
  }
  handleHideDrawer() {
    this.setState({
      displayDrawer: false
    });
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
    const { isLoggedIn } = this.props
    const { displayDrawer } = this.state

    return (
      <>
      <Notifications listNotifications={listNotifications}
                     displayDrawer={displayDrawer}
                     handleDisplayDrawer={this.handleDisplayDrawer}
                     handleHideDrawer={this.handleHideDrawer} />
      <div className={css(styles.app)}>
        <Header />
        <div className={css(styles.body)}>
          { !isLoggedIn ? 
          (<BodySectionWithMarginBottom title='Log in to continue'>
            <Login />
          </BodySectionWithMarginBottom>)
          :
          (<BodySectionWithMarginBottom title='Course list'>
            <CourseList listCourses={listCourses} />
          </BodySectionWithMarginBottom>)
          }
          <BodySection title='News from the School'>
            <p>Random text</p>
          </BodySection>
        </div>
        <div className={css(styles.footer)}>
          <Footer />
        </div>
      </div>
      </>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
  },
  body: {
    marginBottom: 40,
  },
  footer: {
    width: '100%',
    position: 'fixed',
    textAlign: 'center',
    fontStyle: 'italic',
    borderTop: 'solid 4px #e0344a',
    bottom: 0,
  },
});

App.defaultProp = {
  isLoggedIn: false,
  logOut: () => undefined
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};
