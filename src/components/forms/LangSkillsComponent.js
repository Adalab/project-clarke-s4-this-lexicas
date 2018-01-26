import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LangSkillsComponent extends Component {
  render() {
    return (
      <div className="wrapper">

      <input type="text" name={this.props.name} id={this.props.id}  placeholder={this.props.placeholder} />

      <select name="nivel" id={this.props.selectId}>
      <option selected disabled value="Seleccionar nivel">Seleccionar nivel</option>
      <option value="Beginner">Beginner</option>
      <option value="Medium">Medium</option>
      <option value="Advanced">Advanced</option>
      </select>
      </div>
    );
  }
}

export default LangSkillsComponent;
