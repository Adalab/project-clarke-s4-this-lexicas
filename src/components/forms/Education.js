import React, { Component } from 'react';

import Fieldset from '../Fieldset';


class Education extends Component {
  render() {
    return (

      <Fieldset  formNumber={2} legend="Estudios" innerClassname="estudios">

      <p id="form-field">Estudio I</p>
      <input type="text" name="title" id="titulo"  placeholder="Titulo" />
      <input type="text" name="institute" id="instituto"  placeholder="Escuela o Universidad" />
      <input type="text" name="city" id="instituto-ciudad"  placeholder="Ciudad" />
      <input type="text" name="pais" id="instituto-pais"  placeholder="País" />
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
      <textarea id="descripcion" name="text" rows={8} cols={43} placeholder="Descripción" />

      </Fieldset>

    );
  }
}

export default Education;
