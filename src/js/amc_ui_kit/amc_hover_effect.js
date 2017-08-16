(function($){
	'use strict';	
	function randomEffect(){
		var animate_array = new Array();
		var hover_left_direction =  function(){
			return 'hover_left_direction';
		};
		var hover_right_direction =  function(){
			return 'hover_right_direction';
		};
		var hover_top_direction =  function(){
			return 'hover_top_direction';
		};
		var hover_bottom_direction =  function(){
			return 'hover_bottom_direction';
		};
		animate_array.push(hover_left_direction,hover_right_direction,hover_top_direction,hover_bottom_direction);
		
		//Get a random number from 0 to 4
		var randomNumber = Math.floor(Math.random()*4);
		return animate_array[randomNumber];
	}
	$.fn.random_4_directions = function(){
		var get_name = randomEffect();
		$(this).addClass(get_name);
	};
})(jQuery);