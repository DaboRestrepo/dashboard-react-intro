import React from 'react';
import './Notifications.css';
import icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

export default function Notifications() {
  return (
    <>
    <div className='Notifications'>
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
    </div>
    </>
  )
}
