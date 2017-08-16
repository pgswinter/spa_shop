(function($){
	'use strict';
	$.fn.amaSector = function(){
		var me = $(this);
		$(window).on('resize load',function(){
			var widt = $(window).width();
			if(widt > 1024){
				if(me.hasClass('acti-hove')){
				$('ul li',me).find('a').hover(function(){
						$(this).css({'position':'absolute','top':'0','left':'0','background-color':'#434242','height':'150%'});
					},function(){
						$(this).css({'postion':'initial','background-color':'transparent','height':'100%'});			
					});
				}
			}
		});
	}
})(jQuery);