import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Main from './components/Main';
import Form from './components/forms/Form';
import Cv from './components/Cv';
import Footer from './components/Footer';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  render() {
    return (
      <div>
      <Header />
      <Hero />
      <Introduction />
      <Main>
        <Form data={this.state} updateState={this.updateState}/>
        <Cv data={this.state} />
      </Main>
      <Footer />
      </div>

    );
  }
}

export default App;
