import React, { Component } from 'react';


class LangSkillsComponent extends Component {

  render() {
    return (
      <form className="wrapper">

      <input type="text" id={this.props.id} onChange={this.props.updateState} value={this.props.data[this.props.id]}  placeholder={this.props.placeholder}  />

      <select name="nivel" id={this.props.selectId}>
      <option selected disabled value="Seleccionar nivel">Seleccionar nivel</option>
      <option value="Beginner">Beginner</option>
      <option value="Medium">Medium</option>
      <option value="Advanced">Advanced</option>
      </select>
      </form>
    );
  }
}

export default LangSkillsComponent;
