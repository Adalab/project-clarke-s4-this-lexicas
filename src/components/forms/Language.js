import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LangSkillsComponent  from './LangSkillsComponent';
import Fieldset from '../Fieldset';


class Language  extends Component {
  render() {
    return (
      <Fieldset  formNumber={4} legend="Idiomas" innerClassname="form-container">
      <LangSkillsComponent name="language" id="first-language" placeholder="idioma" selectId="nivel-first-language"/>
      <LangSkillsComponent name="language" id="second-language" placeholder="idioma" selectId="nivel-second-language"/>
      <LangSkillsComponent name="language" id="third-language" placeholder="idioma" selectId="nivel-third-language"/>
      </Fieldset>
    );
  }
}

export default Language  ;
