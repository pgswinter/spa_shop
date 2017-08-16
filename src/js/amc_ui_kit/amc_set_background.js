(function($) {
  'use strict';

  var defaults = {
    attr_parallax: 'initial',
    attr_pos_x: 'center',
    attr_pos_y: 'center',
    attr_size: 'cover'
  };

  $('.amc-parallax .block').each(function(i){
    var my_img = $(this).find('img');
    var url_my_img = my_img.attr('src');
    if($(window).width()>1024){
      $(this).find('.left').css({"background": "url('"+url_my_img+"')",
      "-o-background-size":"cover",
      "-moz-background-size":"cover",
      "-webkit-background-size":"cover",
      "-ms-background-size":"cover",
      "background-size":"cover",
      "background-repeat":"no-repeat",
      "background-position":"center center",
      "background-attachment":"fixed"
      });
    }
    else{
      $(this).find('.left').css({"background": "url('"+url_my_img+"')",
      "-o-background-size":"cover",
      "-moz-background-size":"cover",
      "-webkit-background-size":"cover",
      "-ms-background-size":"cover",
      "background-size":"cover",
      "background-repeat":"no-repeat",
      "background-position":"center center"
      });
    }
    
  });

  $.fn.setIMG = function(){
    var me = $(this);
    me.find('.block').each(function(i){
      var my_img = $(this).find('img');
      var url_my_img = my_img.attr('src');
      $(this).css({"background-image": "url('" + url_my_img + "')",
      "background-size":"cover",
      "background-repeat":"no-repeat",
      "background-position":"center center"
      });
    });
  };

  $.fn.setAnimateIMG = function(){
    var me = $(this);
    me.find('.block').each(function(i){
      var my_img = $(this).find('img');
      var url_my_img = my_img.attr('src');
      $(this).find('.img-wrap-vert').css({"background-image": "url('" + url_my_img + "')",
      "background-size":"cover",
      "background-repeat":"no-repeat",
      "background-position":"0 0"
      });
    });
  };
  $.fn.parallaxIMG = function(){
    var me = $(this);
    var my_img = me.find('img');
    var url_my_img = my_img.attr('src');
    me.find('.cover-img').css({"background-image": "url('"+url_my_img+"')",
    "background-size":"cover",
    "background-repeat":"no-repeat",
    "background-position":"center 78px",
    "background-attachment":"fixed"
    });
  };
  $.fn.amc_get_img = function(options){
    var me = $(this);
    var settings = $.extend({},defaults,options)
    var applyLoadIMG = function(){
      me.find('.block').each(function(i){
        var my_img = $(this).find('img');
        var url_my_img = my_img.attr('src');
          $(this).css({"background-image": "url('"+url_my_img+"')",
          "background-size":""+settings.attr_size+"",
          "background-repeat":"no-repeat",
          "background-position":""+settings.attr_pos_x+" "+settings.attr_pos_y+"",
          "background-attachment":""+settings.attr_attachment+""
        });
      });
    };
    var init = function(){
      applyLoadIMG();
    }
    init();
    //return {
      // if(me.length > 0){
      //   this.applyLoadIMG = applyLoadIMG();
      // }
    //}
  };
})(jQuery);