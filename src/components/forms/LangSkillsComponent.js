import React, { Component } from 'react';


class LangSkillsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      languageSkill: '',
      level: '',
    }
  }

  handleChange = (event) => {
    const newValues = Object.assign({}, this.props.data[this.props.position], {[event.target.name]: event.target.value});
    const newState = Object.assign({}, this.props.data, {[this.props.position]: newValues});
    
    this.props.getData(this.props.cvComponent, newState);
  }

  render() {
    return (
      <div className="wrapper">

      <input type="text" id={this.props.id} onChange={(e) => this.handleChange(e)}  placeholder={this.props.placeholder} name="languageSkill" />

      <select name="level" id={this.props.selectId} onChange={(e) => this.handleChange(e)}>
      <option value="Seleccionar nivel" name="level-select">Seleccionar nivel</option>
      <option value="Básico" name="beginner">Básico</option>
      <option value="Medio" name="medium">Medio</option>
      <option value="Avanzado" name="advanced">Avanzado</option>
      </select>
      </div>
    );
  }
}

export default LangSkillsComponent;
