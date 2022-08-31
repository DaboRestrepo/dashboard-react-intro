import React from 'react';
import './Notifications.css';
import icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

export default function Notifications({displayDrawer}) {
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
      <NotificationItem type='default' value='New course available' />
      <NotificationItem type='urgent' value='New resume available' />
      <NotificationItem type='urgent' html={{__html: getLatestNotification()}} />
    </ul>
  </div>)
  : <></>
  }
  </>
  );
}

Notifications.defaultProps = {
  displayDrawer: false
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool
};
