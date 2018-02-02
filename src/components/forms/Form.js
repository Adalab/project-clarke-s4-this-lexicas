import React, { Component } from 'react';

import PersonalData from './PersonalData';
import Education from './Education';
import ProfessionalExp from './ProfessionalExp';
import Skills from './Skills';
import Language from './Language'



class Form extends Component {

  getData = (type, data) => {
    this.props.getData(type, data)
  };


  render() {
    return (
      <section className="form">
      <PersonalData getData={this.getData}/>
      <Education />
      <ProfessionalExp />
      <Language data={this.props.data} updateState={this.props.updateState} />
      <Skills id= {this.props.id} data={this.props.data} updateState={this.props.updateState}/>
      <div className="insert-photo">
      <label className="button-photo" htmlFor="photo">Foto</label>
      <input className="photo-button" id="photo" type="file" placeholder="Foto" />
      </div>
      </section>
    );
  }
}

// <PersonalData />
// <Education />
// <ProfessionalExp />
// <Language />




export default Form;
