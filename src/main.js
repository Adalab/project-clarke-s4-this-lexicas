function legacyCode() {


  //Variables fechas - meses
  var mesesSelect = document.querySelectorAll('.months');
  var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  var optionsMeses = "";

  for (var j = 0; j < meses.length; j++) {
    optionsMeses = optionsMeses + '<option>' + meses[j] + '\n' + '</option>';
  }
  for(var j = 0 ; j < mesesSelect.length ; j++) {
    mesesSelect[j].innerHTML = optionsMeses;
  }


  //Variables fechas - años
  var añosSelect = document.querySelectorAll('.years');
  var endingYear = 2018;
  var startingYear = 1950;
  var optionsYears = "";
  for(var j = startingYear; j<=endingYear; j++){
    optionsYears = optionsYears + "<option>"+ j +"</option>";
  }
  añosSelect.innerHTML = optionsYears;
  for(var j = 0 ; j < añosSelect.length ; j++) {
    añosSelect[j].innerHTML = optionsYears;
  }

}


export default legacyCode;
