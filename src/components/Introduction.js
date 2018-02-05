import React, { Component } from 'react';
import fast from '../images/fast.png';
import easyUse from '../images/easyuse.png';
import professional from '../images/professional.png';
import share from '../images/share.png';


class Introduction extends Component {
  render() {
    return (
      <section className="intro-section">
      <h2>Build the perfect resume, get hired</h2>
      <div className="container-qualities">
      <div className="quality">
      <h3>Rápido</h3>
      <img src={fast} alt="" />
      </div>
      <div className="quality">
      <h3>Fácil de usar</h3>
      <img src={easyUse} alt="" />
      </div>
      <div className="quality">
      <h3>Profesional</h3>
      <img src={professional} alt="" />
      </div>
      <div className="quality">
      <h3>Comparte, Descarga, Imprime</h3>
      <img src={share} alt="" />
      <p id="bookmark" ></p>
      </div>
      </div>
      </section>

    );
  }
}

export default Introduction;
