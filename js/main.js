const burgerButton = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.header__menu');

burgerButton.addEventListener('click', function() {
    burgerMenu.style.right = '0';
})

const burgerClose = document.querySelector('.header__burger-close');

burgerClose.addEventListener('click', function() {
    burgerMenu.style.right = '-400px';
})

$('.responsive').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});



const sliderPrevButton = document.querySelector('.slick-prev');
const sliderNextButton = document.querySelector('.slick-next');

sliderNextButton.addEventListener('click', function() {
    sliderPrevButton.style.opacity = '0.75'
    sliderNextButton.style.opacity = '1'
});


sliderPrevButton.addEventListener('click', function() {
    sliderNextButton.style.opacity = '0.75'
    sliderPrevButton.style.opacity = '1'
});
