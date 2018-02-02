import React, { Component } from 'react';

import LangSkillsComponent  from './LangSkillsComponent';
import Fieldset from '../Fieldset';


class Language  extends Component {
  render() {
    return (
      <Fieldset  formNumber={4} legend="Idiomas" innerClassname="form-container">
      <LangSkillsComponent updateState={this.props.updateState} data={this.props.data} name="language" id="first-language" placeholder="Idioma" selectId="nivel-first-language"/>
      </Fieldset>
    );
  }
}

export default Language  ;
