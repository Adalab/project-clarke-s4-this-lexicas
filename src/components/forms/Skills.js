import React, { Component } from 'react';
import Fieldset from '../Fieldset';
import LangSkillsComponent  from './LangSkillsComponent';

class Skills extends Component {
  static defaultProps = {
    cvComponent: "skills"
  }
  getData = (type, data) => {
    this.props.getData(type, data)
  };

  render() {
    return (
      <Fieldset formNumber={5} legend="Habilidades" innerClassname="">
      <LangSkillsComponent id="skill2" data={this.props.data} getData={this.getData}  placeholder="Skills" cvComponent={this.props.cvComponent} position={1} />
      <LangSkillsComponent id="skill3" data={this.props.data} getData={this.getData} placeholder="Skills" cvComponent={this.props.cvComponent} position={2} />
      <LangSkillsComponent id="skill3" data={this.props.data} getData={this.getData} placeholder="Skills" cvComponent={this.props.cvComponent} position={3} />
      </Fieldset>
    );
  }
}

export default Skills;
