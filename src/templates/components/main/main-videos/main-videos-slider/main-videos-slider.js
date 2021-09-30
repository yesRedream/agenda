$(function() {
  $('.main-video-slider__list').slick({
    dots: false,
    arrows: true,
		infinite: true,
		slidesToScroll: 2,
		slidesToShow: 2,
		accessibility: true,
		variableWidth: false,
		focusOnSelect: false,
		centerMode: false,
    prevArrow: $('.main-video-slider__prev'),
    nextArrow: $('.main-video-slider__next'),
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToScroll: 2,
					slidesToShow: 2
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToScroll: 1,
					slidesToShow: 1
				}
			}
		]
  });
});  