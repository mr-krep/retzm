var slider = tns({
  container: '.carousel_alike',
  responsive: {
    "840": {
      fixedWidth: 262,
      items: 3
    }
  },
  fixedWidth: 200,
  items: 2,
  loop: false,
  mouseDrag: true,
  nav: false,
  controls: true,
  controlsContainer: '.carousel_alike__arrows',
  gutter: 10
});