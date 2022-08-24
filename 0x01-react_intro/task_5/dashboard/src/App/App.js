import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

export default function App() {
  return (
    <>
    <header className="App-header">
      <img src={logo} alt="logo" />
      <h1>School dashboard</h1>
    </header>
    <body className="App-body">
      <p>Login to access the full dashboard</p>
      <label htmlFor='email'>Email</label>
      <input type='email' name='email' id='email' />
      <label htmlFor='password'>Password</label>
      <input type='password' name='password' id='password' />
      <button type='button'>Ok</button>
    </body>
    <footer className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)} </p>
    </footer>
    </>
  );
}
