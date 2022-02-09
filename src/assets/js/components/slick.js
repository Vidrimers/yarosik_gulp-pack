//= ../../../../node_modules/slick-carousel/slick/slick.js
// https://github.com/kenwheeler/slick/

console.log("this is slick component");

let portfolio = $("#portfolio");

portfolio.slick({

  // normal options...
  arrows: false,
  dots: false,
  speed: 800,
  slidesToShow: 2,
  slidesToScroll: 2,

  // the magic
  // responsive: [{

  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 3,
  //       infinite: true
  //     }

  //   }, {

  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       dots: true
  //     }

  //   }, {

  //     breakpoint: 300,
  //     settings: "unslick" // destroys slick

  //   }]
});

$("#portfolio__arrow--prev").on("click", function (event) {
  event.preventDefault();

  portfolio.slick('slickPrev');
});
$("#portfolio__arrow--next").on("click", function (event) {
  event.preventDefault();

  portfolio.slick('slickNext');
});