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




//ESTUDIOS:
var userInputStudy = document.querySelectorAll('.estudios input');
var studyDates = document.querySelectorAll('.estudios select');
var description = document.querySelectorAll('.estudios textarea');
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

//estudios extra

var userInputStudyExtra = document.querySelectorAll('.estudios input');
var studyDatesExtra = document.querySelectorAll('.estudios select');
//var descriptionExtra = document.querySelector('#description-extra');
var studyTitleExtra = document.querySelector('#study-title-extra'); //ritona al cv
var instituteNameExtra = document.querySelector('#school-extra'); //ritorna al cv
var studyStartingDateExtra = document.querySelector('#start-study-date-extra');  //parrafo donde va escrita la fecha de inicio de estudios
var studyEndingDateExtra = document.querySelector('#end-study-date-extra');  //parrafo donde va escrita la fecha de fin de estudios
var studyDescriptionExtra = document.querySelector('#study-description-extra');

//Variables fechas - meses
var mesesSelectExtra = document.querySelectorAll('.monthsStudyExtra'); //es el select, que son 2 porque ho 2 select con class months, por esto tengo que tratarlos como si fueran un array
var mesesExtra = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
var optionsMonthExtra = ""; //puesto por dentro del array, el bucle procesaba todo dandome solo diciembre

for (var i = 0; i < mesesExtra.length; i = i+1) {
  optionsMonthExtra = optionsMonthExtra + '<option>' + mesesExtra[i] + '\n' + '</option>'; //en mesesSelect yo pongo el intero array
}
for(var i = 0 ; i < mesesSelect.length ; i = i+1) {
  mesesSelectExtra[i].innerHTML = optionsMonthExtra;   //voy a extender a los 2 select con class monthsStudy
}
//Variables fechas - años
var añosSelectExtra = document.querySelectorAll('.yearsStudyExtra'); //es el select, que son 2 porque ho 2 select con class months, por esto tengo que tratarlos como si fueran un array
var startingYearExtra = 1950;
var endingYearExtra = 2017;
var optionsYearExtra = "";
for(var i = startingYearExtra; i<=endingYearExtra; i = i+1){
  optionsYearExtra = optionsYearExtra + "<option>"+ i +"</option>";
}
añosSelectExtra.innerHTML = optionsYearExtra;  //en añosSelect yo pongo el intero array
for(var i = 0 ; i < añosSelectExtra.length ; i = i+1) {
  añosSelectExtra[i].innerHTML = optionsYearExtra;   //voy a extender a los 2 select con class years
}

//Evento para añadir o quitar en formulario el estudio Extra
var extraStudy = document.querySelector ('.estudio-extra'); //div con la cosas que tienen que aparecer/desaparecer
var extraStudyCV = document.querySelector ('.estudio-extra-cv');
var masButtonStudy = document.querySelector('#paragraph-button-study');
masButtonStudy.addEventListener('click', toAddStudy);

function toAddStudy () {
  extraStudy.classList.toggle('hidden');
  extraStudyCV.classList.toggle('hidden');
    if(extraStudy.classList.contains('hidden')){
      masButtonStudy.innerHTML = 'Más +';
    } else {
      masButtonStudy.innerHTML = 'Menos -';
    }
    //if(extraStudy.classList.contains('hidden')) {
      //extraStudyCV.classList.contains('hidden');
    //}
}

//Evento per inviare al CV
var button2 = document.querySelector('#button2');
button2.addEventListener('click',showIntoCV2);

