(function($) {
  	'use strict';
	$.fn.clickOpen = function(){
		var me = $(this);
		var meOpen = $('.selector-div',me);
		var meClose = $('.cls-btn',me);
		var meItem = $('.list .item',me);
		meOpen.click(function(){
			meOpen.addClass('active');
		})
		meClose.click(function(){
			meOpen.removeClass('active');
		})
		meItem.each(function(){
			$(this).click(function(){
				$(this).toggleClass('active');
			});
		});
	}
})(jQuery);