import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './forms/Form';
import Cv from './Cv';


class Main extends Component {
  render() {
    return (
      <main>
      <section className="principal-content">
      <Form />
      <Cv />
      </section>
      </main>
    );
  }
}

export default Main;
