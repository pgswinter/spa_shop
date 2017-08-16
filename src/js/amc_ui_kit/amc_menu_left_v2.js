(function($){
	'use strict';
	// Was been clear return false
	$.fn.menuAMR = function(options){
		// Declare button click, the menu and div container menu
		var me = $(this),
			meClick = me.find('.menu-btn');
		// Create action toggle click to moving menu from ltr
		meClick.click(function(e){
			e.preventDefault();
			me.stop().toggleClass('active');
			$(document).one('click',function closeMenu(e){
				if(me.has(e.target).length === 0){
		            me.removeClass('active');
		        } else {
		            $(document).one('click', closeMenu);
		        }
			});
		});
	};
})(jQuery);