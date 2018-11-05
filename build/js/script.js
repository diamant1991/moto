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
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

$('.viewed__slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.order-table__title').click(function(e) {
  var num = $(this).attr('data-number');
  var row = $('.order-table__content' + num);

  if(!row.hasClass('is-active')){
    $(this).addClass('active')
    row.addClass('is-active')
  } else {
    $(this).removeClass('active')
    row.removeClass('is-active')
  }
});

$(window).scroll(function() {
 if($(this).scrollTop() > 300) {
  $('.top-btn').fadeIn();
 } else {
  $('.top-btn').fadeOut();
 }
});

$('.top-btn').click(function() {
  $('body,html').animate({scrollTop:0},800);
});

$('.tab__item').click(function(e) {
  e.preventDefault();
  var $href = $(this).attr('href');
  $('.tab__item').removeClass('is-active');
  $(this).addClass('is-active');
  $('.tab-pane').removeClass('is-active')
  $($href).addClass('is-active');
});