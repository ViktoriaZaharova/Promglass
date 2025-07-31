$('[name="phone"]').mask('+7 (999) 999-99-99');

// Fancybox
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

// sliders
$('.history-company-slider').slick({
  slidesToShow: 1,
  fade: true,
  prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
});

$('.home-slider').slick({
  slidesToShow: 1,
  fade: true,
  appendArrows: '.home-slider__nav',
  prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
});
//auto counter total//
let homeSlider = $('.home-slider');

$('.counter-slide__default').text("/" + homeSlider.slick("getSlick").slideCount);

homeSlider.on('afterChange', function (event, slick, currentSlide) {
  $(".counter-slide__cp").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
});