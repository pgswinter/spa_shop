(function($){
	'use strict';	
	var defaults = {
		dest: null
	};

	$.fn.clickScroll = function(options){
		var me = $(this);
		var settings = $.extend({},defaults,options);
		me.click(function(e){
			e.preventDefault();
			if(settings.dest == null){
				alert('Please set the destinate for your scrolling!');
			}
			else{
				$('body,html').animate({
					scrollTop: settings.dest.offset() ? settings.dest.offset().top : 0
				},500);
			}
		});
	};
})(jQuery);