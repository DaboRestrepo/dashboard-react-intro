import React, { Component, useReducer } from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';
import { ctx } from '../App/AppContext';

export default class Header extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { user, logOut } = this.context;
    return (
      <>
      <header className={css(styles.header)}>
        <img className={css(styles.image)} src={logo} alt="logo" />
        <h1>School dashboard</h1>
        {user.isLoggedIn && (
          <p id="logoutSection"> Welcome <b>{`${user.email}`}</b><span onClick={logOut}>(logout)</span></p>
        )}
      </header>
      </>
    );
  }
}

Header.contextType = ctx;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    color: '#e0344a',
    alignItems: 'center',
    borderBottom: 'solid 4px #e0344a',
  },
  image: {
    width: 200,
  }
});
