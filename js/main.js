'use strict';

//Datos personales
var userInputPersonales1 = document.querySelectorAll('.datos-personales input'); //formulario
var dataCV1 = document.querySelectorAll('#CV1'); //CV, nombre y profesion
var dataCV0 = document.querySelectorAll('#CV0'); //CV, nombre y profesion in movil
var dataFecha = document.querySelector('#fecha-nacimiento');  //CV, fecha de nacimiento
var dataCV2 = document.querySelectorAll('#CV2');
var dataSocial = document.querySelectorAll('#social-enlace');
var descriptionPersonal = document.querySelector('#description-personal');
var descriptionPersonalCV = document.querySelector('#description-personal-cv');

function showIntoCV1() {
  dataCV1[0].innerHTML = userInputPersonales1[0].value;
  dataCV1[1].innerHTML = userInputPersonales1[1].value;
  dataCV0[0].innerHTML = userInputPersonales1[0].value;
  dataCV0[1].innerHTML = userInputPersonales1[1].value;
  dataFecha.innerHTML = userInputPersonales1[2].value;
  dataCV2[0].innerHTML = userInputPersonales1[3].value;
  dataCV2[1].innerHTML = userInputPersonales1[4].value;
  dataCV2[2].innerHTML = userInputPersonales1[5].value + ' ' + userInputPersonales1[6].value + ', ' + userInputPersonales1[7].value;
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
//Accordion 1
var accordionNum1 = document.querySelector ('.accordion1'); //div con la cosas que tienen que aparecer/desaparecer
var accordionNum1Button = document.querySelector('#button-accordion1');
accordionNum1Button.addEventListener('click', showPersonalData);

function showPersonalData () {
  accordionNum1.classList.toggle('hidden');
    if(accordionNum1.classList.contains('hidden')){
      accordionNum1Button.innerHTML = 'Más +';
    } else {
      accordionNum1Button.innerHTML = 'Menos -';
    }
  }

  //Accordion 2
  var accordionNum2 = document.querySelector ('.accordion2'); //div con la cosas que tienen que aparecer/desaparecer
  var accordionNum2Button = document.querySelector('#button-accordion2');
  accordionNum2Button.addEventListener('click', showStudyData);

  function showStudyData () {
    accordionNum2.classList.toggle('hidden');
      if(accordionNum2.classList.contains('hidden')){
        accordionNum2Button.innerHTML = 'Más +';
      } else {
        accordionNum2Button.innerHTML = 'Menos -';
      }
    }

    //Accordion 3
    var accordionNum3 = document.querySelector ('.accordion3'); //div con la cosas que tienen que aparecer/desaparecer
    var accordionNum3Button = document.querySelector('#button-accordion3');
    accordionNum3Button.addEventListener('click', showWorkData);

    function showWorkData () {
      accordionNum3.classList.toggle('hidden');
        if(accordionNum3.classList.contains('hidden')){
          accordionNum3Button.innerHTML = 'Más +';
        } else {
          accordionNum3Button.innerHTML = 'Menos -';
        }
      }

      //Accordion 4
      var accordionNum4 = document.querySelector ('.accordion4'); //div con la cosas que tienen que aparecer/desaparecer
      var accordionNum4Button = document.querySelector('#button-accordion4');
      accordionNum4Button.addEventListener('click', showIdiomaData);

      function showIdiomaData() {
        accordionNum4.classList.toggle('hidden');
          if(accordionNum4.classList.contains('hidden')){
            accordionNum4Button.innerHTML = 'Más +';
          } else {
            accordionNum4Button.innerHTML = 'Menos -';
          }
        }

        //Accordion 5
        var accordionNum5 = document.querySelector ('.accordion5'); //div con la cosas que tienen que aparecer/desaparecer
        var accordionNum5Button = document.querySelector('#button-accordion5');
        accordionNum5Button.addEventListener('click', showSkillsData);

        function showSkillsData() {
          accordionNum5.classList.toggle('hidden');
            if(accordionNum5.classList.contains('hidden')){
              accordionNum5Button.innerHTML = 'Más +';
            } else {
              accordionNum5Button.innerHTML = 'Menos -';
            }
          }

//Notas:
// 1. poner en dataSOcial0-2 los iconos de los social;
//2. poner obligatorios todos los campos
//3. Hobby? Iconos o parrafos?
