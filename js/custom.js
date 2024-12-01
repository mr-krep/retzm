var slider = tns({
  container: '.banner__container',
  items: 1,
  lazyload: true,
  mouseDrag: true,
  controls: true,
  nav: true,
  navAsThumbnails: true,
  navContainer: '.banner__dots',
  controlsContainer: '.banner__arrows'
});

var slider = tns({
  container: '.brands__list',
  items: 8,
  autoWidth: true,
  gutter: 20,
  mouseDrag: true,
  controls: true,
  nav: false,
  controlsContainer: '.brands__arrows'
});

var slider = tns({
  container: '.suggestions__container__list',
  responsive: {
    "840": {
      fixedWidth: 262,
      items: 5
    }
  },
  fixedWidth: 200,
  items: 2,
  loop: false,
  mouseDrag: true,
  nav: false,
  controls: true,
  controlsContainer: '.suggestions__container__arrows',
  gutter: 10
});