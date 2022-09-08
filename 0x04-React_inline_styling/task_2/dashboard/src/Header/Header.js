import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';

export default function Header() {
  return (
    <>
    <header className={css(styles.header)}>
      <img className={css(styles.image)} src={logo} alt="logo" />
      <h1>School dashboard</h1>
    </header>
    </>
  );
}

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
