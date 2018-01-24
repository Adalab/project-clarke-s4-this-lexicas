import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Main from './components/Main';
import Footer from './components/Footer';



class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Hero />
      <Introduction />
      <Main />
      <Footer />
      </div>

    );
  }
}

export default App;
