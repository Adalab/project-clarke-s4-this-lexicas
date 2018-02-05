import React, { Component } from 'react';

import Fieldset from '../Fieldset';


class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title : '',
      institute : '',
      startMonth : '',
      startYear : '',
      endMonth : '',
      endYear : '',
      textEducation : '',
    }
  }

  handleChange = (event) => {
    this.props.getData('education', {[event.target.name]: event.target.value});
  }

  render() {
    return (

      <Fieldset  formNumber={2} legend="Estudios" innerClassname="estudios">

      <input type="text" name="title" id="titulo"  placeholder="Titulo" onChange={(e) => this.handleChange(e)}/>
      <input type="text" name="institute" id="instituto"  placeholder="Escuela o Universidad" onChange={(e) => this.handleChange(e)}/>
      <div className="form-container">
      <div className="form-container-items">
      <label htmlFor="start">Fecha inicio</label> <br />
      <select className="months"  name="startMonth" id="select-1" onChange={(e) => this.handleChange(e)}>
      </select>
      <select className="years" name="startYear" id="select-años-1" onChange={(e) => this.handleChange(e)}>
      </select>
      </div>
      <div className="form-container-items">
      <label htmlFor="end">Fecha fin</label> <br/>
      <select className="months" name="endMonth" id="select-2" onChange={(e) => this.handleChange(e)}>
      </select>
      <select className="years" name="endYear" id="select-años-2" onChange={(e) => this.handleChange(e)}>
      </select>
      </div>
      </div>
      <label htmlFor="descripcion" >Descripción</label>
      <textarea id="descripcion" name="textEducation" rows={8} cols={43} placeholder="Descripción" onChange={(e) => this.handleChange(e)}/>

      </Fieldset>

    );
  }
}

export default Education;
