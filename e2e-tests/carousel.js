(function(){
  'use strict';

  describe('Carousel', function() {

    it('should display panel image on product hover', function() {
      browser.get('index.html');
      browser.waitForAngular();
      var lastProduct = element.all(by.css('.carousel__product')).last();
      browser.actions()
        .mouseMove(lastProduct)
        .perform();
      var panelImage = element(by.id('carousel__panel-image'));

     expect(panelImage.getAttribute('class')).toBe('animated fadeIn carousel__panel-image--audi-mind-race');
    
    });
  });
})();