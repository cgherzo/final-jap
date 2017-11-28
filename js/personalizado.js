var tabsFn = (function() {
  
  function init() {
    setHeight();
  }
  
  function setHeight() {
    var $tabPane = $('.tab-pane'),
        tabsHeight = $('.nav-tabs').height();
    
    $tabPane.css({
      height: tabsHeight
    });
  }
    
  $(init);
})();

var services         = [];
var personalizadoSvc = new personalizadoService();

// carga inicial de datos
personalizadoSvc.getServices().then(function (res) {
  services = res.data;
  showServices(services);
});

function getServices(serviceName) {
  return services.find(function (service) {
    return serviceName.toLowerCase() == serviceName.toLowerCase();
  });
}

function showServices(service){
  var services       = document.getElementById("services");
  var htmlService    = service.personalizado;
  var htmlListLength = Object.keys(htmlService).length;

  //Para menu
  var ulServices       = document.createElement('ul');
  ulServices.className = "nav nav-tabs";

  //Para contenido de li
  var divContentServices       = document.createElement('div');
  divContentServices.className = "tab-content";

  var i = 0;
  Object.keys(htmlService).forEach(function(key) {
    var idTab       = htmlService[key].idTab;
    var icon        = htmlService[key].icon;
    var title       = htmlService[key].title;
    var persImg     = htmlService[key].persImg;
    var description = htmlService[key].description;

      //Empiezo a construir menu vertical
      //Si es el primero le agrego activo para que quede por defecto
      var serviceItem = document.createElement('li');
      if(i == 0){
        serviceItem.className = 'active';
      }

      //Crea el LINK
      var serviceItemLink = document.createElement('a');
      serviceItemLink.setAttribute('href', '#'+idTab);
      serviceItemLink.setAttribute('data-toggle', 'tab');
      serviceItemLink.setAttribute('aria-expanded', 'true');
      serviceItem.appendChild(serviceItemLink);

      //Crea el Icono
      var serviceItemIcon = document.createElement('i');
      serviceItemIcon.setAttribute('class', 'fa '+icon);
      serviceItemIcon.setAttribute('aria-expanded', 'true');
      serviceItemLink.appendChild(serviceItemIcon);

      //Crea el Label
      var serviceItemLabel = document.createElement('label');
      serviceItemLabel.textContent = title;
      serviceItemLabel.setAttribute('class', 'tab-description');
      serviceItemLink.appendChild(serviceItemLabel);

      //Agrego li (item) a ul (lista)
      ulServices.appendChild(serviceItem);
      //FIN menu vertical
      
      //Empiezo el contenido de cada item
      var serviceItemContent = document.createElement('div');
      if(i == 0){
        serviceItemContent.className = 'active ';
      }
      serviceItemContent.className += 'tab-pane';
      serviceItemContent.id = idTab;
      

      var serviceItemContentTitle = document.createElement('h3');
      serviceItemContentTitle.textContent = title;
      serviceItemContent.appendChild(serviceItemContentTitle);

      var serviceItemContentImg = document.createElement('img');
      serviceItemContentImg.setAttribute('src', persImg);
      serviceItemContent.appendChild(serviceItemContentImg);

      var serviceItemContentDescription = document.createElement('p');
      serviceItemContentDescription.textContent = description;
      serviceItemContent.appendChild(serviceItemContentDescription);
      divContentServices.appendChild(serviceItemContent);
      //FIN content vertical

      //Incremento para saber cual es el primero
      i++;
    });

  services.appendChild(ulServices);
  services.appendChild(divContentServices);
}


