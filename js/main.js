'use strict';

//Datos personales
var userInput = document.querySelectorAll('input');
var dataCV = document.querySelectorAll('#CV');

function showIntoCV() {
for (var i = 0; i < userInput.length; i++) {
  dataCV[i].innerHTML = userInput[i].value;
}
}

var button1 = document.querySelector('#button1');
button1.addEventListener('click', showIntoCV);


//var datosPersonale = document.querySelector('.datos-personales');
//var inputDatosPersonales = document.querySelectorAll('input');


//var userName = event.currentTarget.getAttribute('#firstname');



/*var userName = document.querySelector('#firstname');
var resultNameCV = document.querySelector('#firstnameCV');
function fillText() {
  resultNameCV.innerHTML = userName.value;
}

var userJob = document.querySelector('#job');
var resultjobCV = document.querySelector('#jobCV');
function fillText() {
  resultjobCV.innerHTML = userJob.value;
}

var button1 = document.querySelector('#button1');
button1.addEventListener('click', fillText);
*/
