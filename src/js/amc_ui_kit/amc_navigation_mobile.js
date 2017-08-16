(function($){
	
	// Was been clear return false
	$.fn.navMobi = function(options){
		// Declare button click, the menu and div container menu
		var me = $(this),
			meClick = me.find('.nav-btn'),
			meTitle = me.find('.title-page');

		// Create action toggle click to moving menu from ltr
		if($(window).width()<=1024){
			me.find('ul').find('li:first-child').addClass('current');
			var meCurrentPage = me.find('.current');
			function loadValue(){
				if(meCurrentPage.find('a').length > 0){
					var meCurrentIMG = meCurrentPage.find('a').attr('style');
					meTitle.find('.the-img').attr("style",""+meCurrentIMG+";background-size: cover;");
				}
				if(meCurrentPage.find('span').length > 0){
					var meCurrentValueSpan = meCurrentPage.find('span').text();
					meTitle.find('label').text(""+meCurrentValueSpan+"");
				}
				if(meCurrentPage.find('label').length > 0){
					var meCurrentValueLabel = meCurrentPage.find('label').text();
					meTitle.find('label').text(""+meCurrentValueLabel+"");
				}
			}
			loadValue();
			meClick.click(function(e){
				e.preventDefault();
				me.stop().toggleClass('active');
				var changeIcon = meClick.find('i');
				if(changeIcon.hasClass('fa-angle-down')){
					changeIcon.removeClass('fa-angle-down');
					changeIcon.addClass('fa-angle-up');
				}
				else{
					changeIcon.removeClass('fa-angle-up');
					changeIcon.addClass('fa-angle-down');
				}
			});
			me.find('ul').find('li').click(function(e){
				e.preventDefault();
				me.find('ul').find('li').removeClass('current');
				$(this).addClass('current');
				meCurrentPage = me.find('.current');
				loadValue();
				me.removeClass('active');
			});
		}
	};
})(jQuery);