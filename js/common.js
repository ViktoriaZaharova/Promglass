$('[name="phone"]').mask('+7 (999) 999-99-99');

// Fancybox
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

// sliders
$('.history-company-slider').slick({
  slidesToShow: 1,
  fade: true,
  prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
});