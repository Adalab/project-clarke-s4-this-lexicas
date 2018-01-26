import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SkillComponent extends Component {
  render() {
    return (
      <div className="wrapper">
      <div className="form-container-items">
      <input type="text" name="skill" id="skill1" defaultValue placeholder="Skill" />
      </div>
      <div className="form-container-items">
      <select name="nivel" id="nivel-skill1">
      <option selected disabled value="Seleccionar nivel">Seleccionar nivel</option>
      <option value="Beginner">Beginner</option>
      <option value="Conversational">Elementary</option>
      <option value="Fluent">Intermediate</option>
      <option value="Native">Advanced</option>
      </select>
      </div>
      </div>
    );
  }
}

export default SkillComponent;
