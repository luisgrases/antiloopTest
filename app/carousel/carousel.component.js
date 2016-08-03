(function() {
  "use strict"

  angular
    .module('myApp')
    .component('carousel', {
      templateUrl: 'carousel/carousel.html',
      controller: 'CarouselCtrl',
      controllerAs: 'vm'
    })

})();