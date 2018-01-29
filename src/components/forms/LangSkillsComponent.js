import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LangSkillsComponent extends Component {
//   constructor (props) {
// super(props);
// this.state = {value: ""}
// this.handleChange= this.handleChange.bind(this);
//   }
//   handleChange (event) {
//     this.setState({value:event.target.value})
//   }


  render() {
    return (
      <div className="wrapper">

      <input type="text" id={this.props.id} onChange={this.props.updateState} value={this.props.data[this.props.id]}  placeholder={this.props.placeholder}  />

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
