import React, { Component } from 'react';

import { LoginPage } from './router';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <LoginPage />
    );
  }
}
