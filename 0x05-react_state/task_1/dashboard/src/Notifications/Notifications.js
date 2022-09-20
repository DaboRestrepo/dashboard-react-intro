import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

export default class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  /* The shouldComponentUpdate has to be update if
  some prop will change */
  shouldComponentUpdate(nextProps) {
    return (
        nextProps.listNotifications.length > this.props.listNotifications.length ||
        nextProps.displayDrawer !== this.props.displayDrawer
      );
  }

  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer } = this.props;
    return (
      <>
      { displayDrawer ? 
      (
      <div className={css(styles.notification)}>
      <button type='button'
              onClick={handleHideDrawer}
              aria-label='Close'
              style={{
                float: 'right',
                background:'0',
                border: '0',
                }}>
        <img src={icon} alt='close-icon' style={{ width: '7px', height: '7px' }}/>
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        { listNotifications.length === 0 ? (<NotificationItem type='no-new' value='No new notification for now' />) : <></> }
        { listNotifications.map((notification) => (<NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} />)) }
      </ul>
    </div>)
    : <></> && 
    (<div className={css(styles.menuItem, animation.bounceAnimation)}
          onClick={handleDisplayDrawer}>
      <p>Your notifications</p>
    </div>)
    }
    </>
    );
  }
}

const styles = StyleSheet.create({
  notification: {
    border: 'dotted 2px #e0344a',
    padding: 15,
    float: 'right',
    margin: '10px 30px 0 0',
    '@media (max-width: 900px)': {
      padding: 0,
      border: 'none',
      position: 'absolute',
      zIndex: 1,
      top: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      fontSize: 20,
    }
  },
  menuItem: {
    float: 'right',
    zIndex: 1,
    textAlign: 'right',
    margin: '0 30px',
    backgroundColor: '#fff8f8',
  }
});

const translateKeyframes = {
  '0%': {transform: 'translateY(0px)'},
  '50%': {transform: 'translateY(-5px)'},
  '100%': {transform: 'translateY(5px)'},
};

const opacityKeyframes = {
  'from': {opacity: 0.5},
  'to': {opacity: 1},
};

const animation = StyleSheet.create({
  bounceAnimation: {
    ':hover': {
      animationName: [translateKeyframes, opacityKeyframes],
      animationDuration: '0.5s, 1s',
      animationIterationCount: '3',
      cursor: 'pointer',
    }
  }
});

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {}
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func
};
