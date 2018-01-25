import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fieldset from '../Fieldset';

class Skills extends Component {
  render() {
    return (
      <Fieldset  formNumber={5} legend="Skills" innerClassname="form-container">
      <div className="form-container-items">
      <input type="text" name="skill" id="skill1" defaultValue placeholder="Skill" />
      </div>
      <div className="form-container-items">
      <select name="nivel" id="nivel-skill1">
      <option value />
      <option selected disabled value="Seleccionar nivel">Seleccionar nivel</option>
      <option value="Beginner">Beginner</option>
      <option value="Conversational">Elementary</option>
      <option value="Fluent">Intermediate</option>
      <option value="Native">Advanced</option>
      </select>
      </div>
      </Fieldset>
    );
  }
}

export default Skills;
