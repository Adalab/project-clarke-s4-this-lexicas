import React, { Component } from 'react';

import Fieldset from '../Fieldset';

class PersonalData extends Component {
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
      <Fieldset  formNumber={1} legend="Datos Personales" innerClassname="datos-personales">
      <input id="firstname" type="text" name="firstname" placeholder="Nombre" />
      <input id="job" type="text" name="lastname" placeholder="Profesión" />
      <label htmlFor="date" >Fecha de nacimiento</label>
      <input id="date" type="date" name="date" placeholder="Fecha de nacimiento" />
      <input id="tel" type="tel" name="tel" placeholder="Teléfono Móvil" />
      <input id="mail" type="mail" name="mail" placeholder="Email" />
      <input id="postalcode" type="text" name="postalcode" placeholder="Código Postal" />
      <input id="city" type="text" name="city" placeholder="Ciudad" />
      <input id="pais" type="text" name="country" placeholder="País" />
      <input id="ln" type="text" name="enlaceLinkedin" placeholder="Tu cuenta Linkedin, ej. @AnaG" />
      <input id="gh" type="text" name="enlaceGitHub" placeholder="Tu cuenta Twitter, ej. @Belen23" />
      <input id="tw" type="text" name="enlaceTwitter" placeholder="Tu cuenta GitHub, ej. @SaraPeir" />
      <label htmlFor="descripcion" >Personal descripción</label>
      <textarea name="name" rows={8} cols={80} id="description-personal" defaultValue={""} />
      <button onClick={this.handleClickReset}  type="reset" name="button" id="reset">Reset</button> <br /><br />

      </Fieldset>

    );
  }
}

export default PersonalData;
