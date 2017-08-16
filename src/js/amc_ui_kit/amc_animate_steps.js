(function($){
	'use strict';

	$.fn.amc_step = function(){
		var me = $(this);
		
		function run_the_scenario(step_2,step_3,step_4,step_5,visual){
			step_2.delay(0).queue(function(next){
				$(this).addClass('active');
				next();
			});
			step_3.delay(300).queue(function(next){
				$(this).addClass('active');
				next();
			});
			step_4.delay(600).queue(function(next){
				$(this).addClass('active');
				next();
			});
			step_5.delay(900).queue(function(next){
				$(this).addClass('active');
				next();
			});
			visual.delay(1200).queue(function(next){
				$(this).addClass('active');
				next();
			});
		}
		function remove_scenario(step_2,step_3,step_4,step_5,visual,step){
			step_2.dequeue();
			step_3.dequeue();
			step_4.dequeue();
			step_5.dequeue();
			visual.dequeue().removeClass('active');
			step.removeClass('active');
		}
		me.find('.block').each(function(){

			var visual = $(this).find('.visual'),
				stage = visual.find('.stage'),
				step = stage.find('.step'),
				step_1 = stage.find('.step_1'),
				step_2 = stage.find('.step_2'),
				step_3 = stage.find('.step_3'),
				step_4 = stage.find('.step_4'),
				step_5 = stage.find('.step_5');

			$(this).find('.visual').hover(function(){
				run_the_scenario(step_2,step_3,step_4,step_5,visual);
			},function(){
				remove_scenario(step_2,step_3,step_4,step_5,visual,step);
			});
		});
	}
})(jQuery);