import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Language extends Component {
  render() {
    return (


<form  method="post" id="form4">
<fieldset className="col1">
<legend>Idiomas</legend>
<button type="button" name="button" className="button-accordion">+</button>
<div className="accordion hidden">
<div className="form-container">
<div className="form-container-items">
<label htmlFor="language" className="hidden">Idioma</label>
<input type="text" name="language" id="first-language" defaultValue placeholder="Idioma" />
</div>
<div className="form-container-items">
<select name="nivel" id="nivel-first-language">
<option value />
<option value="Beginner">Beginner</option>
<option value="Conversational">Conversational</option>
<option value="Fluent">Fluent</option>
<option value="Native">Native</option>
</select>
</div>
</div>
<br />
<div className="form-container">
<div className="form-container-items">
<label htmlFor="language" className="hidden">Idioma</label>
<input type="text" name="language" id="extra1-language" defaultValue placeholder="Idioma" />
</div>
<div className="form-container-items">
<select name="nivel" id="nivel-extra1-language">
<option value />
<option value="Beginner">Beginner</option>
<option value="Conversational">Conversational</option>
<option value="Fluent">Fluent</option>
<option value="Native">Native</option>
</select>
</div>
</div>
<br />
<div className="form-container">
<div className="form-container-items">
<label htmlFor="language" className="hidden">Idioma</label>
<input type="text" name="language" id="extra2-language" defaultValue placeholder="Idioma" />
</div>
<div className="form-container-items">
<select name="nivel" id="nivel-extra2-language">
<option value />
<option value="Beginner">Beginner</option>
<option value="Conversational">Conversational</option>
<option value="Fluent">Fluent</option>
<option value="Native">Native</option>
</select>
</div>
</div>
<br />
<div className="form-container">
<div className="form-container-items">
<label htmlFor="language" className="hidden">Idioma</label>
<input type="text" name="language" id="extra3-language" defaultValue placeholder="Idioma" />
</div>
<div className="form-container-items">
<select name="nivel" id="nivel-extra3-language">
<option value />
<option value="Beginner">Beginner</option>
<option value="Conversational">Conversational</option>
<option value="Fluent">Fluent</option>
<option value="Native">Native</option>
</select>
</div>
</div>
<button type="reset" name="button" id="reset">Reset</button> <br /><br />
<button type="button" name="button" id="button4">Añadir</button>
</div>
</fieldset>
</form>

);
}
}

export default Language;
