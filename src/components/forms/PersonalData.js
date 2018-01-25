import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fieldset from '../Fieldset';

class PersonalData extends Component {
  render() {
    return (
      <Fieldset  formNumber={1} legend="Datos Personales" innerClassname="datos-personales">
      <label htmlFor="firstname" className="hidden">Nombre</label>
      <input id="firstname" type="text" name="firstname" defaultValue placeholder="Nombre" />
      <label htmlFor="job" className="hidden">Apellido</label>
      <input id="job" type="text" name="lastname" defaultValue placeholder="Profesión" />
      <label htmlFor="date" >Fecha de nacimiento</label>
      <input id="date" type="date" name="date" defaultValue placeholder="Fecha de nacimiento" />
      <label htmlFor="tel" className="hidden">Teléfono Móvil</label>
      <input id="tel" type="tel" name="tel" defaultValue placeholder="Teléfono Móvil" />
      <label htmlFor="mail" className="hidden">Email</label>
      <input id="mail" type="mail" name="mail" defaultValue placeholder="Email" />
      <label htmlFor="postalcode" className="hidden">Código Postal</label>
      <input id="postalcode" type="text" name="postalcode" defaultValue placeholder="Código Postal" />
      <label htmlFor="city" className="hidden">Ciudad</label>
      <input id="city" type="text" name="city" defaultValue placeholder="Ciudad" />
      <label htmlFor="pais" className="hidden">Ciudad</label>
      <input id="pais" type="text" name="country" defaultValue placeholder="País" />
      <label htmlFor="ln" className="hidden">Enlace Linkedin</label>
      <input id="ln" type="text" name="enlaceLinkedin" defaultValue placeholder="Tu cuenta Linkedin, ej. @AnaG" />
      <label htmlFor="gh" className="hidden">Enlace Twitter</label>
      <input id="gh" type="text" name="enlaceGitHub" defaultValue placeholder="Tu cuenta Twitter, ej. @Belen23" />
      <label htmlFor="tw" className="hidden">Enlace GitHub</label>
      <input id="tw" type="text" name="enlaceTwitter" defaultValue placeholder="Tu cuenta GitHub, ej. @SaraPeir" />
      <label htmlFor="descripcion" >Personal descripción</label>
      <textarea name="name" rows={8} cols={80} id="description-personal" defaultValue={""} />
      </Fieldset>

    );
  }
}

export default PersonalData;
