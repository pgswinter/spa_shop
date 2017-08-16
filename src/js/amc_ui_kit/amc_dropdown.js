(function($){
	'use strict';	
	$.fn.amaSLB = function(){
		var me = $(this);
		var valueBar = $(this).find('.bar');
		$(this).find('.bar, .expa-btn').click(function(){
			$(this).parent().find('.list-item').toggleClass('hide-element');
		});
		$(document).on('click','.list-item li .item-wrapper' ,function(e){
			$(this).appendTo($('.bar'));
			$('.bar .item-wrapper').not($(this)).appendTo('.list-item li');
		});
	};
})(jQuery);

