import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Fieldset extends Component {
  constructor(props){
    super(props)
    this.state = {
      collapsed : true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      this.setState({collapsed : !this.state.collapsed});
  }

  render(){
    const className = this.state.collapsed ? 'hidden' : '';

    return (
      <form  method="post" id={`form${this.props.formNumber}`}>
        <fieldset className="col1">
          <legend>{this.props.legend}</legend>
          <button type="button" name="button" className="button-accordion" onClick={this.handleClick}>
            {this.state.collapsed ? "Editar" : "Cerrar"}
          </button>
          <div className={`${className} accordion`}>
            <div className={this.props.innerClassname}>
              {this.props.children}
            </div>
            <button type="reset" name="button" id="reset">Reset</button> <br /><br />
            <button type="button" name="button" id="button1">Añadir</button>
          </div>
        </fieldset>
      </form>
    );
  }


}
export default Fieldset;
