(function($) {
  'use strict';
  $('.amc-parallax .block:first-child .half-lay.left').append("<div class='scro-down floating for-desk'></div> ");
  $(window).on('scroll',function(){

    // Determine postion when scroll window
    var page_top = $(window).scrollTop(),
        page_range = page_top + 600;

    // Determine position of .amc-parallax
    if($('.amc-parallax').length > 0){
      var item = $('.amc-parallax'),
          item_top = item.offset().top,
          item_bottom = item_top + item.height();

      // Detect position .amc-parallax
      if(page_top >= item_top && page_range <= item_bottom){

        //  Determine postion each of right layout in .block class
        var number_item = item.find('.block').length;
        for(var i=1; i<=number_item; i++){
          var sub_item = $('.amc-parallax .block:nth-child('+i+') .right'),
              sub_item_top = sub_item.offset().top,
              sub_item_bottom = sub_item_top + 500;

          // Detect position each sub_item
          if(page_range >= sub_item_top && page_top <= sub_item_bottom){
            sub_item.find('article').css({
              'top':'50%',
              'opacity':'1',
              'transition': 'all 1000ms ease',
              '-webkit-transition': 'all 1000ms ease',
              '-moz-transition': 'all 1000ms ease',
            });
            // Return to comfirm/make sure current .sub_item IS ACTIVE. This thing required.
            return true;
          }
          else{
            // Outside .right layout
          }
        }
      }
      else{
        // Outside amc_parallax
      }
    }
  }) 

  // Fix bug Safari
  var ua = navigator.userAgent.toLowerCase(); 
  if (ua.indexOf('safari') != -1) { 
    if (ua.indexOf('chrome') > -1) {
      
    } else {
      $('.amc-parallax .block .half-lay.left').height($(window).height()/2);
      $('.amc-parallax .block:first-child .half-lay.left').height($(window).height());
    }
  }
})(jQuery);