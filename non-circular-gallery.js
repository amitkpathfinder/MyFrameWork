var abcd = (function(){
	'use strict';
	var ab = {
	count: 1,
	numslides: 5,
	ac : $("[ui-widget-role='gallery']"),
	igLImg : function(){
		return this.ac.find("[data-gallery='large-pic']");
	},
	igMask : function() {
		return this.ac.find("[data-gallery='gallery-film-mask']");
	},
	igThumbFilm : function(){
		return this.ac.find("[data-gallery='gallery-film']");
	},
	igThumbWidth : function(){
		return this.igThumbFilm().find("[data-gallery='thumbs']").first().outerWidth(true);
	},
	thumbCount : function(){
		return this.igThumbFilm().find("[data-gallery='thumbs']").length;
	},
	totalWidth : function(){
		return this.igThumbWidth() * this.thumbCount();
	},
	updatewidth : function(count)
	{
		this.igThumbFilm().attr('current-count', this.count);
	},
	init : function()
	{	
		this.count = 1;
		$("[data-gallery='thumbs']").removeClass('current');
		this.igThumbFilm().css({'marginLeft': 0	});
		this.updatewidth(this.count);
		this.igThumbFilm().attr('total-tab-count', this.thumbCount());
		var gImg = this.igThumbFilm().find("[data-gallery='thumbs']").first().find('img').attr('src');
		this.igThumbFilm().find("[data-gallery='thumbs']").first().addClass('current');
		this.igLImg().children('img').attr('src', gImg);
		$("[data-gallery='thumbs']").each(function(index, el) {
			$(el).attr({
				'set-index': index+1
			});
		});
	},
	showGalleryPicture : function(that)
	{
		var getImg = that.children('img').attr('src');
		$("[data-gallery='thumbs']").removeClass('current');
		that.addClass('current');
		this.igLImg().children('img').attr('src', getImg);
		this.count = that.attr('set-index');
		this.updatewidth(this.count);
	},
	nextSlide : function()
	{
		if(this.count < this.thumbCount())
		{
			this.igThumbFilm().find("[data-gallery='thumbs'].current").removeClass('current').next().addClass('current');
			var getImg = this.igThumbFilm().find("[data-gallery='thumbs'].current").children('img').attr('src');
			this.igLImg().children('img').attr('src', getImg);
			if(this.count*this.igThumbWidth() <= this.numslides*this.igThumbWidth())
			{
				console.log(this.count*this.igThumbWidth());
				var marginL = this.igThumbFilm().css('marginLeft');
				this.igThumbFilm().css({
				'marginLeft': -(this.count*this.igThumbWidth())+'px'
				});
			}
			this.count++;
			this.updatewidth(this.count);
		}
		else
		{
			ab.init();
			return;
		}
	},
	previousSlide : function()
	{
		if(this.count > 1)
		{
			this.igThumbFilm().find("[data-gallery='thumbs'].current").removeClass('current').prev().addClass('current')
			var getImg = this.igThumbFilm().find("[data-gallery='thumbs'].current").children('img').attr('src');
			this.igLImg().children('img').attr('src', getImg);
			if(this.count*this.igThumbWidth() > this.numslides*this.igThumbWidth())
			{
				var marginL = this.igThumbFilm().css('marginLeft');
				this.igThumbFilm().css({
				'marginLeft': (parseInt(marginL) + this.igThumbWidth())+'px'
				});
			}
			else
			{
				this.igThumbFilm().css({
				'marginLeft': 0+'px'
				});
			}
			this.count--;
			this.updatewidth(this.count);
		}
		else
		{
			ab.init();
			return;
		}
	}
}
console.log(ab.updatewidth());
ab.init();
return {ab};
})();



$(document).on('click', "[data-gallery='thumbs']", function () {
	var that = $(this);
	abcd.ab.showGalleryPicture(that);
});

$(document).on('click', '.next', function(e) {
	e.preventDefault();
	abcd.ab.nextSlide();
});

$(document).on('click', '.prev', function(e) {
	e.preventDefault();
	abcd.ab.previousSlide();
});