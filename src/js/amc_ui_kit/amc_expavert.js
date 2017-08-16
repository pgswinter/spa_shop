(function($){
	'use strict';

	var defaults = {
		click_button: null,
		active_class: null,
		icon_arrow: null
	}
	$.fn.expandDIV = function(options){
		var me = $(this);
		var settings = $.extend({},defaults,options);
		settings.click_button.click(function(e){
			e.preventDefault();
			settings.active_class.toggleClass('active');
			if(settings.icon_arrow.hasClass('fa-angle-down')){
				settings.icon_arrow.removeClass('fa-angle-down');
				settings.icon_arrow.addClass('fa-angle-right');
			}
			else{
				settings.icon_arrow.removeClass('fa-angle-right');
				settings.icon_arrow.addClass('fa-angle-down');
			}
		})
	}

	$.fn.expaVert = function(){
		var me = $(this);
		me.siblings('.img-wrap').find('.expa-fram-btn').click(function(){
				me.slideToggle();
				$(this).toggleClass('active');
		});
	}

	$.fn.expaVertSumm = function(){
		var me = $(this);
		me.siblings('.img-wrap').find('.expa-fram-btn').click(function(){
				me.find('p').slideToggle();
				$(this).toggleClass('active');
		});
	}
	$.fn.expaArti = function(e){
		var me = $(this);
		$('> figure', me).each(function(){
			var meFigu = $(this);
			$('.expa-fram-btn',meFigu).click(function(e){
				$('.expa-fram p',meFigu).slideToggle();
				$(this).toggleClass('active');
			});
			$('.titl1',meFigu).click(function(e){
				e.preventDefault();
				$('.expa-fram p',meFigu).slideToggle();
				$(this).toggleClass('active');
			});
		});
	};

	$.fn.expandDetail = function(){
		var me = $(this);
		me.find('.block').each(function(){
			$(this).click(function(){

				if($(this).hasClass('left')){
					if($(this).siblings('.detail-wrap.center').hasClass('active')){
						$(this).siblings('.detail-wrap.center').removeClass('active');
						$(this).parents('.wrapper').find('.block').removeClass('active');
					}
					if($(this).siblings('.detail-wrap.right').hasClass('active')){
						$(this).siblings('.detail-wrap.right').removeClass('active');
						$(this).parents('.wrapper').find('.block').removeClass('active');
					}
					if($(this).siblings('.detail-wrap.left').hasClass('active')){
						$(this).siblings('.detail-wrap.left').removeClass('active');
						$(this).parents('.wrapper').find('.block').removeClass('active');
					}
					else{
						$(this).siblings('.detail-wrap.left').addClass('active');
						$(this).addClass('active');
					}
				}
				else if($(this).hasClass('center')){
					if($(this).siblings('.detail-wrap.left').hasClass('active')){
						$(this).siblings('.detail-wrap.left').removeClass('active');
						$(this).parents('.wrapper').find('.block').removeClass('active');
					}
					if($(this).siblings('.detail-wrap.right').hasClass('active')){
						$(this).siblings('.detail-wrap.right').removeClass('active');
						$(this).parents('.wrapper').find('.block').removeClass('active');
					}
					if($(this).siblings('.detail-wrap.center').hasClass('active')){
						$(this).siblings('.detail-wrap.center').removeClass('active');
						$(this).parents('.wrapper').find('.block').removeClass('active');
					}
					else{
						$(this).siblings('.detail-wrap.center').addClass('active');
						$(this).addClass('active');
					}
				}
				else{
					if($(this).siblings('.detail-wrap.center').hasClass('active')){
						$(this).siblings('.detail-wrap.center').removeClass('active');
						$(this).parents('.wrapper').find('.block').removeClass('active');
					}
					if($(this).siblings('.detail-wrap.left').hasClass('active')){
						$(this).siblings('.detail-wrap.left').removeClass('active');
						$(this).parents('.wrapper').find('.block').removeClass('active');
					}
					if($(this).siblings('.detail-wrap.right').hasClass('active')){
						$(this).siblings('.detail-wrap.right').removeClass('active');
						$(this).parents('.wrapper').find('.block').removeClass('active');
					}
					else{
						$(this).siblings('.detail-wrap.right').addClass('active');
						$(this).addClass('active');
					}
				}
			});
		});
	};

	$.fn.singleExpandDOD21 = function(){
		var me = $(this);
		var meBlock = me.find('.block');

		me.find('.block2').each(function(){
			$(this).click(function(e){
				e.preventDefault();
				// Dectect div need move
				var moveOutDiv = $('> .detail-wrap2',$(this));
				
				if($(window).width() >= 1136){
					if(!$(this).hasClass('active')){
						// Check if already other div has .active. To return original position
						$(this).siblings('.wasMoved').appendTo($(this).siblings(".active")).removeClass('wasMoved');
						// Remove if had already .active class
						me.find('.active').removeClass('active');

						// Add new class active
						$(this).addClass('active');
						moveOutDiv.appendTo($(this).parent()).addClass('wasMoved');

						// Split width to balace
						$(this).siblings('.wasMoved').balanceItemOfBar({
							parent: $('.the_devide.lv3'),
							children: $('.item.block3')
						});
					}
					else{
						// Back the div to original position
						me.find('.wasMoved').appendTo($(this)).removeClass('wasMoved');
						// Remove active class
						$(this).removeClass('active');
					}
				}
				else{
					// meBlock.not(this).removeClass('active');	
					// $(this).toggleClass('active');
					if(!$(this).hasClass('active')){
						// Check if already other div has .active. To return original position
						$(this).siblings('.wasMoved').appendTo($(this).siblings(".active")).removeClass('wasMoved');
						// Remove if had already .active class
						me.find('.active').removeClass('active');

						// Add new class active
						$(this).addClass('active');

						moveOutDiv.insertAfter($(this)).addClass('wasMoved');

						// Split width to balace
						$(this).siblings('.wasMoved').balanceItemOfBar({
							parent: $('.the_devide.lv3'),
							children: $('.item.block3')
						});

					}
					else{
						// Back the div to original position
						me.find('.wasMoved').appendTo($(this)).removeClass('wasMoved');
						// Remove active class
						$(this).removeClass('active');
					}
				}
			});
		});
	}

	$.fn.singleExpandDOD2 = function(){
		var me = $(this);
		var meBlock = me.find('.block');

		me.find('.block').each(function(){
			$(this).click(function(e){
				e.preventDefault();
				// Dectect div need move
				var moveOutDiv = $('> .detail-wrap',$(this));
				
				if($(window).width() >= 1136){
					if(!$(this).hasClass('active')){
						// Check SUB DIV: if already other div has .active. To return original position
						if($(this).siblings('.wasMoved').find('.active').length > 0){
							console.log('love');
							$(this).siblings('.wasMoved').find('.active').siblings('.wasMoved').appendTo($(this).siblings('.wasMoved').find('.active')).removeClass('wasMoved');
							// Remove SUB DIV active
							$(this).siblings('.wasMoved').find('.active').removeClass('active');
						}
						else{
							console.log('no love');
						}

						// Check MAIN DIV: if already other div has .active. To return original position
						$(this).siblings('.wasMoved').appendTo($(this).siblings(".active")).removeClass('wasMoved');
						// Remove if had already .active class
						me.find('.active').removeClass('active');

						// Add new class active
						$(this).addClass('active');
						moveOutDiv.appendTo($(this).parent()).addClass('wasMoved');

						// Split width to balace
						$(this).siblings('.wasMoved').balanceItemOfBar({
							parent: $('.the_devide.content'),
							children: $('.item.content')
						});

					}
					else{
						// Back the div to original position
						me.find('.wasMoved').appendTo($(this)).removeClass('wasMoved');
						
						// Back the SUB div to original position
						$(this).find('.detail-wrap').siblings('.detail-wrap2').appendTo($(this).find('.item.content.block2.active'));
						// Remove SUB div active class
						$(this).find('.item.content.block2.active').removeClass('active');

						// Remove active class
						$(this).removeClass('active');
					}
				}
				else{
					
					if(!$(this).hasClass('active')){
						// Check SUB DIV: if already other div has .active. To return original position
						if($(this).siblings('.wasMoved').find('.active').length > 0){
							console.log('love');
							$(this).siblings('.wasMoved').find('.active').siblings('.wasMoved').appendTo($(this).siblings('.wasMoved').find('.active')).removeClass('wasMoved');
							// Remove SUB DIV active
							$(this).siblings('.wasMoved').find('.active').removeClass('active');
						}
						else{
							console.log('no love');
						}

						// Check if already other div has .active. To return original position
						$(this).siblings('.wasMoved').appendTo($(".active")).removeClass('wasMoved');
						// Remove if had already .active class
						me.find('.active').removeClass('active');

						// Add new class active
						$(this).addClass('active');
						moveOutDiv.insertAfter($(this)).addClass('wasMoved');

						// Split width to balace
						$('.wasMoved').balanceItemOfBar({
							parent: $('.the_devide.content'),
							children: $('.item.content')
						});

					}
					else{
						// Back the div to original position
						me.find('.wasMoved').appendTo($(this)).removeClass('wasMoved');
						
						// Back the SUB div to original position
						$(this).find('.detail-wrap').siblings('.detail-wrap2').appendTo($(this).find('.item.content.block2.active'));
						// Remove SUB div active class
						$(this).find('.item.content.block2.active').removeClass('active');

						// Remove active class
						$(this).removeClass('active');
					}
				}
			});
		});
	}

	$.fn.singleExpand = function(){
		var me = $(this);
		var meBlock = me.find('.block');

		me.find('.block').each(function(){
			$(this).click(function(e){
				e.preventDefault();
				// Dectect div need move
				var moveOutDiv = $('> .detail-wrap',$(this));
				
				if($(window).width() >= 1136){
					if(!$(this).hasClass('active')){
						// Check if already other div has .active. To return original position
						$(this).siblings('.wasMoved').appendTo($(this).siblings(".active")).removeClass('wasMoved');
						// Remove if had already .active class
						me.find('.active').removeClass('active');

						$(this).siblings('.wasMoved').find('.active').removeClass('active');
						// Add new class active
						$(this).addClass('active');
						moveOutDiv.appendTo($(this).parent()).addClass('wasMoved');
					}
					else{
						// Back the div to original position
						me.find('.wasMoved').appendTo($(this)).removeClass('wasMoved');
						
						// Back the SUB div to original position
						$(this).find('.detail-wrap').siblings('.detail-wrap2').appendTo($(this).find('.item.content.block2.active'));
						// Remove SUB div active class
						$(this).find('.item.content.block2.active').removeClass('active');

						// Remove active class
						$(this).removeClass('active');
					}
				}
				else{
					// meBlock.not(this).removeClass('active');	
					// $(this).toggleClass('active');
					if(!$(this).hasClass('active')){
						// Check if already other div has .active. To return original position
						$(this).siblings('.wasMoved').appendTo($(".active")).removeClass('wasMoved');
						// Remove if had already .active class
						me.find('.active').removeClass('active');

						// Add new class active
						$(this).addClass('active');
						
						moveOutDiv.insertAfter($(this)).addClass('wasMoved');

						// Split width to balace
						$('.wasMoved').balanceItemOfBar({
							parent: $('.the_devide.content'),
							children: $('.item.content')
						});

					}
					else{
						// Back the div to original position
						me.find('.wasMoved').appendTo($(this)).removeClass('wasMoved');
						
						// Back the SUB div to original position
						$(this).find('.detail-wrap').siblings('.detail-wrap2').appendTo($(this).find('.item.content.block2.active'));
						// Remove SUB div active class
						$(this).find('.item.content.block2.active').removeClass('active');

						// Remove active class
						$(this).removeClass('active');
					}
				}
			});
		});
	}
})(jQuery);