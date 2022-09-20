import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.state = {
      isLoggedIn: false,
      email: "",
      password: "",
      enableSubmit: false,
    };
  };

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({
      isLoggedIn: true,
    });
  }; 

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value
    }, () => {
      if (this.state.email !== "" && this.state.password !== "") {
        this.setState({
          enableSubmit: true,
        });
      }
    });
  };

  handleChangePassword(event) {
    this.setState({
      password: event.target.value
    }, () => {
      if (this.state.email !== "" && this.state.password !== "") {
        this.setState({
          enableSubmit: true,
        });
      }
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <>
      <main role="main" className={css(styles.login)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label className={css(styles.form)}
                 htmlFor='email'>Email</label>
          <input className={css(styles.form)}
                 type='email'
                 name='email'
                 id='email'
                 value={email}
                 onChange={this.handleChangeEmail} />
          <label className={css(styles.form)}
                 htmlFor='password'>Password</label>
          <input className={css(styles.form)}
                 type='password'
                 name='password'
                 id='password'
                 value={password}
                 onChange={this.handleChangePassword} />
          <input type='submit' value='Ok' disabled={!this.state.enableSubmit} />
        </form>
      </main>
      </>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    margin: 50,
  },
  form: {
    margin: 4,
  }
});
