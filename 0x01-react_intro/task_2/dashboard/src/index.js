import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Noti from './Notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div className='root-notifications'>
      <Noti />
    </div>
  </React.StrictMode>
);
