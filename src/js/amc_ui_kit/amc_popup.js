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