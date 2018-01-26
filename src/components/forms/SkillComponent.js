import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SkillComponent extends Component {
  render() {
    return (
      <div className="wrapper">
      <input type="text" name="skill" id="skill1" placeholder="Skill" />

      <select name="nivel" id="nivel-skill1">
      <option selected disabled value="Seleccionar nivel">Seleccionar nivel</option>
      <option value="Beginner">Beginner</option>
      <option value="Conversational">Elementary</option>
      <option value="Fluent">Intermediate</option>
      <option value="Native">Advanced</option>
      </select>

      </div>
    );
  }
}

export default SkillComponent;
