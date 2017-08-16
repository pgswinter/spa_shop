(function($){
	'use strict';
	// For each of page
	$('.setHeight-head .minimize').logoScroll();
	$('.top-head').vertScrl();

	var widt = $(window).width();
	$('.close-btn.close').click(function(e){
		e.preventDefault();
		$('.cont-form,.set-bg').fadeOut().removeClass('here');
	});
	$('.cont-form-btn').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		if(!$('.cont-form').hasClass('here')){
			$('.cont-form,.set-bg').fadeIn().addClass('here');
			if(widt > 0){
				if(widt > 1024){
					$(document).one('click',function closeForm (e){
						if($('.cont-form').has(e.target).length === 0){
				            $('.cont-form,.set-bg').fadeOut().removeClass('here');
				        } else {
				            $(document).one('click', closeForm);
				        }
					});
				}
			}
		}
	});
	var sizeContactForm = function(){
		var setHeight = $(window).height()*80/100;
		var setTop = $('header').height();
		$('.nav-wrapper').height($(window).height());
		$('.cont-form-btn').on('click',function(){
			if(!$('.cont-form').hasClass('hide-element')){
				var compHeigWind = $(window).height();
				var compHeigAppl = $('.cont-form').height();
				if(compHeigWind < compHeigAppl == true){
					$('.cont-form').height($(window).height());
					$('.cont-form').css({'overflow-y':'scroll'});
				}
			}
		});
	};
	sizeContactForm();
})(jQuery);