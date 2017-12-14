'use strict';

//Imprimir CV

function printDiv(printCv) {
     var contenido= document.getElementById(printCv).innerHTML;
     var contenidoOriginal= document.body.innerHTML;
     document.body.innerHTML = contenido;
       window.print('<link rel="stylesheet" href="css/style.css" media="all">');
     document.body.innerHTML = contenidoOriginal;
}


//Variables fechas - meses
var mesesSelect = document.querySelectorAll('.months'); //es el select, que son 2 porque ho 2 select con class months, por esto tengo que tratarlos como si fueran un array
var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
var optionsMeses = ""; //puesto por dentro del array, el bucle procesaba todo dandome solo diciembre

for (var i = 0; i < meses.length; i = i+1) {
  optionsMeses = optionsMeses + '<option>' + meses[i] + '\n' + '</option>'; //en mesesSelect yo pongo el intero array
}
for(var i = 0 ; i < mesesSelect.length ; i = i+1) {
  mesesSelect[i].innerHTML = optionsMeses;   //voy a extender a los 2 select con class monthsStudy
}

var select3 = document.querySelector('#select-3');
var select4 = document.querySelector('#select-4');
var select7 = document.querySelector('#select-7');
var select8 = document.querySelector('#select-8');

var selectYears3 = document.querySelector('#select-años-3');
var selectYears4 = document.querySelector('#select-años-4');
var selectYears7 = document.querySelector('#select-años-7');
var selectYears8 = document.querySelector('#select-años-8');

//select3.value = meses[0];

//Variables fechas - años
var añosSelect = document.querySelectorAll('.years'); //es el select, que son 2 porque ho 2 select con class months, por esto tengo que tratarlos como si fueran un array
var startingYear = 1950;
var endingYear = 2017;
var optionsYears = "";
for(var i = startingYear; i<=endingYear; i = i+1){
  optionsYears = optionsYears + "<option>"+ i +"</option>";
}
añosSelect.innerHTML = optionsYears;  //en añosSelect yo pongo el intero array
for(var i = 0 ; i < añosSelect.length ; i = i+1) {
  añosSelect[i].innerHTML = optionsYears;   //voy a extender a los 2 select con class years
}





//Datos personales
var userInputPersonales1 = document.querySelectorAll('.datos-personales input'); //formulario
var dataCV1 = document.querySelectorAll('#CV1'); //CV, nombre y profesion
var dataCV0 = document.querySelectorAll('#CV0'); //CV, nombre y profesion in movil
 var dataFecha = document.querySelector('#fecha-nacimiento');  //CV, fecha de nacimiento
// var dataCV2 = document.querySelectorAll('#CV2');
 var dataSocial = document.querySelectorAll('#social-enlace');
 var descriptionPersonal = document.querySelector('#description-personal');
 var descriptionPersonalCV = document.querySelector('#description-personal-cv');

