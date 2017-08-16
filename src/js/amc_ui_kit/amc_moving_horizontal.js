(function($){
	'use strict';

	var defaults = {
		body_moving: null
	};

	$.fn.moving_horizontal = function(options){
		var me = $(this);
		var settings = $.extend({},defaults,options);
		me.click(function(e){
			e.preventDefault();
			if(settings.body_moving == null){
				alert('Please set the destinate for your moving!');
			}
			else{
				settings.body_moving.addClass('transition-effect');
				me.addClass('transition-effect')
				if(settings.body_moving.hasClass('move-rtl')){
					settings.body_moving.removeClass('move-rtl');
					me.removeClass('enable')
				}
				else{
					settings.body_moving.addClass('move-rtl');	
					me.addClass('enable')
				}
			}
		});
	};
})(jQuery);