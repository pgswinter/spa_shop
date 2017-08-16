(function($){
	'use strict';
	$.fn.icheck=function(){
		if($(this).hasClass('checked')){
			return true;
		}
		else{
			return false;
		}
	}

	$('.ama-checkbox').click(function(){
		$(this).addClass('add-animate').toggleClass('checked');
	})

})(jQuery);