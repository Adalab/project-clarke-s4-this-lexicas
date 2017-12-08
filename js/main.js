'use strict';

//Datos personales
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
  if(userInputPersonales1[8].value !== '') {
    dataSocial[0].innerHTML =  'Linkedin: ' + userInputPersonales1[8].value;
  } else {
    dataSocial[0].innerHTML =  '';
  } if(userInputPersonales1[9].value !== '') {
    dataSocial[1].innerHTML =  'Twitter: ' + userInputPersonales1[9].value;
  } else {
    dataSocial[1].innerHTML =  '';
  } if(userInputPersonales1[10].value !== '') {
    dataSocial[2].innerHTML =  'GitHub: ' + userInputPersonales1[10].value;
  } else {
    dataSocial[2].innerHTML =  '';
  }
}

var button1 = document.querySelector('#button1');
button1.addEventListener('click',showIntoCV1);

// 2 inpunts, 4 select, 1 text area
//Estudios:
var userInputStudy = document.querySelectorAll('.estudios input');
var studyDates = document.querySelectorAll('.estudios select');
var description = document.querySelector('.estudios textarea');
var studyTitle = document.querySelector('#study-title');
var instituteName = document.querySelector('#school');
var startingStudyDate = document.querySelector('#start-date');
var endingStudyDate = document.querySelector('#end-date');
var studyDescription = document.querySelector('#study-description');

var button2 = document.querySelector('#button2');
button2.addEventListener('click',showIntoCV2);

function showIntoCV2() {
  studyTitle.innerHTML = userInputStudy[0].value;
  instituteName.innerHTML = userInputStudy[1].value + ', ' + userInputStudy[2].value + ' (' + userInputStudy[3].value + ')';
  studyDescription.innerHTML = description.value;
}


//Notas:
// 1. poner en dataSOcial0-2 los iconos de los social;
//2. poner obligatorios todos los campos
//3.meter social a parte
