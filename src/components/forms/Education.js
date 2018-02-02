import React, { Component } from 'react';

import Fieldset from '../Fieldset';


class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : true
    }
    this.handleClickReset = this.handleClickReset.bind(this);
  }

  handleClickReset() {
    this.setState({
      value: !this.state.value,
    });
  }

  render() {
    return (

      <Fieldset  formNumber={2} legend="Estudios" innerClassname="estudios">

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
      <button onClick={this.handleClickReset}  type="reset" name="button" id="reset">Reset</button> <br /><br />


      </Fieldset>

    );
  }
}

export default Education;
