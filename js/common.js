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

$('.article-slider').slick({
  slidesToShow: 3,
  prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});

$('.certificates-slider').slick({
  slidesToShow: 2,
  prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});


$(function () {
  $('.advantages-box').each(function () {
    let $this = $(this);
    let paragraphs = $this.find('.advantages-box__body > .box-text p');

    // Проверяем, больше ли 1 абзацев
    if (paragraphs.length > 1) {
      // Скрываем абзацы после второго
      paragraphs.slice(1).wrapAll('<div class="hidden-text" style="display:none;"></div>');

      // Добавляем кнопку
      $this.find('.advantages-box__body .box-text').append(`
        <a href="#" class="link-toggle-text color-accent">
          <span>Читать далее</span>
          <svg class="svg-icon">
            <use xlink:href="img/sprite.svg#arrow-bottom"></use>
          </svg>
        </a>
      `);
    }
  });

  // Обработчик клика на кнопку
  $(document).on('click', '.link-toggle-text', function (e) {
    e.preventDefault();

    let $btn = $(this);
    let $hiddenText = $btn.siblings('.hidden-text');

    $hiddenText.slideToggle(300);

    // Меняем текст кнопки
    if ($btn.hasClass('active')) {
      $btn.removeClass('active').find('span').text('Читать далее');
      // $btn.find('use').attr('xlink:href', 'img/sprite.svg#arrow-bottom');
    } else {
      $btn.addClass('active').find('span').text('Скрыть');
      // $btn.find('use').attr('xlink:href', 'img/sprite.svg#arrow-top');
    }
  });
});


//auto counter total//
let homeSlider = $('.home-slider');

$('.counter-slide__default').text("/" + homeSlider.slick("getSlick").slideCount);

homeSlider.on('afterChange', function (event, slick, currentSlide) {
  $(".counter-slide__cp").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
});

// jQuery код
$(document).ready(function () {
  $('.btn-burger').on('click', function (e) {
    e.stopPropagation(); // предотвратить закрытие меню при клике на кнопку
    $('.nav-menu').toggleClass('active');
  });

  $('.nav-menu').on('click', function (e) {
    e.stopPropagation(); // предотвратить закрытие при клике внутри меню
  });

  $(document).on('click', function () {
    $('.nav-menu').removeClass('active');
  });
});

// toggle card hidden
$('.btn-toggle').on('click', function (e) {
  e.preventDefault();
  $(this).parents('.row').find('.toggle-card-col:hidden').fadeIn();
  var onBlock = $(this).parents('.row').find('.toggle-card-col:hidden').length;
  if (onBlock <= 0) {
    $(this).hide();
  }
});