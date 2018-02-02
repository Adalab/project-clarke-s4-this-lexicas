import React, { Component } from 'react';


class LangSkillsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : true
    }
    this.handleClickReset = this.handleClickReset.bind(this);
  }

  handleClickReset() {
    this.setState({
      value: !this.state.value,
    });
  }

  render() {
    return (

      <form>
      <div className="wrapper">
      <input type="text" id={this.props.id} onChange={this.props.updateState} value={this.props.data[this.props.id]}  placeholder={this.props.placeholder}  />

      <select name="nivel" id={this.props.selectId}>
      <option selected value="Seleccionar nivel">Seleccionar nivel</option>
      <option value="Beginner">Beginner</option>
      <option value="Medium">Medium</option>
      <option value="Advanced">Advanced</option>
      </select>
      </div>

      <button onClick={this.handleClickReset}  type="reset" name="button" id="reset">Reset</button> <br /><br />
      </form>
    );
  }
}

export default LangSkillsComponent;
