$(function() {
  $('.main-blog-slider__list').slick({
    dots: false,
    arrows: true,
		infinite: false,
		slidesToScroll: 1,
		accessibility: true,
		variableWidth: true,
		focusOnSelect: false,
		centerMode: false,
    prevArrow: $('.main-blog-slider__prev'),
    nextArrow: $('.main-blog-slider__next'),
		responsive: [
			{
				breakpoint: 992,
				settings: {
          dots: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
          dots: true,
				}
			}
		]
  });
});  