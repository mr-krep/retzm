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
  fixedWidth: 262,
  items: 5,
  loop: false,
  mouseDrag: true,
  nav: false,
  controls: true,
  controlsContainer: '.suggestions__container__nav_buttons',
  gutter: 10
});