import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fieldset from '../Fieldset';
import SkillComponent from './SkillComponent';

class Skills extends Component {
  render() {
    return (
      <Fieldset  formNumber={5} legend="Skills" innerClassname="">
      <SkillComponent />
      <SkillComponent />
      <SkillComponent />
      </Fieldset>
    );
  }
}

export default Skills;
