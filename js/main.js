'use strict';

window.utils = (function () {

  var topMenuToggle = document.querySelector('.top-menu__toggle');
  var mainNav = topMenuToggle.parentNode.querySelectorAll('.main-nav');
  var modalWindow = document.querySelector('.modal-window');
  var order = document.querySelectorAll('.btn_product, .product__add');

  for (var i = 0; i < mainNav.length; i++) {
    mainNav[i].classList.remove('main-nav_nojs');
  }

  topMenuToggle.addEventListener('click', function() {
    for (var i = 0; i < mainNav.length; i++) {
      mainNav[i].classList.toggle('main-nav_show');
    }
    topMenuToggle.classList.toggle('top-menu__toggle_close');
  });


  for (var i = 0; i < order.length; i++) {
    order[i].addEventListener('click', function(event) {
      event.preventDefault();
      modalWindow.classList.add('modal-window_show');
    });
  }

  window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
      if (modalWindow.classList.contains('modal-window_show')) {
        modalWindow.classList.remove('modal-window_show');
      }
    }
  });

})();

'use strict';

ymaps.ready(function() {
  var myMap = new ymaps.Map('map-canvas', {
    center: [59.935955, 30.321965],
    zoom: 16
  }, {
    searchControlProvider: 'yandex#search'
  }),
  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'Собственный значок метки',
    balloonContent: 'HTML Academy'
  }, {
    iconImageHref: 'img/icon-map-pin.svg',
    iconImageSize: [78, 138],
    iconImageOffset: [-45, -137]
  });

  myMap.geoObjects.add(myPlacemark);
});
