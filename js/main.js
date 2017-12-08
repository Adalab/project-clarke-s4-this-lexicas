'use strict';

//Datos personales - nombre y profesion pantalla grande
var userInputPersonales1 = document.querySelectorAll('.datos-personales input'); //formulario
var dataCV1 = document.querySelectorAll('#CV1'); //CV, nombre y profesion
var dataCV0 = document.querySelectorAll('#CV0'); //CV, nombre y profesion in movil
var dataFecha = document.querySelector('#fecha-nacimiento');  //CV, fecha de nacimiento
var dataCV2 = document.querySelectorAll('#CV2');
var dataSocial = document.querySelectorAll('#social-enlace');



function showIntoCV1() {
  dataCV1[0].innerHTML = userInputPersonales1[0].value;
  dataCV1[1].innerHTML = userInputPersonales1[1].value;
  dataCV0[0].innerHTML = userInputPersonales1[0].value;
  dataCV0[1].innerHTML = userInputPersonales1[1].value;
  dataFecha.innerHTML = userInputPersonales1[2].value;
  dataCV2[0].innerHTML = userInputPersonales1[3].value;
  dataCV2[1].innerHTML = userInputPersonales1[4].value;
  dataCV2[2].innerHTML = userInputPersonales1[5].value + ' ' + userInputPersonales1[6].value + ', ' + userInputPersonales1[7].value;
  dataSocial[0].innerHTML =  'Linkedin: ' + userInputPersonales1[8].value;
  dataSocial[1].innerHTML = 'Twitter: ' + userInputPersonales1[9].value;
  dataSocial[2].innerHTML = 'GitHub: ' +userInputPersonales1[10].value;
}

var button1 = document.querySelector('#button1');
button1.addEventListener('click',showIntoCV1);

//Notas:
// 1. poner en dataSOcial0-2 los iconos de los social;
//2. poner obligatorios todos los campos
//3.meter social a parte


//Datos personales - nombre y profesion para movil
/*var userInputPersonales0 = document.querySelectorAll('.personal-info-mvl margin h2');
var dataCV0 = document.querySelectorAll('#CV0');

function showIntoCV0() {
  for (var i = 0; i < 2; i++) {
    dataCV0[i].innerHTML = userInputPersonales0[i].value;
}
}

var button1 = document.querySelector('#button1');
button1.addEventListener('click',showIntoCV0); */


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
