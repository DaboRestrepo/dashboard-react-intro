import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';

export default function App() {
  return (
    <>
    <Notifications />
    <Header />
    <Login />
    <Footer />
    </>
  );
}
