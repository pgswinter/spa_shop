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