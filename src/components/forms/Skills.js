import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fieldset from '../Fieldset';
import LangSkillsComponent  from './LangSkillsComponent';

class Skills extends Component {
  render() {
    return (
      <Fieldset  formNumber={5} legend="Skills" innerClassname="">
      <LangSkillsComponent name="skill" id="skill1" placeholder="Skill" selectId="nivel-skill1"/>
      <LangSkillsComponent name="skill" id="skill2" placeholder="Skill" selectId="nivel-skill2"/>
      <LangSkillsComponent name="skill" id="skill3" placeholder="Skill" selectId="nivel-skill3"/>
      </Fieldset>
    );
  }
}

export default Skills;
