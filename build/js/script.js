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

 $('.product__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.product__thumb'
});

$('.product__thumb').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.product__slider',
  dots: false,
  margin: 10,
  focusOnSelect: true
});

$('.viewed__slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false
});