(function() {
  'use strict';
  angular
    .module('antiloopTest')
    .controller('NavigationBarCtrl', NavigationBarCtrl);

  NavigationBarCtrl.$inject = [];

  /* @ngInject */
  function NavigationBarCtrl() {
    var vm = this;
    vm.title = 'Controller';
    vm.hidden;
    vm.toggle = toggle;

    activate();

    ////////////////

    function activate() {
      vm.hidden = true;
    }

    function toggle() {
      vm.hidden = !vm.hidden;
      if (vm.hidden) {
        removeMainLetterFromLinks();
        addScrolling();
      }else {
        removeScrolling();
        addMainLetterToLinks();
      }
    }

    function removeScrolling() {
      var body = document.getElementsByTagName("body")[0];
      body.style.overflow = 'hidden';
    }

    function addScrolling() {
      var body = document.getElementsByTagName("body")[0];
      body.style.overflow = 'initial';
    }

    function getLinks() {
      var nav = document.getElementsByTagName("nav")[0];
      var links = nav.getElementsByTagName("a");
      return links;
    }

    function addMainLetterToLinks() {
      var links = getLinks();
      for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var firstLetter = link.text[0]
        link.insertBefore(mainLetterDiv(firstLetter), link.childNodes[0]);
      }
    }

    function mainLetterDiv(letter) {
      var div = document.createElement("div");
      var text = document.createTextNode(letter);
      div.appendChild(text);
      return div;
    } 

    function removeMainLetterFromLinks() {
      var links = getLinks();
      for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var mainLetter = link.getElementsByTagName('div');
        link.removeChild(mainLetter[0]);
      }   
    }
  }
})();
