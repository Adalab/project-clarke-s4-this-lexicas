import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fieldset from '../Fieldset';


class Education extends Component {
  render() {
    return (


      <fieldset className="col1">
      <legend>Estudios</legend>
      <div className="estudios">
      <form  method="post" id="form2">
      <button type="button" name="button" className="button-accordion" data-id= '1'>+</button>
      <div className="accordion ">
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
      <button type="reset" name="button" id="reset">Reset</button> <br /> <br />
      <button type="button" name="button" id="paragraph-button-study">Añadir nuevo estudio</button><br /> <br /> <br />
      <button type="button" name="button" id="button2">Añadir</button>
      </div>

      </form>
      </div>
      </fieldset>

    );
  }
}

export default Education;
