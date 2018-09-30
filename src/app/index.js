import React from 'react';

import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import Loading from '../components/loading';


const App = () => (
  <div className="app">
    <Header/>
    <Content />
    <Footer />
    <Loading />
  </div>
);

export default App;