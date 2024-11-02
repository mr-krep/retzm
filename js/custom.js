const swiper_banner = new Swiper('.banner', {
  autoplay: {delay: 5000},
  loop: true,
  lazyPreloadPrevNext: 1,
  wrapperClass: 'banner__container',
  slideClass: 'banner__container__item',
  slideActiveClass: 'banner__container__item--active',
  pagination: {
    el: '.banner__pagination',
    bulletClass: 'banner__pagination__bullet',
    bulletActiveClass: 'banner__pagination__bullet--active',
    clickable: true
  },
  navigation: {
    nextEl: '.banner__nav_buttons-next',
    prevEl: '.banner__nav_buttons-prev',
  },
});