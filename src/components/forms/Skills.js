import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Skills extends Component {
  render() {
    return (




<form  method="post" id="form5">
<fieldset className="col1">
<legend>Skills</legend>
<button type="button" name="button" className="button-accordion">+</button>
<div className="accordion hidden">
<div className="form-container">
<div className="form-container-items">
<label htmlFor="skills" className="hidden">Skill</label>
<input type="text" name="skill" id="skill1" defaultValue placeholder="Skill" />
</div>
<div className="form-container-items">
<select name="nivel" id="nivel-skill1">
<option value />
<option value="Beginner">Beginner</option>
<option value="Conversational">Elementary</option>
<option value="Fluent">Intermediate</option>
<option value="Native">Advanced</option>
</select>
</div>
</div>
<div className="form-container">
<div className="form-container-items">
<label htmlFor="skills" className="hidden">Skill</label>
<input type="text" name="skill" id="skill2" defaultValue placeholder="Skill" />
</div>
<div className="form-container-items">
<select name="nivel" id="nivel-skill2">
<option value />
<option value="Beginner">Beginner</option>
<option value="Conversational">Elementary</option>
<option value="Fluent">Intermediate</option>
<option value="Native">Advanced</option>
</select>
</div>
</div>
<div className="form-container">
<div className="form-container-items">
<label htmlFor="skills" className="hidden">Skill</label>
<input type="text" name="skill" id="skill3" defaultValue placeholder="Skill" />
</div>
<div className="form-container-items">
<select name="nivel" id="nivel-skill3">
<option value />
<option value="Beginner">Beginner</option>
<option value="Conversational">Elementary</option>
<option value="Fluent">Intermediate</option>
<option value="Native">Advanced</option>
</select>
</div>
</div>
<div className="form-container">
<div className="form-container-items">
<label htmlFor="skills" className="hidden">Skill</label>
<input type="text" name="skill" id="skill4" defaultValue placeholder="Skill" />
</div>
<div className="form-container-items">
<select name="nivel" id="nivel-skill4">
<option value />
<option value="Beginner">Beginner</option>
<option value="Conversational">Elementary</option>
<option value="Fluent">Intermediate</option>
<option value="Native">Advanced</option>
</select>
</div>
</div>
<button type="reset" name="button" id="reset">Reset</button> <br /><br />
<button type="button" name="button" id="button5">Añadir</button>
</div>
</fieldset>
</form>

);
}
}

export default Skills;
