
  $(document).ready(function() {
    $('.client-slider-inner').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 6,
          nav: false,
          margin: 20
        }
      }
    });
});

