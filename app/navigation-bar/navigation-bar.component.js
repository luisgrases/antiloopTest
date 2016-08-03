(function() {
  'use strict'

  angular
    .module('antiloopTest')
    .component('navigationBar', {
      templateUrl: 'navigation-bar/navigation-bar.html',
      controller: 'NavigationBarCtrl',
      controllerAs: 'vm'
    });
})();
