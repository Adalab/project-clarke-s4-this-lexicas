import React, { Component } from 'react';

import Fieldset from '../Fieldset';
import LangSkillsComponent  from './LangSkillsComponent';

class Skills extends Component {

  render() {
    return (
      <Fieldset  formNumber={5} legend="Skills" innerClassname="">
      <LangSkillsComponent id="skill2" updateState={this.props.updateState} data={this.props.data} placeholder="Skills"/>
      <LangSkillsComponent id="skill3" updateState={this.props.updateState} data={this.props.data} />
      </Fieldset>
    );
  }
}

export default Skills;
