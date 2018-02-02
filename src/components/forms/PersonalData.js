import React, { Component } from 'react';

import Fieldset from '../Fieldset';

class PersonalData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname : '',
      profession : '',
      date : '',
      tel : '',
      mail : '',
      postalcode : '',
      city : '',
      country : '',
      enlaceLinkedin : '',
      enlaceGitHub : '',
      enlaceTwitter : '',
      personalDescription : ''
    }
    // this.handleChange = this.handleChange.bind(this);
  }


  handleChange = (event) => {
    this.props.getData('personalData', {[event.target.name]: event.target.value});
  }

  render() {
    return (
      <Fieldset  formNumber={1} legend="Datos Personales" innerClassname="datos-personales">
      <input id="firstname" type="text" name="fullname" placeholder="Nombre y Apellidos" onChange={(e) => this.handleChange(e)} />
      <input id="job" type="text" name="profession" placeholder="Profesión" onChange={(e) => this.handleChange(e)} />
      <input id="tel" type="tel" name="tel" placeholder="Teléfono Móvil" onChange={(e) => this.handleChange(e)}/>
      <input id="mail" type="mail" name="mail" placeholder="Email" onChange={(e) => this.handleChange(e)}/>
      <input id="city" type="text" name="city" placeholder="Ciudad" onChange={(e) => this.handleChange(e)}/>
      <input id="pais" type="text" name="country" placeholder="País" onChange={(e) => this.handleChange(e)}/>
      <input id="ln" type="text" name="enlaceLinkedin" placeholder="Tu cuenta Linkedin, ej. @AnaG" onChange={(e) => this.handleChange(e)}/>
      <input id="gh" type="text" name="enlaceGitHub" placeholder="Tu cuenta Twitter, ej. @Belen23" onChange={(e) => this.handleChange(e)}/>
      <input id="tw" type="text" name="enlaceTwitter" placeholder="Tu cuenta GitHub, ej. @SaraPeir" onChange={(e) => this.handleChange(e)}/>
      <label htmlFor="descripcion" >Personal descripción</label>
      <textarea name="personalDescription" rows={8} cols={80} id="description-personal" defaultValue={""} onChange={(e) => this.handleChange(e)}/>
      </Fieldset>

    );
  }
}

export default PersonalData;
