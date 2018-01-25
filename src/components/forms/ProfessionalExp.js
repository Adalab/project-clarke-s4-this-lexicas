import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fieldset from '../Fieldset';

class ProfessionalExp extends Component {
  render() {
    return (

            <Fieldset  formNumber={3} legend="Experiencia Laboral" innerClassname="experiencia-laboral">
              <p id="form-field">Experiencia laboral I</p>
              <label htmlFor="work-type" className="hidden">Cargo</label>
              <input type="text" name="cargo" id="work-type"  placeholder="Cargo" />
              <label htmlFor="company" className="hidden">Compañía</label>
              <input type="text" name="company" id="company"  placeholder="Compañía" />
              <label htmlFor="city" className="hidden">Ciudad</label>
              <input type="text" name="city" id="city"  placeholder="Ciudad" />
              <label htmlFor="city" className="hidden">País</label>
              <input type="text" name="country" id="country" placeholder="País" />
              <div className="form-container">
                <div className="form-container-items">
                  <label htmlFor="start">Fecha inicio</label> <br />
                  <select className="months"  id="select-5">
                  </select>
                  <select className="years"  id="select-años-5">
                  </select>
                </div>
                <div className="form-container-items">
                  <label htmlFor="end">Fecha fin</label> <br />
                  <select className="months"  id="select-6">
                  </select>
                  <select className="years"  id="select-años-6">
                  </select>
                </div>
              </div>
              <label htmlFor="descripcion" className="hidden">Descripción</label>
              <textarea name="name" rows={8} cols={80} placeholder={""} />


      </Fieldset>
    );
  }
}

export default ProfessionalExp;
