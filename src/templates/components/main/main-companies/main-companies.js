$(function() {
  $('.main-companies__list').slick({
    dots: true,
    arrows: true,
		infinite: true,
		slidesToScroll: 1,
		slidesToShow: 2,
		accessibility: true,
		variableWidth: true,
		focusOnSelect: false,
		centerMode: false,
    mobileFirst: true,
    prevArrow: $('.main-companies-controls__prev'),
    nextArrow: $('.main-companies-controls__next'),
    responsive: [
      {
              breakpoint: 992,
              settings: 'unslick'
      }
    ]
  });
});  