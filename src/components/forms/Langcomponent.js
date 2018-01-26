import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Langcomponent extends Component {
  render() {
    return (
      <div className="wrapper">

      <input type="text" name="language" id="first-language"  placeholder="Idioma" />

      <select name="nivel" id="nivel-first-language">
      <option selected disabled value="Seleccionar nivel">Seleccionar nivel</option>
      <option value="Beginner">Beginner</option>
      <option value="Medium">Elementary</option>
      <option value="Fluent">Intermediate</option>
      <option value="Native">Advanced</option>
      </select>
      </div>
    );
  }
}

export default Langcomponent;
