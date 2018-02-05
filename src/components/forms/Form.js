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
      <Education getData={this.getData}/>
      <ProfessionalExp getData={this.getData}/>
      <Language getData={this.getData} data={this.props.data.language}/>
      <Skills id= {this.props.id} getData={this.getData} data={this.props.data.skills}/>
      <div className="insert-photo">
      <label className="button-photo" htmlFor="photo">Foto</label>
      <input className="photo-button" id="photo" type="file" placeholder="Foto" />
      </div>
      </section>
    );
  }
}


export default Form;
