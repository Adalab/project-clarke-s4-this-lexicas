import React, { Component } from 'react';

import LangSkillsComponent  from './LangSkillsComponent';
import Fieldset from '../Fieldset';


class Language  extends Component {
  render() {
    return (
      <Fieldset  formNumber={4} legend="Idiomas" innerClassname="form-container">
      <LangSkillsComponent updateState={this.props.updateState} data={this.props.data} name="language" id="first-language" placeholder="idioma" selectId="nivel-first-language"/>
      <LangSkillsComponent updateState={this.props.updateState} data={this.props.data} name="language" id="second-language" placeholder="idioma" selectId="nivel-second-language"/>
      <LangSkillsComponent updateState={this.props.updateState} data={this.props.data} name="language" id="third-language" placeholder="idioma" selectId="nivel-third-language"/>
      </Fieldset>
    );
  }
}

export default Language  ;