function showIntoCV1() {
  dataCV1[3].innerHTML = userInputPersonales1[0].value;
  dataCV1[4].innerHTML = userInputPersonales1[1].value;
  dataCV0[0].innerHTML = userInputPersonales1[0].value;
  dataCV0[1].innerHTML = userInputPersonales1[1].value;
  dataFecha.innerHTML = userInputPersonales1[2].value;
  dataCV1[0].innerHTML = userInputPersonales1[3].value;
  dataCV1[1].innerHTML = userInputPersonales1[4].value;
  dataCV1[2].innerHTML = userInputPersonales1[5].value + ' ' + userInputPersonales1[6].value + ', ' + userInputPersonales1[7].value;
  descriptionPersonalCV.innerHTML = descriptionPersonal.value;
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

// var buttonReset = document.querySelector('#button-reset');
// buttonReset.addEventListener('click', zero);
// function zero(){
//   document.querySelector('.datos-personales').reset();
// }




//ESTUDIOS:
var userInputStudy = document.querySelectorAll('.estudios input');
var studyDates = document.querySelectorAll('.estudios select');
var description = document.querySelectorAll('.estudios textarea');
var studyTitle = document.querySelector('#study-title');
var instituteName = document.querySelector('#school');
var studyStartingDate = document.querySelector('#start-study-date');  //parrafo donde va escrita la fecha de inicio de estudios
var studyEndingDate = document.querySelector('#end-study-date');  //parrafo donde va escrita la fecha de fin de estudios
var studyDescription = document.querySelector('#study-description');


//estudios extra

var userInputStudyExtra = document.querySelectorAll('.estudios input');
var studyDatesExtra = document.querySelectorAll('.estudios select');
//var descriptionExtra = document.querySelector('#description-extra');
var studyTitleExtra = document.querySelector('#study-title-extra'); //ritona al cv
var instituteNameExtra = document.querySelector('#school-extra'); //ritorna al cv
var studyStartingDateExtra = document.querySelector('#start-study-date-extra');  //parrafo donde va escrita la fecha de inicio de estudios
var studyEndingDateExtra = document.querySelector('#end-study-date-extra');  //parrafo donde va escrita la fecha de fin de estudios
var studyDescriptionExtra = document.querySelector('#study-description-extra');



//Evento para añadir o quitar en formulario el estudio Extra
var extraStudy = document.querySelector ('.estudio-extra'); //div con la cosas que tienen que aparecer/desaparecer
var extraStudyCV = document.querySelector ('.estudio-extra-cv');
var masButtonStudy = document.querySelector('#paragraph-button-study');
masButtonStudy.addEventListener('click', toAddStudy);

function toAddStudy () {
  extraStudy.classList.toggle('hidden');
  extraStudyCV.classList.toggle('hidden');
    if(extraStudy.classList.contains('hidden')){
      masButtonStudy.innerHTML = 'Añadir nuevo estudio';
    } else {
      masButtonStudy.innerHTML = 'Borrar nuevo estudio';

      studyTitleExtra.innerHTML = '';
      instituteNameExtra.innerHTML = '';
      studyDescriptionExtra.innerHTML = '';
      userInputStudy[4].value = '';
       userInputStudy[5].value = '';
       userInputStudy[6].value = '';
      userInputStudy[7].value = '';
      //studyDescriptionExtra.innerHTML = descriptionExtra.value;
       description[1].value = ''
      select3.selectedIndex = meses[0];
      select4.selectedIndex = meses[0];
      selectYears3.selectedIndex = startingYear;
      selectYears4.selectedIndex = startingYear;
    }
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
      studyStartingDateExtra.innerHTML = meses[mesesSelect[2].selectedIndex] + ' ' + (añosSelect[2].selectedIndex + startingYear) + ' - ';
      studyEndingDateExtra.innerHTML = meses[mesesSelect[3].selectedIndex] + ' ' + (añosSelect[3].selectedIndex + startingYear);
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



  //EXPERIENCIA LABORAL EXTRA

  var userInputWorkExtra = document.querySelectorAll('.experiencia-laboral input');
  var workDatesExtra = document.querySelectorAll('.experiencia-laboral select');
  //var descriptionExtra = document.querySelector('#description-extra');
  var workTypeExtra = document.querySelector('#work-type-CV-extra'); //ritona al cv
  var companyNameExtra = document.querySelector('#company-name-CV-extra'); //ritorna al cv
  var workStartingDateExtra = document.querySelector('#start-work-date-extra');  //parrafo donde va escrita la fecha de inicio de estudios
  var workEndingDateExtra = document.querySelector('#end-work-date-extra');  //parrafo donde va escrita la fecha de fin de estudios
  var workDescriptionExtra = document.querySelector('#work-description-extra');



  //Evento para añadir o quitar en formulario el estudio Extra
  var extraWork = document.querySelector ('.work-extra'); //div con la cosas que tienen que aparecer/desaparecer
  var extraWorkCV = document.querySelector ('.work-extra-cv');
  var masButtonWork = document.querySelector('#paragraph-button-work');
  masButtonWork.addEventListener('click', toAddWork);

  function toAddWork () {
    extraWork.classList.toggle('hidden');
    extraWorkCV.classList.toggle('hidden');
      if(extraWork.classList.contains('hidden')){
        masButtonWork.innerHTML = 'Añadir nueva experiencia laboral';
      } else {
        masButtonWork.innerHTML = 'Borrar nueva experiencia laboral';

        workTypeExtra.innerHTML = '';
        companyNameExtra.innerHTML = '';
        workDescriptionExtra.innerHTML ='';
          workStartingDateExtra.innerHTML = '';
          workEndingDateExtra.innerHTML = '';
          userInputWork[4].value = '';
          userInputWork[5].value = '';
          userInputWork[6].value = '';
          userInputWork[7].value = '';
          select7.selectedIndex = meses[0];
          select8.selectedIndex = meses[0];
          descriptionWork[1].value = '';
          selectYears7.selectedIndex = startingYear;
          selectYears8.selectedIndex = startingYear;
      }
      }


  //Evento per inviare al CV
  var button3 = document.querySelector('#button3');
  button3.addEventListener('click',showIntoCV3);

  function showIntoCV3() {
    workType.innerHTML = userInputWork[0].value;
    companyName.innerHTML = userInputWork[1].value + ', ' + userInputWork[2].value + ' (' + userInputWork[3].value + ')';
    workDescription.innerHTML = descriptionWork[0].value;
      workStartingDate.innerHTML = meses[mesesSelect[4].selectedIndex] + ' ' + (añosSelect[4].selectedIndex + startingYear) + ' - ';
      workEndingDate.innerHTML = meses[mesesSelect[5].selectedIndex] + ' ' + (añosSelect[5].selectedIndex + startingYear); //en mesesSelect esta el array. con mesesSelect.selectedIntex yo voy a determinar el elemento a traves de su numero de order en array

      workTypeExtra.innerHTML = userInputWork[4].value;
      companyNameExtra.innerHTML = userInputWork[5].value + ', ' + userInputWork[6].value + ' (' + userInputWork[7].value + ')';
      workDescriptionExtra.innerHTML = descriptionWork[1].value;
        workStartingDateExtra.innerHTML = meses[mesesSelect[6].selectedIndex] + ' ' + (añosSelect[6].selectedIndex + startingYear) + ' - ';
        workEndingDateExtra.innerHTML = meses[mesesSelect[7].selectedIndex] + ' ' + (añosSelect[7].selectedIndex + startingYear);
    }

    //IDIOMAS
    //Primero idioma
var userInputLanguage = document.querySelector('#first-language');
var userInputLanguageLevel = document.querySelector('#nivel-first-language');
var firstLanguageCV = document.querySelector('#primero-idioma-into-CV');
var firstLanguageCVLevel = document.querySelector('#nivel-primero-idioma-into-CV');

//idioma extra1
var userInputLanguageExtra1 = document.querySelector('#extra1-language');
var userInputLanguageExtra1Level = document.querySelector('#nivel-extra1-language');
var extra1LanguageCV = document.querySelector('#idioma-extra1-into-CV');
var extra1LanguageCVLevel = document.querySelector('#nivel-idioma-extra1-into-CV');

//idioma extra2
var userInputLanguageExtra2 = document.querySelector('#extra2-language');
var userInputLanguageExtra2Level = document.querySelector('#nivel-extra2-language');
var extra2LanguageCV = document.querySelector('#idioma-extra2-into-CV');
var extra2LanguageCVLevel = document.querySelector('#nivel-idioma-extra2-into-CV');

//idioma extra3
var userInputLanguageExtra3 = document.querySelector('#extra3-language');
var userInputLanguageExtra3Level = document.querySelector('#nivel-extra3-language');
var extra3LanguageCV = document.querySelector('#idioma-extra3-into-CV');
var extra3LanguageCVLevel = document.querySelector('#nivel-idioma-extra3-into-CV');



//Evento para añadir el idioma a el CV
var button4 = document.querySelector('#button4');
button4.addEventListener('click',showIntoCV4);

function showIntoCV4() {
  firstLanguageCV.innerHTML = userInputLanguage.value;
  firstLanguageCVLevel.innerHTML = userInputLanguageLevel.options[userInputLanguageLevel.selectedIndex].text; //desde Internet

  extra1LanguageCV.innerHTML = userInputLanguageExtra1.value;
  extra1LanguageCVLevel.innerHTML = userInputLanguageExtra1Level.options[userInputLanguageExtra1Level.selectedIndex].text;  //desde Internet

  extra2LanguageCV.innerHTML = userInputLanguageExtra2.value;
  extra2LanguageCVLevel.innerHTML = userInputLanguageExtra2Level.options[userInputLanguageExtra2Level.selectedIndex].text;  //desde Internet

  extra3LanguageCV.innerHTML = userInputLanguageExtra3.value;
  extra3LanguageCVLevel.innerHTML = userInputLanguageExtra3Level.options[userInputLanguageExtra3Level.selectedIndex].text;  //desde Internet
}


//SKILLS
//skill 1
var userInputSkill1 = document.querySelector('#skill1');
var userInputSkill1Level = document.querySelector('#nivel-skill1');
var Skill1CV = document.querySelector('#skill1-cv');
var Skill1CVLevel = document.querySelector('#skill1-level-cv');

//skill 2
var userInputSkill2 = document.querySelector('#skill2');
var userInputSkill2Level = document.querySelector('#nivel-skill2');
var Skill2CV = document.querySelector('#skill2-cv');
var Skill2CVLevel = document.querySelector('#skill2-level-cv');

//skill 3
var userInputSkill3 = document.querySelector('#skill3');
var userInputSkill3Level = document.querySelector('#nivel-skill3');
var Skill3CV = document.querySelector('#skill3-cv');
var Skill3CVLevel = document.querySelector('#skill3-level-cv');

//skill 4
var userInputSkill4 = document.querySelector('#skill4');
var userInputSkill4Level = document.querySelector('#nivel-skill4');
var Skill4CV = document.querySelector('#skill4-cv');
var Skill4CVLevel = document.querySelector('#skill4-level-cv');

var button5 = document.querySelector('#button5');
button5.addEventListener('click',showIntoCV5);

function showIntoCV5() {
  Skill1CV.innerHTML = userInputSkill1.value;
  Skill1CVLevel.innerHTML = userInputSkill1Level.options[userInputSkill1Level.selectedIndex].text;  //desde Internet

  Skill2CV.innerHTML = userInputSkill2.value;
  Skill2CVLevel.innerHTML = userInputSkill2Level.options[userInputSkill2Level.selectedIndex].text;  //desde Internet

  Skill3CV.innerHTML = userInputSkill3.value;
  Skill3CVLevel.innerHTML = userInputSkill3Level.options[userInputSkill3Level.selectedIndex].text;  //desde Internet

  Skill4CV.innerHTML = userInputSkill4.value;
  Skill4CVLevel.innerHTML = userInputSkill4Level.options[userInputSkill4Level.selectedIndex].text;  //desde Internet
}

//ACCORDIONES
var accordion = document.querySelectorAll('.accordion');
var accordionButton = document.querySelectorAll('#button-accordion');

function showPersonalData(){
  accordion[0].classList.toggle('hidden');
  if(accordion[0].classList.contains('hidden')){
    accordionButton[0].innerHTML = 'Más +';
  } else{
    accordionButton[0].innerHTML = 'Menos -';
  }
}

function showStudyData(){
  accordion[1].classList.toggle('hidden');
  if(accordion[1].classList.contains('hidden')){
    accordionButton[1].innerHTML = 'Más +';
  } else{
    accordionButton[1].innerHTML = 'Menos -';
  }
}

function showWorkData(){
  accordion[2].classList.toggle('hidden');
  if(accordion[2].classList.contains('hidden')){
    accordionButton[2].innerHTML = 'Más +';
  } else{
    accordionButton[2].innerHTML = 'Menos -';
  }
}

function showLanguages(){
  accordion[3].classList.toggle('hidden');
  if(accordion[3].classList.contains('hidden')){
    accordionButton[3].innerHTML = 'Más +';
  } else{
    accordionButton[3].innerHTML = 'Menos -';
  }
}

function showSkills(){
  accordion[4].classList.toggle('hidden');
  if(accordion[4].classList.contains('hidden')){
    accordionButton[4].innerHTML = 'Más +';
  } else{
    accordionButton[4].innerHTML = 'Menos -';
  }
}

accordionButton[0].addEventListener('click',showPersonalData);
accordionButton[1].addEventListener('click',showStudyData);
accordionButton[2].addEventListener('click',showWorkData);
accordionButton[3].addEventListener('click',showLanguages);
accordionButton[4].addEventListener('click',showSkills);


//Notas:
// 1. poner en dataSOcial0-2 los iconos de los social;
//2. poner obligatorios todos los campos
//3. Hobby? Iconos o parrafos?
