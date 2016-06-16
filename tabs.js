$(document).on('click', '*[tab-items]', function(e) {
	e.preventDefault();
	console.log($(this).attr('tab-items'));
	console.log($(this).closest("[data-in-role='tabs']").find("[tab-content="+$(this).attr('tab-items')+"]").text() + $(this).attr('tab-items'));
	$(this).closest("[data-in-role='tabs']").find('[tab-items]').removeClass('active');
	$(this).addClass('active');
	$(this).closest("[data-in-role='tabs']").find("[tab-content]").removeClass('active');
	$(this).closest("[data-in-role='tabs']").find("[tab-content="+$(this).attr('tab-items')+"]").addClass('active');
	/* Act on the event */
});