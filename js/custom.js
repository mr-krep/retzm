const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  autoplay: {delay: 5000},
  lazyPreloadPrevNext: 1,

  // If we need pagination
  pagination: {
    // el: '.swiper-pagination'
    el: '.banner__pagination',
    bulletClass: 'banner__pagination__bullet',
    bulletActiveClass: 'banner__pagination__bullet--active',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.banner__nav_buttons-next',
    prevEl: '.banner__nav_buttons-prev',
  },
});
