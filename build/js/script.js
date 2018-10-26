$('.slider').slick({
	dots: true
});

$('.dropdown-toggle, .sidebar__catalog__title').click(function() {
	var drop = $(this).next()
	if (drop.is(':hidden')) {
		drop.slideDown(350)
	} else {
		drop.slideUp(350)
	}
});