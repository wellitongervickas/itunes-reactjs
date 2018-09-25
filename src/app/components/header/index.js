import React, { Component } from 'react';
import { Logo } from '../../../components';
import Search from './search';

export default class Header extends Component {
  render() {
    return (
      <section>
        <header>
          <Logo />
          <Search />
        </header>
      </section>
    )
  }
}
