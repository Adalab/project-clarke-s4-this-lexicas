import React, { Component } from 'react';


class Cv extends Component {
  render() {
    return (
      <div id="printCv" className="resume-container" onLoad={() => { window.print();window.close()}}>

      <section className="resume">

      <aside className="resume-left">
      <img className="profile-picture margin" alt="Imagen de perfil"/>
      <div className="personal-info-mvl margin">
      <h2 className="title" id="CV0">Nombre</h2>
      <h2 className="title-medium" id="CV0">Profesion</h2>
      </div>
      <div className="extract-info">
      <h3>Sobre mí</h3>
      <p id="description-personal-cv">
      </p>
      <p id="fecha-nacimiento">Fecha nacimiento</p>
      </div>
      <div className="contact-section">
      <div className="contact-info">
      <h4>Contacto</h4>
      <div className="phone-info">
      <img src="" alt="" />
      <p id="CV1" ></p>
      </div>
      <div className="email-info">
      <img src="" alt="" />
      <p id="CV1" ></p>
      </div>
      <div className="location-info">
      <img src="" alt="" />
      <p id="CV1" ></p>
      </div>
      </div>
      <div className="social-media">
      <p id="social-enlace" ></p>
      {/*<p>Linkedin:<a href="https://github.com/Adalab/clarke-s2-varwomen/tree/js-adds">Icono Linkedin</a></p>
      <p>GitHub: @ejemplo</p>*/}
      <p id="social-enlace" ></p>
      <p id="social-enlace" ></p>
      </div>
      </div>
      </aside>


      <div className="resume-right">

      <div className="personal-info-desktop margin">
      <h2 className="title" id="CV1">Nombre y apellidos</h2>
      <h3 className="title-medium" id="CV1">Profesion</h3>
      </div>

      <div className="work-info margin">
      <h3>Experiencia laboral</h3>
      <div className="option">
      <h4 id="work-type-CV">Puesto o Cargo</h4>
      <div className="where-info">
      <h5 id="company-name-CV" ></h5>
      <div className="date-info">
      <p id="start-work-date" ></p>
      <p id="end-work-date" ></p>
      </div>
      </div>
      <p id="work-description" ></p>
      <div className="work-extra-cv hidden">
      <h4 id="work-type-CV-extra">Puesto o Cargo</h4>
      <div className="where-info">
      <h5 id="company-name-CV-extra" ></h5>
      <div className="date-info">
      <p id="start-work-date-extra" ></p>
      <p id="end-work-date-extra" ></p>
      </div>
      </div>
      <p id="work-description-extra">
      </p>
      </div>
      <div className="background-info margin">
      <h3>Estudios</h3>
      <div className="option">
      <h4 id="study-title">Estudios realizados</h4>
      <div className="where-info">
      <h5 id="school" ></h5>
      <div className="date-info">
      <p id="start-study-date" ></p>
      <p id="end-study-date" ></p>
      </div>
      </div>
      <p id="study-description">
      </p>
      <div className="estudio-extra-cv hidden">
      <h4 id="study-title-extra" ></h4>
      <div className="where-info">
      <h5 id="school-extra" ></h5>
      <div className="date-info">
      <p id="start-study-date-extra" ></p>
      <p id="end-study-date-extra" ></p>
      </div>
      </div>
      <p id="study-description-extra">
      </p>
      </div>
      </div>
      <div className="options-content">
      <div className="options-content-items">
      <h4>Idiomas</h4>
      <div className="options-content">
      <div className="options-content-items">
      <p id="primero-idioma-into-CV" >{this.props.data}</p>
      <p id="idioma-extra1-into-CV" ></p>
      <p id="idioma-extra2-into-CV" ></p>
      <p id="idioma-extra3-into-CV" ></p>
      </div>
      <div className="options-content-items">
      <p id="nivel-primero-idioma-into-CV" ></p>
      <p id="nivel-idioma-extra1-into-CV" ></p>
      <p id="nivel-idioma-extra2-into-CV" ></p>
      <p id="nivel-idioma-extra3-into-CV" ></p>
      </div>
      </div>
      </div>
      <div className="options-content-items">
      <h4>Skills</h4>
      <div className="options-content">
      <div className="options-content-items">
      <p id="skill1-cv" ></p>
      <p id="skill2-cv" ></p>
      <p id="skill3-cv" ></p>
      <p id="skill4-cv" ></p>
      </div>
      <div className="options-content-items">
      <p id="skill1-level-cv" >{this.props.data}</p>
      <p id="skill2-level-cv" ></p>
      <p id="skill3-level-cv" ></p>
      <p id="skill4-level-cv" ></p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
    {/*  <input className="button-print" type="button" onClick="printDiv('printCv')" defaultValue="Imprimir" />*/}
      </div>


    );
  }
}

export default Cv;
