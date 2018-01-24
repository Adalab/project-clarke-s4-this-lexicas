import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Introduction extends Component {
  render() {
    return (
      <section className="intro-section">
      <h2>Build the perfect resume, get hired</h2>
      <div className="container-qualities">
      <div className="quality">
      <h3>Rápido</h3>
      <img src="/images/fast.png" alt="" />
      </div>
      <div className="quality">
      <h3>Fácil de usar</h3>
      <img src="/images/easyuse.png" alt="" />
      </div>
      <div className="quality">
      <h3>Profesional</h3>
      <img src="/images/professional.png" alt="" />
      </div>
      <div className="quality">
      <h3>Comparte, Descarga, Imprime</h3>
      <img src="/images/share.png" alt="" />
      <p id="bookmark" />
      </div>
      </div>
      </section>

    );
  }
}

export default Introduction;
