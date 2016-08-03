(function() {
  "use strict"

  angular
    .module('antiloopTest')
    .component('carousel', {
      templateUrl: 'carousel/carousel.html',
      controller: 'CarouselCtrl',
      controllerAs: 'vm'
    })

})();