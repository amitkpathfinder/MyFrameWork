var myCategorySliderss = (function() {
	'use strict';
	var putItInProperty='', putItInSociety='', ac='';
	var myCategorySlider = {
					init: function(){
						$.ajax({
								url: 'gal.json',
								type: 'GET',
								datatype:'json',
								success: this.ajaxSuccessCall,
								error: this.ajaxCustomErr,
							});
						},

						ajaxSuccessCall : function(data, textStatus, xhr) {
											
											var items = data.property.length+data.society.length;
											var i=1, dots='';
											dots = '<div class="dot-wraper">';
											for (i; i<=items; i++)
											{
												dots = dots + '<div dot-photo='+i+' class="dots"></div>';
											}
											dots = dots +'</div>';

											$.each(data.property, function(index, val) {
												putItInProperty = putItInProperty + '<div set-index="'+(index+1)+'" data-photo="property">'+val.link+'</div>';
											});

											$.each(data.society, function(index, val) {
												putItInSociety = putItInSociety+ '<div set-index="'+(data.property.length+index+1)+'" data-photo="society">'+val.link+'</div>';
											});
											ac= putItInProperty + putItInSociety;
											$('[make-film]').append(ac);
											$('[make-film]').parent().append(dots);
											myCategorySlider.setFilmstripLength(items);
											$('[data-photo]:first-child').addClass('current-slide');

											var dp = '[data-photo="property"], [data-photo="society"]';

											$(document).on('click', dp, function(e) {
				        						e.preventDefault();
				        						var that = $(this);
				        						myCategorySlider.bindMyCalls(that);
				        					});
										
											$(document).on('click', '[call-previous]', function(e) {
				        						e.preventDefault();
				        						myCategorySlider.callPrevious($(this),items);
				        						$(this).unbind('click');
				        					});

				        					$(document).on('click', '[call-next]', function(e) {
				        						e.preventDefault();
				        						myCategorySlider.callnext($(this),items);
				        						$(this).unbind('click');
				        					});

											$(document).on('click', '[dot-photo]', function(e) {
				        						e.preventDefault();
				        						myCategorySlider.makeDots($(this));
				        					});
									},

						ajaxCustomErr : function(xhr, textStatus, errorThrown) {
				            				console.log('Error');
				          				},

				        bindMyCalls : function(that){
				        					var getDataType = that.attr('data-photo'); 
				        					if(getDataType==='property')
				        					{
				        						console.log(getDataType);
				        					}
				        					else
				        					{
				        						console.log(getDataType);
				        					}
				        				},
				       		makeDots : function(that){
				       						var ab = $('[data-photo]:first-child').outerWidth(true);
				       						var getIndexVal = that.attr('dot-photo');
				       						var translateval = -(c(getIndexVal-1)*ab);
				       						$('[data-photo').removeClass('current-slide');
				       						$('[data-photo][set-index='+getIndexVal+']').addClass('current-slide');
					 						$('[make-film]').css('transform', 'translateX('+ translateval +'px)');
				       					},

				 setFilmstripLength : function(items){
				        						var ab = $('[data-photo]:first-child').outerWidth(true) * items;
				        						$('[make-film]').width(ab);
				        				},

				        	callPrevious: function(that,items){
				 							var ab = $('[data-photo]:first-child').outerWidth(true);
				 							var setIndexVal = $('.current-slide').attr('set-index');
				 							var x = -((setIndexVal-1)*ab);
				 							if(setIndexVal > 1)
				 							{
					 							var translateval = (x + ab);
					 							$('[data-photo].current-slide').removeClass('current-slide').prev().addClass('current-slide');
					 							$('[make-film]').css('transform', 'translateX('+ translateval +'px)');
				 							}
				 							else
				 							{
				 								return false;
				 							}
				 							that.bind('click');
				 						},

				 			callnext: function(that, items){
				 							var ab = $('[data-photo]:first-child').outerWidth(true);
				 							var setIndexVal = $('.current-slide').attr('set-index');
				 							if(setIndexVal < items)
				 							{
					 							var translateval = -(ab*setIndexVal);
					 							$('[data-photo].current-slide').removeClass('current-slide').next().addClass('current-slide');
					 							$('[make-film]').css('transform', 'translateX('+ translateval +'px)');
				 							}
				 							else
				 							{
				 								return false;
				 							}
				 							that.bind('click');
				 						}
	};
	return myCategorySlider;
}());

myCategorySliderss.init();

