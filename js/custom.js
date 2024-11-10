// const swiper_banner = new Swiper('.banner', {
//   autoplay: {delay: 5000},
//   loop: true,
//   lazyPreloadPrevNext: 1,
//   wrapperClass: 'banner__container',
//   slideClass: 'banner__container__item',
//   slideActiveClass: 'banner__container__item--active',
//   pagination: {
//     el: '.banner__pagination',
//     bulletClass: 'banner__pagination__bullet',
//     bulletActiveClass: 'banner__pagination__bullet--active',
//     clickable: true
//   },
//   navigation: {
//     nextEl: '.banner__nav_buttons-next',
//     prevEl: '.banner__nav_buttons-prev',
//   },
// });

var slider = tns({
  container: '.banner__container',
  items: 1,
  mouseDrag: true,
  controls: true,
  nav: true,
  navAsThumbnails: true,
  navContainer: '.banner__dots',
  controlsContainer: '.banner__nav_buttons'
});

var slider = tns({
  container: '.brands__list',
  items: 8,
  autoWidth: true,
  gutter: 20,
  mouseDrag: true,
  controls: true,
  nav: false,
  controlsContainer: '.brands__nav_buttons'
});

var slider = tns({
  container: '.suggestions__container__list',
  nested: 'outer',
  items: 5,
  loop: false,
  mouseDrag: true,
  nav: false,
  controls: true,
  controlsContainer: '.suggestions__container__nav_buttons'
});
 
var product_sliders = document.getElementsByClassName('suggestions__container__list__item__images');
for (var i=0; i< product_sliders.length; i++ ) {
  var slider = tns({
    container: '#' + product_sliders[i].id,
    nested: 'inner',
    items: 1,
    mouseDrag: false,
    controls: false,
    nav: true,
    navAsThumbnails: true,
    navContainer: '#' + product_sliders[i].id + '-dots',
  });
}