import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Langcomponent from './Langcomponent';
import Fieldset from '../Fieldset';


class Language extends Component {
  render() {
    return (
      <Fieldset  formNumber={4} legend="Idiomas" innerClassname="form-container">
      <Langcomponent />
      <Langcomponent />
      <Langcomponent />
      </Fieldset>
    );
  }
}

export default Language;
