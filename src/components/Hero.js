import React, { Component } from 'react';
import heroimage from '../images/hero-image.jpg';


class Hero extends Component {

  render() {
const backimg = {
  backgroundImage: `url(${heroimage})`
}
    return (

      <section className="hero" style={backimg} >
      <a href="#bookmark" className="boton-start">Crea tu CV</a>
      </section>
    );
  }
}

export default Hero;
