import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Login() {
 return (
  <>
  <main role="main" className={css(styles.login)}>
    <p>Login to access the full dashboard</p>
    <label className={css(styles.form)} htmlFor='email'>Email</label>
    <input className={css(styles.form)} type='email' name='email' id='email' />
    <label className={css(styles.form)} htmlFor='password'>Password</label>
    <input className={css(styles.form)} type='password' name='password' id='password' />
    <button type='button'>Ok</button>
  </main>
  </>
 );
}

const styles = StyleSheet.create({
  login: {
    margin: 50,
  },
  form: {
    margin: 4,
  }
});
