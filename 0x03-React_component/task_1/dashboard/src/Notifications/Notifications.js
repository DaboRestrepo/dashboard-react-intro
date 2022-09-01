import React from 'react';
import './Notifications.css';
import icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

export default function Notifications({displayDrawer, listNotifications}) {
  return (
    <>
    <div className='menuItem'>
      <p>Your notifications</p>
    </div>
    { displayDrawer ? 
    (<div className='Notifications'>
    <button type='button'
            onClick={() => console.log('Close button has been clicked')}
            aria-label='Clore'
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
  : <></>
  }
  </>
  );
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};
