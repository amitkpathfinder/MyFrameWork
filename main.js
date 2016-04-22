function doItOnHover(getThis)
{
	var getChild = getThis.find('[data-toolTipBox]');
	if(getChild.length>0)
	{	
		setPosition(getThis, getChild);
		getChild.show();
		//return false;
	}
	else
	{
		createElem(getThis,'tipColor');
	}
}

function doItOnHoverExit(getThis)
{
	var getChild = getThis.find('[data-toolTipBox]');
	getChild.hide();
}

function createElem(tipParent,tipClass)
{		
		var getVal = tipParent.attr('data-toolTip');
		var elem = $('<div/>');
		elem.attr('data-toolTipBox','').addClass(tipClass).text(getVal);
		console.log(getVal.length);

		if(getVal.length>100)
		elem.width((getVal.length*2));
		else
		elem.width((getVal.length*4));
			
		tipParent.append(elem);
		setPosition(tipParent, elem);
}
function setPosition(tipParent, elem)
{

		var checkOffset = tipParent.offset().left + tipParent.outerWidth();
		var elemWidth = elem.outerWidth();
		console.log(checkOffset+elemWidth);
		if(checkOffset+elemWidth > $(window).width())
		{
			console.log('max');
			elem.css('left', checkOffset-elemWidth);
		}
		else
		{
			console.log('min');
			elem.css('left', checkOffset-tipParent.outerWidth());
		}
}

$('*[data-toolTip]').hover(function() {
	doItOnHover($(this));	
}, function(){
   doItOnHoverExit($(this));
});
