(function($){
	'use strict';
	$.fn.loadingSearch = function(){
		var me = $(this);
		me.click(function(e){
			e.preventDefault();
			console.log(me.text());
		});
	};
})(jQuery);