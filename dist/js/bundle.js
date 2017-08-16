(function($) {
  'use strict';
	  // $('.apply-job').click(function(e){
	  // 	e.preventDefault();
	  //   $('.set-bg,.apply-form,.cont-form').show();
	  // });
	  // $('.apply-form,.cont-form').find('.close').click(function(){
	  //   $('.set-bg,.apply-form,.cont-form').hide();
	  // });
	var defaults = {

		click_item: null,
		background_item: null,
	} 
  	$.fn.the_popup = function(options){
  		var settings = $.extend({},defaults,options);
		// Declare button click, the menu and div container menu
		var me = $(this),
			meClose = me.find('.close');
		// Create action toggle click to moving menu from ltr
		settings.click_item.click(function(e){
			e.preventDefault();
			me.addClass('active');
			settings.background_item.addClass('active');
			$(document).one('click',function closePopup(e){
				var target = $( e.target );
				if(me.has(e.target).length === 0 && settings.click_item.has(e.target).length === 0){
		            me.removeClass('active');
		            settings.background_item.removeClass('active');
			    }
			   	else {
		            $(document).one('click', closePopup);
		        }
			});
			meClose.click(function(){
				me.removeClass('active');
		        settings.background_item.removeClass('active');
			})
			
		});
	};
})(jQuery);
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
(function($) {
  'use strict';
	$.fn.vertScrl = function(){
		var me = $(this)
		$(window).scroll(function(){
			if($(window).scrollTop() > 0){
				me.addClass('transition-effect').addClass('set-bg-white1');
			}
			else{
				me.addClass('transition-effect').removeClass('set-bg-white1');
			}
		});
	};
	$.fn.menuLeftScroll = function(){
		$(window).scroll(function(){	
			if($(window).scrollTop() > $(window).height()){
				$('body .menu-btn').find('span.menu-symb').removeClass('hide-element');
				$('body .menu-btn').find('span.welc-symb').addClass('hide-element');
			}
			else{
				$('body .menu-btn').find('span.welc-symb').removeClass('hide-element');
				$('body .menu-btn').find('span.menu-symb').addClass('hide-element');
			}
		});
	};
	$.fn.mainNav = function(){

		var me = $(this);
		var numItem = $('section',me);
		$('.main-nav ul li:first-child').addClass('active');
		$(window).scroll(function(){
			if($(window).scrollTop() == 0){
				$('.main-nav ul li').removeClass('active');
				$('.main-nav ul li:first-child').addClass('active');
			}	
			if($(window).scrollTop() > $('section:nth-child(1)',me).offset().top){	
				$('.main-nav ul li').removeClass('active');
				$('.main-nav ul li:nth-child(2)').addClass('active');
			}
			if($(window).scrollTop() > $('section:nth-child(2)',me).offset().top){	
				$('.main-nav ul li').removeClass('active');
				$('.main-nav ul li:nth-child(3)').addClass('active');
			}
			if($(window).scrollTop() > $('section:nth-child(3)',me).offset().top){	
				$('.main-nav ul li').removeClass('active');
				$('.main-nav ul li:nth-child(4)').addClass('active');
			}
			if($(window).scrollTop() > $('section:nth-child(4)',me).offset().top){	
				$('.main-nav ul li').removeClass('active');
				$('.main-nav ul li:nth-child(5)').addClass('active');
			}
		});
	}

	$.fn.logoScroll = function(){
		var me = $(this);
		$(window).scroll(function(){
			if($(window).scrollTop() > 0){
				me.addClass('transition-effect');
				me.removeClass('defa-logo');
				me.addClass('transition-effect').addClass('mini-logo');
				if($(window).width() > 1024){
					$('body .menu-btn').height('67px');
				}
			}
			else{
				me.removeClass('set-bg-dark');
				me.removeClass('mini-logo');
				me.addClass('transition-effect').addClass('defa-logo');
				if($(window).width() > 1024){
					$('body .menu-btn').height('78px');
				}
			}
		});
	}
})(jQuery);
$(window).ready(function(){
	$('.hero-area').amc_get_img();
	$('.cont-form').the_popup({
		click_item: $('.apply-job'),
		background_item: $('.set-bg')
	})
});
(function($){
	'use strict';
	// For each of page
	$('.setHeight-head .minimize').logoScroll();
	$('.top-head').vertScrl();

	var widt = $(window).width();
	$('.close-btn.close').click(function(e){
		e.preventDefault();
		$('.cont-form,.set-bg').fadeOut().removeClass('here');
	});
	$('.cont-form-btn').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		if(!$('.cont-form').hasClass('here')){
			$('.cont-form,.set-bg').fadeIn().addClass('here');
			if(widt > 0){
				if(widt > 1024){
					$(document).one('click',function closeForm (e){
						if($('.cont-form').has(e.target).length === 0){
				            $('.cont-form,.set-bg').fadeOut().removeClass('here');
				        } else {
				            $(document).one('click', closeForm);
				        }
					});
				}
			}
		}
	});
	var sizeContactForm = function(){
		var setHeight = $(window).height()*80/100;
		var setTop = $('header').height();
		$('.nav-wrapper').height($(window).height());
		$('.cont-form-btn').on('click',function(){
			if(!$('.cont-form').hasClass('hide-element')){
				var compHeigWind = $(window).height();
				var compHeigAppl = $('.cont-form').height();
				if(compHeigWind < compHeigAppl == true){
					$('.cont-form').height($(window).height());
					$('.cont-form').css({'overflow-y':'scroll'});
				}
			}
		});
	};
	sizeContactForm();
})(jQuery);