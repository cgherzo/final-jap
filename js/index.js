// JQuery de datetimepicker
 $(function () {
  $('#datetimepicker1').datetimepicker();
 });

// Servicio Seleccionado - Form Solicitar Servicio
 function selectService(selectedValue){
  var e = document.getElementById("serviceSelected");

  if(selectedValue != 0 )
    e.value = selectedValue;
 };

