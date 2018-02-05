import React, { Component } from 'react';
import LangSkillsComponent  from './LangSkillsComponent';
import Fieldset from '../Fieldset';


class Language  extends Component {
  static defaultProps = {
    cvComponent: "language"
  }
  getData = (type, data) => {
    this.props.getData(type, data)
  };

  render() {
    return (
      <Fieldset  formNumber={4} legend="Idiomas" innerClassname="form-container">
        <LangSkillsComponent data={this.props.data} getData={this.getData} id="first-language" placeholder="idioma" selectId="nivel-first-language" cvComponent= {this.props.cvComponent} position={1} />
        <LangSkillsComponent data={this.props.data} getData={this.getData} id="second-language" placeholder="idioma" selectId="nivel-second-language" cvComponent= {this.props.cvComponent}  position={2}/>
        <LangSkillsComponent data={this.props.data} getData={this.getData} id="third-language" placeholder="idioma" selectId="nivel-third-language" cvComponent= {this.props.cvComponent}  position={3}/>
      </Fieldset>
    );
  }
}

export default Language  ;