function showIntoCV2() {
  studyTitle.innerHTML = userInputStudy[0].value;
  instituteName.innerHTML = userInputStudy[1].value + ', ' + userInputStudy[2].value + ' (' + userInputStudy[3].value + ')';
  studyDescription.innerHTML = description[0].value;
    studyStartingDate.innerHTML = meses[mesesSelect[0].selectedIndex] + ' ' + (añosSelect[0].selectedIndex + startingYear) + ' - ';
    studyEndingDate.innerHTML = meses[mesesSelect[1].selectedIndex] + ' ' + (añosSelect[1].selectedIndex + startingYear); //en mesesSelect esta el array. con mesesSelect.selectedIntex yo voy a determinar el elemento a traves de su numero de order en array

    studyTitleExtra.innerHTML = userInputStudy[4].value;
    instituteNameExtra.innerHTML = userInputStudy[5].value + ', ' + userInputStudy[6].value + ' (' + userInputStudy[7].value + ')';
    //studyDescriptionExtra.innerHTML = descriptionExtra.value;
    studyDescriptionExtra.innerHTML = description[1].value;
      studyStartingDateExtra.innerHTML = mesesExtra[mesesSelectExtra[0].selectedIndex] + ' ' + (añosSelectExtra[0].selectedIndex + startingYearExtra) + ' - ';
      studyEndingDateExtra.innerHTML = mesesExtra[mesesSelectExtra[1].selectedIndex] + ' ' + (añosSelectExtra[1].selectedIndex + startingYearExtra);
  }


  //EXPERIENCIA LABORAL:
  var userInputWork = document.querySelectorAll('.experiencia-laboral input');
  var workDates = document.querySelectorAll('.experiencia-laboral select');
  var descriptionWork = document.querySelectorAll('.experiencia-laboral textarea');
  var workType = document.querySelector('#work-type-CV');
  var companyName = document.querySelector('#company-name-CV');
  var workStartingDate = document.querySelector('#start-work-date');  //parrafo donde va escrita la fecha de inicio de estudios
  var workEndingDate = document.querySelector('#end-work-date');  //parrafo donde va escrita la fecha de fin de estudios
  var workDescription = document.querySelector('#work-description');

  //Variables fechas - meses
  var mesesSelectWork = document.querySelectorAll('.months-work'); //es el select, que son 2 porque ho 2 select con class months, por esto tengo que tratarlos como si fueran un array
  var mesesWork = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  var optionsMonthWork = ""; //puesto por dentro del array, el bucle procesaba todo dandome solo diciembre

  for (var i = 0; i < mesesWork.length; i = i+1) {
    optionsMonthWork = optionsMonthWork + '<option>' + mesesWork[i] + '\n' + '</option>'; //en mesesSelect yo pongo el intero array
  }
  for(var i = 0 ; i < mesesSelectWork.length ; i = i+1) {
    mesesSelectWork[i].innerHTML = optionsMonthWork;   //voy a extender a los 2 select con class monthsStudy
  }
  //Variables fechas - años
  var añosSelectWork = document.querySelectorAll('.years-work'); //es el select, que son 2 porque ho 2 select con class months, por esto tengo que tratarlos como si fueran un array
  var startingYearWork = 1950;
  var endingYearWork = 2017;
  var optionsYearWork = "";
  for(var i = startingYearWork; i<=endingYearWork; i = i+1){
    optionsYearWork = optionsYearWork + "<option>"+ i +"</option>";
  }
  añosSelectWork.innerHTML = optionsYearWork;  //en añosSelect yo pongo el intero array
  for(var i = 0 ; i < añosSelectWork.length ; i = i+1) {
    añosSelectWork[i].innerHTML = optionsYearWork;   //voy a extender a los 2 select con class years
  }



  //EXPERIENCIA LABORAL EXTRA

  var userInputWorkExtra = document.querySelectorAll('.experiencia-laboral input');
  var workDatesExtra = document.querySelectorAll('.experiencia-laboral select');
  //var descriptionExtra = document.querySelector('#description-extra');
  var workTypeExtra = document.querySelector('#work-type-CV-extra'); //ritona al cv
  var companyNameExtra = document.querySelector('#company-name-CV-extra'); //ritorna al cv
  var workStartingDateExtra = document.querySelector('#start-work-date-extra');  //parrafo donde va escrita la fecha de inicio de estudios
  var workEndingDateExtra = document.querySelector('#end-work-date-extra');  //parrafo donde va escrita la fecha de fin de estudios
  var workDescriptionExtra = document.querySelector('#work-description-extra');

  //Variables fechas - meses
  var mesesSelectWorkExtra = document.querySelectorAll('.months-work-extra'); //es el select, que son 2 porque ho 2 select con class months, por esto tengo que tratarlos como si fueran un array
  var mesesWorkExtra = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  var optionsMonthWorkExtra = ""; //puesto por dentro del array, el bucle procesaba todo dandome solo diciembre

  for (var i = 0; i < mesesWorkExtra.length; i = i+1) {
    optionsMonthWorkExtra = optionsMonthWorkExtra + '<option>' + mesesWorkExtra[i] + '\n' + '</option>'; //en mesesSelect yo pongo el intero array
  }
  for(var i = 0 ; i < mesesSelectWorkExtra.length ; i = i+1) {
    mesesSelectWorkExtra[i].innerHTML = optionsMonthWorkExtra;   //voy a extender a los 2 select con class monthsStudy
  }
  //Variables fechas - años
  var añosSelectWorkExtra = document.querySelectorAll('.years-work-extra'); //es el select, que son 2 porque ho 2 select con class months, por esto tengo que tratarlos como si fueran un array
  var startingYearWorkExtra = 1950;
  var endingYearWorkExtra = 2017;
  var optionsYearWorkExtra = "";
  for(var i = startingYearWorkExtra; i<=endingYearWorkExtra; i = i+1){
    optionsYearWorkExtra = optionsYearWorkExtra + "<option>"+ i +"</option>";
  }
  añosSelectWorkExtra.innerHTML = optionsYearWorkExtra;  //en añosSelect yo pongo el intero array
  for(var i = 0 ; i < añosSelectWorkExtra.length ; i = i+1) {
    añosSelectWorkExtra[i].innerHTML = optionsYearWorkExtra;   //voy a extender a los 2 select con class years
  }



  //Evento para añadir o quitar en formulario el estudio Extra
  var extraWork = document.querySelector ('.work-extra'); //div con la cosas que tienen que aparecer/desaparecer
  var extraWorkCV = document.querySelector ('.work-extra-cv');
  var masButtonWork = document.querySelector('#paragraph-button-work');
  masButtonWork.addEventListener('click', toAddWork);

  function toAddWork () {
    extraWork.classList.toggle('hidden');
    extraWorkCV.classList.toggle('hidden');
      if(extraWork.classList.contains('hidden')){
        masButtonWork.innerHTML = 'Más +';
      } else {
        masButtonWork.innerHTML = 'Menos -';
      }
      //if(extraStudy.classList.contains('hidden')) {
        //extraStudyCV.classList.contains('hidden');
      //}
  }

  //Evento per inviare al CV
  var button3 = document.querySelector('#button3');
  button3.addEventListener('click',showIntoCV3);

  function showIntoCV3() {
    workType.innerHTML = userInputWork[0].value;
    companyName.innerHTML = userInputWork[1].value + ', ' + userInputWork[2].value + ' (' + userInputWork[3].value + ')';
    workDescription.innerHTML = descriptionWork[0].value;
      workStartingDate.innerHTML = mesesWork[mesesSelectWork[0].selectedIndex] + ' ' + (añosSelectWork[0].selectedIndex + startingYearWork) + ' - ';
      workEndingDate.innerHTML = mesesWork[mesesSelectWork[1].selectedIndex] + ' ' + (añosSelectWork[1].selectedIndex + startingYearWork); //en mesesSelect esta el array. con mesesSelect.selectedIntex yo voy a determinar el elemento a traves de su numero de order en array

      workTypeExtra.innerHTML = userInputWork[4].value;
      companyNameExtra.innerHTML = userInputWork[5].value + ', ' + userInputWork[6].value + ' (' + userInputWork[7].value + ')';
      workDescriptionExtra.innerHTML = descriptionWork[1].value;
        workStartingDateExtra.innerHTML = mesesWorkExtra[mesesSelectWorkExtra[0].selectedIndex] + ' ' + (añosSelectWorkExtra[0].selectedIndex + startingYearWorkExtra) + ' - ';
        workEndingDateExtra.innerHTML = mesesWorkExtra[mesesSelectWorkExtra[1].selectedIndex] + ' ' + (añosSelectWorkExtra[1].selectedIndex + startingYearWorkExtra);
    }


//Notas:
// 1. poner en dataSOcial0-2 los iconos de los social;
//2. poner obligatorios todos los campos
//3.poner 1 sola experiencia laaboral y estudio en occulto
//
