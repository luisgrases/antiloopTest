(function() {
  'use strict'

  angular
    .module('myApp')
    .component('navigationBar', {
      templateUrl: 'navigation-bar/navigation-bar.html',
      controller: 'NavigationBarCtrl',
      controllerAs: 'vm'
    });
})();
