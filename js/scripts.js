(function($){


   'use strict';


   var winW;
   var winH;
   var $head = $('.chimp__head');
   var $headCenterX;
   var $headCenterY;

   function elSize() {
      winW = $(window).width();
      winH = $(window).height();
      $headCenterX = $head.offset().left + 83;
      $headCenterY = $head.offset().top + 72;
   }
   elSize();

   $(window).on('resize', function() {
      elSize();
   });


   //------------------------------------------------------------------------
   //  $Kong
   //------------------------------------------------------------------------


   $('html').mousemove(function(e) {
      var x = e.pageX;
      var y = e.pageY;
      var xFactor = ((x / $headCenterX) - 1).toFixed(2);
      var yFactor = ((y / $headCenterY) - 1).toFixed(2);

      if (xFactor < 0) {
         yFactor = yFactor * -1;
      }

      $head.css('transform', 'rotate(' + (yFactor * 70) + 'deg)');
   });


   //------------------------------------------------------------------------
   //  $Utility functions
   //------------------------------------------------------------------------


   function debounce(func, wait, immediate) {
      var timeout;
      return function() {
         var context = this, args = arguments;
         var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
         };
         var callNow = immediate && !timeout;
         clearTimeout(timeout);
         timeout = setTimeout(later, wait);
         if (callNow) func.apply(context, args);
      };
   }

})(jQuery);