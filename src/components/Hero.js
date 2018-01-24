import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hero extends Component {
  render() {
    return (
      <section className="hero">
      <button type="button" name="button">
      <a href="#bookmark" className="boton-start">Crea tu CV</a>
      </button>
      </section>
    );
  }
}

export default Hero;
