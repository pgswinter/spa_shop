(function($){
	'use strict';	
	$.fn.itemnav = function() {
	    var me = $(this);
		//$(window).on('resize load',function(){
	    var widt = $(window).width();
		if(widt > 1024) {
		    var wrapItem = $('ul', me);
		    var item = $('ul li', me);
		    var numbItem = item.length;
			//item.width(wrapItem.width() / numbItem)
		    item.width(parseFloat(wrapItem.width() / numbItem - 1).toFixed(2));
		    wrapItem.height('auto');
		    var wrapItemDiv = $('.devideMe', me);
		    var itemDiv = $('.devideMe .item', me);
		    var numbItemDiv = itemDiv.length;
		    itemDiv.width(parseFloat(wrapItemDiv.width() / numbItemDiv - 1).toFixed(2));
		    wrapItemDiv.height('auto');
		}
	};

	var defaults = {
		parent: null,
		children: null
	}

	$.fn.balanceItemOfBar = function(options){
		var settings = $.extend({},defaults,options),
			me = $(this),
			parent = me.find(settings.parent), 
			child = me.find(settings.parent).find(settings.children),
			widthParent = parent.width(),
			numberChildren = child.length;
			console.log(numberChildren);
		function checkDevice(){
			if($(window).width() >= 1136){
				child.width(parseFloat(widthParent/numberChildren).toFixed(2));	
			}
			else{
				child.width(me.width());
			}
		}
		checkDevice();
		
		$(window).resize(function(){
			// location.reload()
			checkDevice();
		});	
		

	}
})(jQuery);