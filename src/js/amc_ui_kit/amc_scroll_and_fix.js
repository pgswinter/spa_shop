(function($) {
  'use strict';
  $.fn.scrollandfix = function(){
    var me = $(this);
    $(window).on('scroll',function(){
      var pageTop = $(window).scrollTop();
      var pageBot = pageTop + $(window).height();
      var elementTop = me.offset() ? (me.offset().top) : 0;
      var elementBot = elementTop + me.height();
      if(pageBot >= elementTop){
        $('.scroll-fixed').css({'display':'block'});
      }
      else{
        $('.scroll-fixed').css({'display':'none'});
      }
    })
  } 
})(jQuery);