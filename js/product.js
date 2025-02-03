var slider = tns({
  container: '.carousel_alike',
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
  controlsContainer: '.carousel_alike__arrows',
  gutter: 10
});

var slider = tns({
  container: '.carousel_addon',
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
  controlsContainer: '.carousel_addon__arrows',
  gutter: 10
});

// Скролл к характеристикам
const $link = document.querySelector('.product__options__summary__more');
const $tab_content = document.querySelector('.product__tabs');
$link.addEventListener('click', e => {
  $tab_content.scrollIntoView({ 
    behavior: 'smooth'
  });
});