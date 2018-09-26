import React, { Component } from 'react';
import { Logo } from '../../../components';

export default class Header extends Component {
  render() {
    return (
      <section>
        <header>
          <Logo />
        </header>
      </section>
    )
  }
}
