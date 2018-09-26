import React, { Component } from 'react';

import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import Loading from '../components/loading';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <Content />
        <Footer />
        <Loading />
      </div>
    )
  }
}
