(function($){
	'use strict'

	var defaults = {

		ctrlItem: true,
		pageItem: false,
		auto: false,
		auto_once_time: false,
		gallery: false,
		heightCRS: 'auto',
		zoomCRS: true,
		mobile: true

	}

	$.fn.maxtaCRS = function(options){

		var maxtaCRS = $(this),
			maxtaCRSWrap = maxtaCRS.find('ul'),
			maxtaCRSItem = maxtaCRS.find('ul').find('li'),

			settings = $.extend({},defaults,options),

			getWidtElem,
			distanceMovingItem,
			getNumbItem = maxtaCRSItem.length,
			totalWidth = getWidtElem*getNumbItem;
		// maxtaCRS.find('ul').find('li').each(function(index){
		// 	$(this).css({
		// 		'top': 0,
		// 		'left': ''+((getWidtElem/3)*index+((getWidtElem/3/2)*index))+'px'
		// 	})
		// });

		// var setWidt = function(){

		// 	var widtOfCRS = getWidtElem*getNumbItem
		// 	maxtaCRSWrap.width(totalWidth)
		// 	if($(window).width() > 1024){
		// 		maxtaCRSItem.width(getWidtElem/3);
		// 	}
		// 	else{
		// 		maxtaCRSItem.width(getWidtElem);
		// 	}
		// 	return maxtaCRSItem.width();
		// }

		var constructor = function(){
			getWidtElem = maxtaCRS.width();
			var widtOfCRS = getWidtElem*getNumbItem;
			maxtaCRSWrap.width(totalWidth);

			if($(window).width()> 1025){
				maxtaCRS.find('ul').find('li').each(function(index){
					$(this).css({
						'top': 0,
						'left': ''+((getWidtElem/3)*index+((getWidtElem/3/2)*index))+'px'
					})
				});
				distanceMovingItem = ((getWidtElem/3/2)+(getWidtElem/3));
				// Set width of item
				maxtaCRSItem.width(getWidtElem/3);
			}
			else{
				maxtaCRS.find('ul').find('li').each(function(index){
					$(this).css({
						'top': 0,
						'left': ''+(getWidtElem*index)+'px'
					})
				});
				distanceMovingItem = getWidtElem;
				// Set width of item
				maxtaCRSItem.width(getWidtElem);
			}
		}
		constructor()
		
		$(window).resize(function(){
			// location.reload()
			constructor();
		});	

		// maxtaCRS.find('ul').css({
		// 	'left': ''+(-(getWidtElem/3/2))+'px'
		// })
		

		var heightCRS = function(){

			var setHeightCRS = settings.heightCRS
			return maxtaCRS.height(setHeightCRS)
			
		}

		

		var moveLeft = function(){

			var finalItem = maxtaCRSWrap.find('li:nth-child('+getNumbItem+')');
			var firstItem = maxtaCRSWrap.find('li:first-child');
			var getIndex = maxtaCRSWrap.find('li.active').index() + 1;
			var activeItem = maxtaCRSWrap.find('li.active');

			// Syn with pagination
			var page = maxtaCRS.find('ol')
			var pageItems = page.find('li')
				
			console.log(getIndex)

			if(firstItem.hasClass('active')){

				if($(window).width() > 1024){
					maxtaCRSWrap.stop().animate({

						'margin-left': '-'+(getWidtElem/3/2)+'px'

					},1000);
				}else{
					maxtaCRSWrap.stop().animate({

						'margin-left': '-'+(getWidtElem)+'px'

					},1000);
				}
				
				activeItem.removeClass('active')
				maxtaCRSWrap.find('li:nth-child(2)').addClass('active')

				pageItems.removeClass('active')
				page.find('li:nth-child(2)').addClass('active')
			}
			else if(finalItem.hasClass('active')){

				maxtaCRSWrap.stop().animate({

					'margin-left': 0

				},1000)

				activeItem.removeClass('active')
				maxtaCRSWrap.find('li:nth-child(1)').addClass('active')

				// Syn with pagination
				pageItems.removeClass('active')
				page.find('li:nth-child(1)').addClass('active')

			}else{

				if($(window).width() > 1024){
					maxtaCRSWrap.stop().animate({

						'margin-left': '-'+(distanceMovingItem*(getIndex-1)+(getWidtElem/3/2))+'px'//add more left when moving first-child

					},1000)
				}else{
					maxtaCRSWrap.stop().animate({

						'margin-left': '-'+(distanceMovingItem*getIndex)+'px'

					},1000)
				}

				activeItem.removeClass('active')
				maxtaCRSWrap.find('li:nth-child('+(getIndex+1)+')').addClass('active')

				pageItems.removeClass('active')
				page.find('li:nth-child('+(getIndex+1)+')').addClass('active')

			}
		}

		var moveRight = function(){

			var secondItem = maxtaCRSWrap.find('li:nth-child(2)');
			var firstItem = maxtaCRSWrap.find('li:nth-child(1)')
			var getIndex = maxtaCRSWrap.find('li.active').index() + 1
			var activeItem = maxtaCRSWrap.find('li.active')

			// Syn with pagination
			var page = maxtaCRS.find('ol')
			var pageItems = page.find('li')

			console.log(getIndex)

			if(secondItem.hasClass('active')){

				if($(window).width() > 1024){
					maxtaCRSWrap.stop().animate({

						'margin-left': '0'

					},1000)
				}else{
					maxtaCRSWrap.stop().animate({

						// 'margin-left': '-'+(distanceMovingItem*(getNumbItem-1))+'px'
						'margin-left': '0'

					},1000)
				}
				

				activeItem.removeClass('active')
				maxtaCRSWrap.find('li:nth-child(1)').addClass('active')

				// Syn with pagination
				pageItems.removeClass('active')
				page.find('li:nth-child(1)').addClass('active')

			}
			else if(firstItem.hasClass('active')){

				if($(window).width() > 1024){
					maxtaCRSWrap.stop().animate({

						'margin-left': '-'+(distanceMovingItem*(getNumbItem-1)-(getWidtElem/3))+'px'

					},1000)
				}else{
					maxtaCRSWrap.stop().animate({

						'margin-left': '-'+(distanceMovingItem*(getNumbItem-1))+'px'

					},1000)
				}
				

				activeItem.removeClass('active')
				maxtaCRSWrap.find('li:nth-child('+getNumbItem+')').addClass('active')

				// Syn with pagination
				pageItems.removeClass('active')
				page.find('li:nth-child('+getNumbItem+')').addClass('active')

			}else{

				if($(window).width() > 1024){
					maxtaCRSWrap.stop().animate({

						'margin-left': '-'+(distanceMovingItem*(getIndex-3)+(getWidtElem/3/2))+'px'

					},1000)
				}else{
					maxtaCRSWrap.stop().animate({

						'margin-left': '-'+(distanceMovingItem*(getIndex-2))+'px'

					},1000)	
				}
				

				activeItem.removeClass('active')
				maxtaCRSWrap.find('li:nth-child('+(getIndex-1)+')').addClass('active')

				// Syn with pagination
				pageItems.removeClass('active')
				page.find('li:nth-child('+(getIndex-1)+')').addClass('active')

			}
		}

		var mobile = function(){
			if(settings.mobile == true){
				$(document).on('swipeleft',maxtaCRS,function(){
					moveLeft()
				})
				$(document).on('swiperight',maxtaCRS,function(){
					moveRight()
				})
			}else{
				console.log('Swipe was deactive mobile');
			}
		}

		var active = function(){

			if(settings.ctrlItem == true){

				maxtaCRSWrap.find('li:first-child').addClass('active')

				var nextBtn = maxtaCRS.find('.next-ctrl')
				nextBtn.on('click',function(){
					moveLeft()
				})

				var prevBtn = maxtaCRS.find('.prev-ctrl')
				prevBtn.click(function(){
					moveRight()
				})

			}else{

				maxtaCRS.find('ctrl-btn').remove()

			}

		}

		var auto = function(){

			if(settings.auto == true){

				setInterval(function(){

					moveLeft()

				},5000)

			}else{

				console.log('autorun was disabled')

			}

		}

		var auto_once_time = function(){

			if(settings.auto_once_time == true){
				moveLeft()
			}else{

				console.log('auto_once_time was disabled')
			}
		}

		var pageItem = function(){

			if(settings.pageItem == true){

				$('<ol></ol>').appendTo(maxtaCRS)
				for(var i = 0; i < getNumbItem; i++){

					$('<li></li>').appendTo(maxtaCRS.find('ol'))

				}

				var page = maxtaCRS.find('ol')
				var pageItems = page.find('li')
				
				$(document).ready(function(){

					console.log("number item: "+getNumbItem)
					console.log("number ol li:"+pageItems.length)	
					
				})
				page.width(26*pageItems.length)	

				page.find('li:first-child').addClass('active')
				
				pageItems.click(function(){

					var getPageIndex = $(this).index()
					var firstPageItem = page.find('li:first-child')

					var activeItem = maxtaCRSWrap.find('li.active')
					console.log(getPageIndex)

					if($(window).width() > 1024){
						maxtaCRSWrap.animate({

							'margin-left': '-'+(distanceMovingItem*getPageIndex)+'px'

						},1000)
					}else{
						maxtaCRSWrap.animate({

							'margin-left': '-'+(distanceMovingItem*getPageIndex)+'px'

						},1000)
					}
					

					activeItem.removeClass('active')
					maxtaCRSWrap.find('li:nth-child('+(getPageIndex+1)+')').addClass('active')

					pageItems.removeClass('active')
					maxtaCRS.find('ol').find('li:nth-child('+(getPageIndex+1)+')').addClass('active')

					maxtaCRS.parent().siblings('.pareBUL').find('.relaSLD').find('ul li').removeClass('active')
					maxtaCRS.parent().siblings('.pareBUL').find('.relaSLD').find('ul').find('li:nth-child('+(getPageIndex+1)+')').addClass('active')

				})

			}else{

				console.log('disabled pagination')

			}

		}

		var gallery = function(){

			if(settings.gallery == true){

				var getURL = maxtaCRS.parent().siblings('.pareBUL').find('.relaSLD')
				console.log(getURL)
				var pageRelaSLD = getURL.find('ul')
				var itemRelaSLD = getURL.find('li')

				pageRelaSLD.find('li:first-child').addClass('active')

				itemRelaSLD.each(function(){

					$(this).click(function(){

						var activeItemCRS = maxtaCRSWrap.find('li.active')
						var getIndexSelected = $(this).index()

						maxtaCRSWrap.animate({

							// 'margin-left':'-'+(getWidtElem*getIndexSelected)+'px'
							'margin-left':'-'+(distanceMovingItem*getIndexSelected+(getWidtElem/3/2))+'px'

						},500)

						activeItemCRS.removeClass('active')
						maxtaCRSWrap.find('li:nth-child('+(getIndexSelected+1)+')').addClass('active')

						getURL.find('ul li').removeClass('active')
						getURL.find('ul').find('li:nth-child('+(getIndexSelected+1)+')').addClass('active')

						maxtaCRS.find('ol li').removeClass('active')
						maxtaCRS.find('ol').find('li:nth-child('+(getIndexSelected+1)+')').addClass('active')

					})
					

				})

			}else{

				console.log('gallery was disabled')

			}

		}

		var zoomCRS = function(){

			if(settings.zoom == true){

				maxtaCRS.append('<div class="gall-zoom hide-elem"><div class="zoom-wrap"></div><button class="clos-btn"><i class="fa fa-close"></i></button></div>')
				maxtaCRS.closest('body').append('<div class="gall-zoom hide-elem"><div class="bg-dark"></div></div>')
				maxtaCRS.find('ul').clone().appendTo('.zoom-wrap')
				$('<button class="next-ctrl ctrl-btn"><i class="fa fa-angle-right"></i></button><button class="prev-ctrl ctrl-btn"><i class="fa fa-angle-left"></i></button>').appendTo($('.zoom-wrap'))
				$('.zoom-wrap').addClass('maxtaSLD')

				$('.zoom-wrap').maxtaCRS({

					auto:false,
					ctrlItem: true,
					heightCRS: "500",
					pageItem: false

				})

				maxtaCRS.find('.gall-zoom .clos-btn').click(function(){

					$(this).parent().addClass('hide-elem')
					$('body > .gall-zoom').addClass('hide-elem')

				})
				maxtaCRS.find('.zoom-btn').click(function(){

					maxtaCRS.find('.gall-zoom').removeClass('hide-elem')
					$('body > .gall-zoom').removeClass('hide-elem')

				})

			}
			else{

				console.log('zoom galley was disabled')

			}

		}

		var init = function(){

			pageItem();
			active();
			mobile();
			// setWidt();
			auto();
			auto_once_time();
			gallery();
			heightCRS();
			zoomCRS();
			
		}

		init();

	}

})(jQuery);