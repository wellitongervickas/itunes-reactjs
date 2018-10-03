import React from 'react';
import { Router } from 'react-router-dom';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import Loading from '../components/loading';
import { history } from '../store';

const App = () => (
  <Router history={ history }>
    <div className="app">
      <Header/>
      <Content />
      <Footer />
      <Loading />
    </div>
  </Router>
);

export default App;