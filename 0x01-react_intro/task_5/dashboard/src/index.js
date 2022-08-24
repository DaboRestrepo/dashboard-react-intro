import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import Noti from './Notifications/Notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='root-notifications'>
      <Noti />
    </div>
    <App />
  </React.StrictMode>
);
