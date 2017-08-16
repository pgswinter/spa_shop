(function($) {
  'use strict';
  $.fn.detectScroll = function(){
    var me = $(this);
    var pageTop = $(window).scrollTop() - 200;
    var pageBottom = pageTop + $(window).height();
    var elementTop = me.offset() ? (me.offset().top - 500) : 0;
    var elementBottom = elementTop + me.height();
    if((pageTop >= elementTop) && (pageTop <= elementBottom)){
      return true;
    }
    else{
      return false;
    }
  }
  $('.amc_scrolling_dot .dot-form').each(function(){
    var me = $(this);
    me.find('span').click(function(){
      me.find('.content').slideToggle();
    });
  });
  var lastScrollTop = 0;
  $(window).on('scroll load',function(){
    var currentScrollTop = $(this).scrollTop();
    $('.amc_scrolling_dot .dot-form').each(function(){

      var itemNumber = $(this).find('.dot-line').find('.dot');

      if($(this).detectScroll() == true){

        if(currentScrollTop > lastScrollTop){
          // itemNumber.addClass('blind_dot1')
          itemNumber.css({'background-color':'#f09427'});
        }
        else{
          // itemNumber.removeClass('blind_dot1')
          itemNumber.css({'background-color':'#e2e2e2'});
        }
      }
    });
    lastScrollTop = currentScrollTop;
  })
})(jQuery);