import React, { Component } from 'react';

import Fieldset from '../Fieldset';

class ProfessionalExp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cargo : '',
      company : '',
      professionalStartMonth: '',
      professionalStartYear: '',
      professionalEndMonth: '',
      professionalEndYear: '',
      professionalText : ''

    }

  }
  handleChange = (event) => {
    this.props.getData('professionalExp', {[event.target.name]: event.target.value});
  }
  render() {
    return (

            <Fieldset  formNumber={3} legend="Experiencia Laboral" innerClassname="experiencia-laboral">
              <p id="form-field">Experiencia laboral I</p>

              <input type="text" name="cargo" id="work-type"  placeholder="Cargo" onChange={(e) => this.handleChange(e)} />

              <input type="text" name="company" id="company"  placeholder="Compañía" onChange={(e) => this.handleChange(e)} />

              <div className="form-container">
                <div className="form-container-items">
                  <label htmlFor="start">Fecha inicio</label> <br />
                  <select name= "professionalStartMonth" className="months"  id="select-5" onChange={(e) => this.handleChange(e)} >
                  </select>
                  <select name= "professionalStartYear" className="years"  id="select-años-5" onChange={(e) => this.handleChange(e)} >
                  </select>
                </div>
                <div className="form-container-items">
                  <label htmlFor="end">Fecha fin</label> <br />
                  <select name= "professionalEndMonth" className="months"  id="select-6" onChange={(e) => this.handleChange(e)} >
                  </select>
                  <select name= "professionalEndYear" className="years"  id="select-años-6" onChange={(e) => this.handleChange(e)} >
                  </select>
                </div>
              </div>
              <label htmlFor="descripcion">Descripción</label>
              <textarea name="professionalTexts" rows={8} cols={80} placeholder={""} onChange={(e) => this.handleChange(e)} />


      </Fieldset>
    );
  }
}

export default ProfessionalExp;
