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


var fleet = [];
var flotaSvc = new fleets();

// carga inicial de datos
flotaSvc.getFleet().then(function (res) {
  fleets = res.data;
  showFleet(fleets);
});

function getFleet(fleetName) {
  return fleets.find(function (fleet) {
    return fleetName.toLowerCase() == fleetName.toLowerCase();
  });
}

function showFleet(fleet){

  var fleets = document.getElementById("fleet");
  var htmlFleet = fleet;
  var htmlListLength = Object.keys(htmlFleet).length;

  //Para menu
  var ulFleet = document.createElement('ul');
  ulFleet.className = "nav nav-tabs";

  //Para contenido de li
  var fleetItemWrapper = document.createElement('div');
  fleetItemWrapper.className = "tab-content";

  var i = 0;
  Object.keys(htmlFleet).forEach(function(key) {
    var idTab       = htmlFleet[key].idTab;
    var icon        = htmlFleet[key].icon;
    var title       = htmlFleet[key].title;
    var fleetImg    = htmlFleet[key].fleetImg;
    var fleetModel  = htmlFleet[key].fleetModel
    var fleetInc    = htmlFleet[key].fleetInc;

      //Empiezo a construir menu vertical
      //Si es el primero le agrego activo para que quede por defecto
      var fleetItem = document.createElement('li');
      if(i == 0){
        fleetItem.className = 'active';
      }

      //Crea el LINK
      var fleetItemLink = document.createElement('a');
      fleetItemLink.setAttribute('href', '#'+idTab);
      fleetItemLink.setAttribute('data-toggle', 'tab');
      fleetItemLink.setAttribute('aria-expanded', 'true');
      fleetItem.appendChild(fleetItemLink);

      //Crea el Icono
      var fleetItemIcon = document.createElement('i');
      fleetItemIcon.setAttribute('class', 'fa '+icon);
      fleetItemIcon.setAttribute('aria-expanded', 'true');
      fleetItemLink.appendChild(fleetItemIcon);

      //Crea el Label
      var fleetItemLabel = document.createElement('label');
      fleetItemLabel.textContent = title;
      fleetItemLabel.setAttribute('class', 'tab-description');
      fleetItemLink.appendChild(fleetItemLabel);

      //Agrego li (item) a ul (lista)
      ulFleet.appendChild(fleetItem);
      //FIN menu vertical
      
      //Empiezo el contenido de cada item
      var fleetItemContent = document.createElement('div');
      if(i == 0){
        fleetItemContent.className = 'active ';
      }
      fleetItemContent.className += 'tab-pane';
      fleetItemContent.id = idTab;
      
      var fleetItemContentTitle = document.createElement('h3');
      fleetItemContentTitle.textContent = title;
      fleetItemContent.appendChild(fleetItemContentTitle);

      var fleetItemContentImg = document.createElement('img');
      fleetItemContentImg.setAttribute('src', fleetImg);
      fleetItemContent.appendChild(fleetItemContentImg);

      var fleetItemContentInfo = document.createElement('dl');
      fleetItemContent.appendChild(fleetItemContentInfo);

      var fleetItemModelTitle = document.createElement('dt');
      fleetItemModelTitle.textContent = 'Modelo:';
      fleetItemContentInfo.appendChild(fleetItemModelTitle);

      var fleetItemModel = document.createElement('dd');
      fleetItemModel.textContent = fleetModel;
      fleetItemContentInfo.appendChild(fleetItemModel);

      var fleetItemIncludeTitle = document.createElement('dt');
      fleetItemIncludeTitle.textContent = 'Incluye:';
      fleetItemContentInfo.appendChild(fleetItemIncludeTitle);

      var fleetItemInclude = document.createElement('dd');
      fleetItemInclude.textContent = fleetInc;
      fleetItemContentInfo.appendChild(fleetItemInclude);

      fleetItemWrapper.appendChild(fleetItemContent);
      //FIN content vertical

      //Incremento para saber cual es el primero
      i++;
    });

  fleets.appendChild(ulFleet);
  fleets.appendChild(fleetItemWrapper);
}


