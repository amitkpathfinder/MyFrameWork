var stickyFunction = (function(){
			'use strict';
			var shouldStick, whenToStick, stickyBar = '';
			var stickyCallhandle = {
				init: function()
				{
					shouldStick = $('.stickThis');
					whenToStick = $('.stickHere');
					stickyBar = shouldStick.offset().top;
				},
				setSticky:function()
				{
					var winScroll = $(window).scrollTop();
					if(winScroll>= stickyBar)
						shouldStick.addClass('sticky');
					else
						shouldStick.removeClass('sticky');
				}
			}
			return stickyCallhandle;

}());

stickyFunction.init();

$( window ).scroll(function() {
	stickyFunction.setSticky();
});