import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <section className="hero">
      <button type="button" name="button">
      <a href="#bookmark" className="boton-start">Crea tu CV</a>
      </button>
      </section>
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
      <main>
      <section className="principal-content">
      <section className="form">
      <form  method="post" id="form1">
      <fieldset className="col1">
      <legend>Datos personales</legend>
      <button type="button" name="button" className="button-accordion">+</button>
      <div className="accordion hidden">
      <div className="datos-personales">
      <label htmlFor="firstname" className="hidden">Nombre</label>
      <input id="firstname" type="text" name="firstname" defaultValue placeholder="Nombre" />
      <label htmlFor="job" className="hidden">Apellido</label>
      <input id="job" type="text" name="lastname" defaultValue placeholder="Profesión" />
      <label htmlFor="date" >Fecha de nacimiento</label>
      <input id="date" type="date" name="date" defaultValue placeholder="Fecha de nacimiento" />
      <label htmlFor="tel" className="hidden">Teléfono Móvil</label>
      <input id="tel" type="tel" name="tel" defaultValue placeholder="Teléfono Móvil" />
      <label htmlFor="mail" className="hidden">Email</label>
      <input id="mail" type="mail" name="mail" defaultValue placeholder="Email" />
      <label htmlFor="postalcode" className="hidden">Código Postal</label>
      <input id="postalcode" type="text" name="postalcode" defaultValue placeholder="Código Postal" />
      <label htmlFor="city" className="hidden">Ciudad</label>
      <input id="city" type="text" name="city" defaultValue placeholder="Ciudad" />
      <label htmlFor="pais" className="hidden">Ciudad</label>
      <input id="pais" type="text" name="country" defaultValue placeholder="País" />
      <label htmlFor="ln" className="hidden">Enlace Linkedin</label>
      <input id="ln" type="text" name="enlaceLinkedin" defaultValue placeholder="Tu cuenta Linkedin, ej. @AnaG" />
      <label htmlFor="gh" className="hidden">Enlace Twitter</label>
      <input id="gh" type="text" name="enlaceGitHub" defaultValue placeholder="Tu cuenta Twitter, ej. @Belen23" />
      <label htmlFor="tw" className="hidden">Enlace GitHub</label>
      <input id="tw" type="text" name="enlaceTwitter" defaultValue placeholder="Tu cuenta GitHub, ej. @SaraPeir" />
      <label htmlFor="descripcion" >Personal descripción</label>
      <textarea name="name" rows={8} cols={80} id="description-personal" defaultValue={""} />
      </div>
      <button type="reset" name="button" id="reset">Reset</button> <br /><br />
      <button type="button" name="button" id="button1">Añadir</button>
      </div>
      </fieldset>
      </form>
      <fieldset className="col1">
      <legend>Estudios</legend>
      <div className="estudios">
      <form  method="post" id="form2">
      <button type="button" name="button" className="button-accordion">+</button>
      <div className="accordion hidden">
      <p id="form-field">Estudio I</p>
      <label htmlFor="titulo" className="hidden">Titulo</label>
      <input type="text" name="title" id="titulo" defaultValue placeholder="Titulo" />
      <label htmlFor="instituto" className="hidden">Escuela o Universidad</label>
      <input type="text" name="institute" id="instituto" defaultValue placeholder="Escuela o Universidad" />
      <label htmlFor="instituto-ciudad" className="hidden">Ciudad</label>
      <input type="text" name="city" id="instituto-ciudad" defaultValue placeholder="Ciudad" />
      <label htmlFor="institudo-pais" className="hidden">Ciudad</label>
      <input type="text" name="pais" id="instituto-pais" defaultValue placeholder="País" />
      <div className="form-container">
      <div className="form-container-items">
      <label htmlFor="start">Fecha inicio</label> <br />
      <select className="months"  id="select-1">
      </select>
      <select className="years"  id="select-años-1">
      </select>
      </div>
      <div className="form-container-items">
      <label htmlFor="end">Fecha fin</label> <br />
      <select className="months"  id="select-2">
      </select>
      <select className="years"  id="select-años-2">
      </select>
      </div>
      </div>
      <label htmlFor="descripcion" >Descripción</label>
      <textarea id="descripcion" name="text" rows={8} cols={43} placeholder="Descripción" defaultValue={" "} /> <br />
      <button type="reset" name="button" id="reset">Reset</button> <br /><br />
      <div className="estudio-extra hidden">
      <hr />
      <p id="form-field">Estudio II</p>
      <form method="post" id="form2_bis">
      <label htmlFor="titulo" className="hidden">Titulo</label>
      <input type="text" name="title" id="titulo" defaultValue placeholder="Titulo" />
      <label htmlFor="instituto" className="hidden">Escuela o Universidad</label>
      <input type="text" name="institute" id="instituto" defaultValue placeholder="Escuela o Universidad" />
      <label htmlFor="instituto-ciudad" className="hidden">Ciudad</label>
      <input type="text" name="city" id="instituto-ciudad" defaultValue placeholder="Ciudad" />
      <label htmlFor="institudo-pais" className="hidden">Ciudad</label>
      <input type="text" name="pais" id="instituto-pais" defaultValue placeholder="País" />
      <div className="form-container">
      <div className="form-container-items">
      <label htmlFor="start">Fecha inicio</label> <br />{/*Modifica Sara: desde className="hidden" a className="" */}
      <select className="months" id="select-3">
      </select>
      <select className="years"  id="select-años-3">
      </select>
      </div>
      <div className="form-container-items">
      <label htmlFor="end">Fecha fin</label> <br />{/*Modifica Sara: desde className="hidden" a className="" */}
      <select className="months"  id="select-4">
      </select>
      <select className="years"  id="select-años-4">
      </select>
      </div>
      </div>
      <label htmlFor="descripcion" >Descripción</label>
      <textarea id="description-extra" name="text" rows={8} cols={43} placeholder="Descripción" defaultValue={" "} />
      <button type="reset" name="button" id="reset">Reset</button> <br /><br /><br />
      </form></div>
      <button type="button" name="button" id="paragraph-button-study">Añadir nuevo estudio</button><br /><br /><br />
      <button type="button" name="button" id="button2">Añadir</button>
      </div></form>
      </div>
      </fieldset>
      <fieldset className="col1">
      <legend>Experiencia Laboral</legend>
      <div className="experiencia-laboral">
      <form  method="post" id="form3">
      <button type="button" name="button" className="button-accordion">+</button>
      <div className="accordion hidden">
      <p id="form-field">Experiencia laboral I</p>
      <label htmlFor="work-type" className="hidden">Cargo</label>
      <input type="text" name="cargo" id="work-type" defaultValue placeholder="Cargo" />
      <label htmlFor="company" className="hidden">Compañía</label>
      <input type="text" name="company" id="company" defaultValue placeholder="Compañía" />
      <label htmlFor="city" className="hidden">Ciudad</label>
      <input type="text" name="city" id="city" defaultValue placeholder="Ciudad" />
      <label htmlFor="city" className="hidden">País</label>
      <input type="text" name="country" id="country" defaultValue placeholder="País" />
      <div className="form-container">
      <div className="form-container-items">
      <label htmlFor="start">Fecha inicio</label> <br />{/*Modifica Sara: desde className="hidden" a className="" */}
      <select className="months"  id="select-5">
      </select>
      <select className="years"  id="select-años-5">
      </select>
      </div>
      <div className="form-container-items">
      <label htmlFor="end">Fecha fin</label> <br />{/*Modifica Sara: desde className="hidden" a className="" */}
      <select className="months"  id="select-6">
      </select>
      <select className="years"  id="select-años-6">
      </select>
      </div>
      </div>
      <label htmlFor="descripcion" className="hidden">Descripción</label>
      <textarea name="name" rows={8} cols={80} defaultValue={""} />
      <button type="reset" name="button" id="reset">Reset</button> <br /><br /><br />
      <div className="work-extra hidden">
      <hr />
      <p id="form-field">Experiencia laboral II</p>
      <form  method="post" id="form3_bis">
      <label htmlFor="work-type" className="hidden">Cargo</label>
      <input type="text" name="cargo" id="work-type" defaultValue placeholder="Cargo" />
      <label htmlFor="company" className="hidden">Compañía</label>
      <input type="text" name="company" id="company" defaultValue placeholder="Compañía" />
      <label htmlFor="city" className="hidden">Ciudad</label>
      <input type="text" name="city" id="city" defaultValue placeholder="Ciudad" />
      <label htmlFor="city" className="hidden">País</label>
      <input type="text" name="country" id="country" defaultValue placeholder="País" />
      <div className="form-container">
      <div className="form-container-items">
      <label htmlFor="start">Fecha inicio</label> <br />{/*Modifica Sara: desde className="hidden" a className="" */}
      <select className="months"  id="select-7">
      </select>
      <select className="years"  id="select-años-7">
      </select>
      </div>
      <div className="form-container-items">
      <label htmlFor="end">Fecha fin</label> <br />{/*Modifica Sara: desde className="hidden" a className="" */}
      <select className="months"  id="select-8">
      </select>
      <select className="years"  id="select-años-8">
      </select>
      </div>
      </div>
      <label htmlFor="descripcion" className="hidden">Descripción</label>
      <textarea name="name" rows={8} cols={80} defaultValue={""} />
      <button type="reset" name="button" id="reset">Reset</button> <br /><br /><br />
      </form>
      </div>
      <button type="button" name="button" id="paragraph-button-work">Añadir nueva experiencia laboral</button><br /><br />
      <button type="button" name="button" id="button3">Añadir</button>
      </div></form>
      </div>
      </fieldset>
      <form  method="post" id="form4">
      <fieldset className="col1">
      <legend>Idiomas</legend>
      <button type="button" name="button" className="button-accordion">+</button>
      <div className="accordion hidden">
      <div className="form-container">
      <div className="form-container-items">
      <label htmlFor="language" className="hidden">Idioma</label>
      <input type="text" name="language" id="first-language" defaultValue placeholder="Idioma" />
      </div>
      <div className="form-container-items">
      <select name="nivel" id="nivel-first-language">
      <option value />
      <option value="Beginner">Beginner</option>
      <option value="Conversational">Conversational</option>
      <option value="Fluent">Fluent</option>
      <option value="Native">Native</option>
      </select>
      </div>
      </div>
      <br />
      <div className="form-container">
      <div className="form-container-items">
      <label htmlFor="language" className="hidden">Idioma</label>
      <input type="text" name="language" id="extra1-language" defaultValue placeholder="Idioma" />
      </div>
      <div className="form-container-items">
      <select name="nivel" id="nivel-extra1-language">
      <option value />
      <option value="Beginner">Beginner</option>
      <option value="Conversational">Conversational</option>
      <option value="Fluent">Fluent</option>
      <option value="Native">Native</option>
      </select>
      </div>
      </div>
      <br />
      <div className="form-container">
      <div className="form-container-items">
      <label htmlFor="language" className="hidden">Idioma</label>
      <input type="text" name="language" id="extra2-language" defaultValue placeholder="Idioma" />
      </div>
      <div className="form-container-items">
      <select name="nivel" id="nivel-extra2-language">
      <option value />
      <option value="Beginner">Beginner</option>
      <option value="Conversational">Conversational</option>
      <option value="Fluent">Fluent</option>
      <option value="Native">Native</option>
      </select>
      </div>
      </div>
      <br />
      <div className="form-container">
      <div className="form-container-items">
      <label htmlFor="language" className="hidden">Idioma</label>
      <input type="text" name="language" id="extra3-language" defaultValue placeholder="Idioma" />
      </div>
      <div className="form-container-items">
      <select name="nivel" id="nivel-extra3-language">
      <option value />
      <option value="Beginner">Beginner</option>
      <option value="Conversational">Conversational</option>
      <option value="Fluent">Fluent</option>
      <option value="Native">Native</option>
      </select>
      </div>
      </div>
      <button type="reset" name="button" id="reset">Reset</button> <br /><br />
      <button type="button" name="button" id="button4">Añadir</button>
      </div>
      </fieldset>
      </form>
      <form  method="post" id="form5">
      <fieldset className="col1">
      <legend>Skills</legend>
      <button type="button" name="button" className="button-accordion">+</button>
      <div className="accordion hidden">
      <div className="form-container">
      <div className="form-container-items">
      <label htmlFor="skills" className="hidden">Skill</label>
      <input type="text" name="skill" id="skill1" defaultValue placeholder="Skill" />
      </div>
      <div className="form-container-items">
      <select name="nivel" id="nivel-skill1">
      <option value />
      <option value="Beginner">Beginner</option>
      <option value="Conversational">Elementary</option>
      <option value="Fluent">Intermediate</option>
      <option value="Native">Advanced</option>
      </select>
      </div>
      </div>
      <div className="form-container">
      <div className="form-container-items">
      <label htmlFor="skills" className="hidden">Skill</label>
      <input type="text" name="skill" id="skill2" defaultValue placeholder="Skill" />
      </div>
      <div className="form-container-items">
      <select name="nivel" id="nivel-skill2">
      <option value />
      <option value="Beginner">Beginner</option>
      <option value="Conversational">Elementary</option>
      <option value="Fluent">Intermediate</option>
      <option value="Native">Advanced</option>
      </select>
      </div>
      </div>
      <div className="form-container">
      <div className="form-container-items">
      <label htmlFor="skills" className="hidden">Skill</label>
      <input type="text" name="skill" id="skill3" defaultValue placeholder="Skill" />
      </div>
      <div className="form-container-items">
      <select name="nivel" id="nivel-skill3">
      <option value />
      <option value="Beginner">Beginner</option>
      <option value="Conversational">Elementary</option>
      <option value="Fluent">Intermediate</option>
      <option value="Native">Advanced</option>
      </select>
      </div>
      </div>
      <div className="form-container">
      <div className="form-container-items">
      <label htmlFor="skills" className="hidden">Skill</label>
      <input type="text" name="skill" id="skill4" defaultValue placeholder="Skill" />
      </div>
      <div className="form-container-items">
      <select name="nivel" id="nivel-skill4">
      <option value />
      <option value="Beginner">Beginner</option>
      <option value="Conversational">Elementary</option>
      <option value="Fluent">Intermediate</option>
      <option value="Native">Advanced</option>
      </select>
      </div>
      </div>
      <button type="reset" name="button" id="reset">Reset</button> <br /><br />
      <button type="button" name="button" id="button5">Añadir</button>
      </div>
      </fieldset>
      </form>
      <div className="insert-photo">
      <label className="button-photo" htmlFor="photo">Foto</label>
      <input className="photo-button" id="photo" type="file" placeholder="Foto" />
      </div>
      </section>
      <div id="printCv" className="resume-container" onload="window.print();window.close()">
      <section className="resume">
      <aside className="resume-left">
      <img className="profile-picture margin" />
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
      <img src alt="" />
      <p id="CV1" />
      </div>
      <div className="email-info">
      <img src alt="" />
      <p id="CV1" />
      </div>
      <div className="location-info">
      <img src alt="" />
      <p id="CV1" />
      </div>
      </div>
      <div className="social-media">
      <p id="social-enlace" />
      {/*<p>Linkedin:<a href="https://github.com/Adalab/clarke-s2-varwomen/tree/js-adds">Icono Linkedin</a></p>
      <p>GitHub: @ejemplo</p>*/}
      <p id="social-enlace" />
      <p id="social-enlace" />
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
      <h5 id="company-name-CV" />
      <div className="date-info">
      <p id="start-work-date" />
      <p id="end-work-date" />
      </div>
      </div>
      <p id="work-description">
      </p>
      <div className="work-extra-cv hidden">
      <h4 id="work-type-CV-extra">Puesto o Cargo</h4>
      <div className="where-info">
      <h5 id="company-name-CV-extra" />
      <div className="date-info">
      <p id="start-work-date-extra" />
      <p id="end-work-date-extra" />
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
      <h5 id="school" />
      <div className="date-info">
      <p id="start-study-date" />
      <p id="end-study-date" />
      </div>
      </div>
      <p id="study-description">
      </p>
      <div className="estudio-extra-cv hidden">
      <h4 id="study-title-extra" />
      <div className="where-info">
      <h5 id="school-extra" />
      <div className="date-info">
      <p id="start-study-date-extra" />
      <p id="end-study-date-extra" />
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
      <p id="primero-idioma-into-CV" />
      <p id="idioma-extra1-into-CV" />
      <p id="idioma-extra2-into-CV" />
      <p id="idioma-extra3-into-CV" />
      </div>
      <div className="options-content-items">
      <p id="nivel-primero-idioma-into-CV" />
      <p id="nivel-idioma-extra1-into-CV" />
      <p id="nivel-idioma-extra2-into-CV" />
      <p id="nivel-idioma-extra3-into-CV" />
      </div>
      </div>
      </div>
      <div className="options-content-items">
      <h4>Skills</h4>
      <div className="options-content">
      <div className="options-content-items">
      <p id="skill1-cv" />
      <p id="skill2-cv" />
      <p id="skill3-cv" />
      <p id="skill4-cv" />
      </div>
      <div className="options-content-items">
      <p id="skill1-level-cv" />
      <p id="skill2-level-cv" />
      <p id="skill3-level-cv" />
      <p id="skill4-level-cv" />
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div></section>
      <input className="button-print" type="button" onclick="printDiv('printCv')" defaultValue="Imprimir" />
      </div></section>
      <div className="button-up"><a href="#top"><img src="/images/arrow.png" alt="Back to the top" /></a></div>
      </main>
      <footer>
      <div className="footer-container">
      <div className="footer-items">VarWomen 	© 2017  <img className="logo" src="/images/logoCv.png" alt="" /> </div>
      <div className="footer-items"><a href="http://politicadecookies.com/" target="_blank">Politica de cookies</a></div>
      </div>
      </footer>
      </div>
    );
  }
}

export default App;
