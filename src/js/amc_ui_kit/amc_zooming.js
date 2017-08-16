(function($){
	'use strict';
	$(window).on('load resize',function(){
		if($(window).width() >= 1600){
			if(((window.outerWidth - 8) / window.innerWidth) >= 0.7 && ((window.outerWidth - 8) / window.innerWidth) < 0.896){
				$('body .menu-left').css({'width':'400px'});
			}
		}
	});
})(jQuery);
