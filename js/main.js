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
//ESTUDIOS:
var userInputStudy = document.querySelectorAll('.estudios input');
var studyDates = document.querySelectorAll('.estudios select');
var description = document.querySelector('.estudios textarea');
var studyTitle = document.querySelector('#study-title');
var instituteName = document.querySelector('#school');
var studyStartingDate = document.querySelector('#start-study-date');  //parrafo donde va escrita la fecha de inicio de estudios
var studyEndingDate = document.querySelector('#end-study-date');  //parrafo donde va escrita la fecha de fin de estudios
var studyDescription = document.querySelector('#study-description');

//Variables fechas - meses
var mesesSelect = document.querySelectorAll('.monthsStudy'); //es el select, que son 2 porque ho 2 select con class months, por esto tengo que tratarlos como si fueran un array
var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
var optionsMonth = ""; //puesto por dentro del array, el bucle procesaba todo dandome solo diciembre

for (var i = 0; i < meses.length; i = i+1) {
  optionsMonth = optionsMonth + '<option>' + meses[i] + '\n' + '</option>'; //en mesesSelect yo pongo el intero array
}
for(var i = 0 ; i < mesesSelect.length ; i = i+1) {
  mesesSelect[i].innerHTML = optionsMonth;   //voy a extender a los 2 select con class monthsStudy
}
//Variables fechas - años
var añosSelect = document.querySelectorAll('.yearsStudy'); //es el select, que son 2 porque ho 2 select con class months, por esto tengo que tratarlos como si fueran un array
var startingYear = 1950;
var endingYear = 2017;
var optionsYear = "";
for(var i = startingYear; i<=endingYear; i = i+1){
  optionsYear = optionsYear + "<option>"+ i +"</option>";
}
añosSelect.innerHTML = optionsYear;  //en añosSelect yo pongo el intero array
for(var i = 0 ; i < añosSelect.length ; i = i+1) {
  añosSelect[i].innerHTML = optionsYear;   //voy a extender a los 2 select con class years
}


//Evento
var button2 = document.querySelector('#button2');
button2.addEventListener('click',showIntoCV2);

function showIntoCV2() {
  studyTitle.innerHTML = userInputStudy[0].value;
  instituteName.innerHTML = userInputStudy[1].value + ', ' + userInputStudy[2].value + ' (' + userInputStudy[3].value + ')';
  studyDescription.innerHTML = description.value;
    studyStartingDate.innerHTML = meses[mesesSelect[0].selectedIndex] + ' ' + (añosSelect[0].selectedIndex + startingYear) + ' - ';
    studyEndingDate.innerHTML = meses[mesesSelect[1].selectedIndex] + ' ' + (añosSelect[1].selectedIndex + startingYear); //en mesesSelect esta el array. con mesesSelect.selectedIntex yo voy a determinar el elemento a traves de su numero de order en array
  }



//Notas:
// 1. poner en dataSOcial0-2 los iconos de los social;
//2. poner obligatorios todos los campos
//3.poner 1 sola experiencia laaboral y estudio en occulto
//
