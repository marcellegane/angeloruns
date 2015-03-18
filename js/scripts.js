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

      $head.css({
         '-o-transform': 'rotate(' + (yFactor * 70) + 'deg)',
         '-ms-transform': 'rotate(' + (yFactor * 70) + 'deg)',
         '-moz-transform': 'rotate(' + (yFactor * 70) + 'deg)',
         '-webkit-transform': 'rotate(' + (yFactor * 70) + 'deg)',
         'transform': 'rotate(' + (yFactor * 70) + 'deg)'
      });
   });


   //------------------------------------------------------------------------
   //  $Scroll Down
   //------------------------------------------------------------------------


   $('.scroll').on('click', function() {
      var target = $(this).attr('href');
      var targetOffset = $(target).offset().top;

      $('html, body').animate({
         scrollTop: targetOffset
      });

      return false;
   });

})(jQuery);