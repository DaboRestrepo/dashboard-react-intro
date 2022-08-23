import React from 'react';
import './Notifications.css';
import icon from './close-icon.png';
import { getLatestNotification } from './utils';

export default function Noti() {
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
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li data-priority='urgent'>
          <div 
          dangerouslySetInnerHTML={{__html: getLatestNotification()}}
          />
        </li>
      </ul>
    </div>
    </>
  )
}
