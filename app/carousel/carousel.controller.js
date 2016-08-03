(function() {
  'use strict';

  angular
    .module('myApp')
    .controller('CarouselCtrl', CarouselCtrl);

  CarouselCtrl.$inject = ['$interval', '$q']

    function CarouselCtrl($interval, $q) {
      var vm = this;
      vm.products = [
        {
          squareImgUrl:'assets/images/squares/holograms-square.jpg',
          id: 'hologram',
          title: 'item title 1',
          subtitle: 'item subtitle 1',
          author: 'author'
        },
        {
          squareImgUrl:'assets/images/squares/toyota-vr-square.jpg',
          id: 'toyota-vr',
          title: 'item title 2',
          subtitle: 'item subtitle 2',
          author: 'author'
        },
        {
          squareImgUrl:'assets/images/squares/human-beats-square.jpg',
          id: 'human-beats',
          title: 'item title 3',
          subtitle: 'item subtitle 3',
          author: 'author'
        },
        {
          squareImgUrl:'assets/images/squares/audi-mind-race-square.jpg',
          id: 'audi-mind-race',
          title: 'item title 4',
          subtitle: 'item subtitle 4',
          author: 'author'
        },
      ];
      vm.currentProduct;
      var carouselInterval;
      vm.startCarousel = startCarousel;
      vm.pauseCarousel = pauseCarousel;
      vm.showProduct = showProduct;

      init();

      function init() {
        vm.currentProduct = vm.products[0];
        startCarousel();
      }

      function startCarousel() {
        carouselInterval = $interval(function() {
          showProduct(nextProduct());
        }, 4000)
      }

      function pauseCarousel() {
        $interval.cancel(carouselInterval);
      }

      function nextProduct() {
        var indexOfCurrentProduct = vm.products.indexOf(vm.currentProduct);
        if(indexOfCurrentProduct >= 0 && indexOfCurrentProduct < vm.products.length - 1) {
          return vm.products[indexOfCurrentProduct + 1];
        }else {
          return vm.products[0];
        }
      }

      function showProduct(product) {
        vm.currentProduct = product;
        moveMarkerToCurrentProduct();
      }

      function moveMarkerToCurrentProduct() {
        var marker = document.getElementById("carousel__marker");
        var markerPosition = vm.products.indexOf(vm.currentProduct) * 100;
        marker.style.transform = `translate(${markerPosition}%)`;
      }

    }

})()