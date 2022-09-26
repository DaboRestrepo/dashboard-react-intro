import React from 'react';

export const user = {
  email: '',
  password: '',
  isLoggedIn: '',
};

export const logOut = () => {};

export const ctx = React.createContext({user, logOut});
