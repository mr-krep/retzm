document.querySelector('.product__gallery').addEventListener('click', function(e){
  if ( e.target.classList.contains('product__gallery__preview__list__item__image') ){
    var image_id = e.target.getAttribute('data-preview')
    var preview = document.getElementsByClassName('product__gallery__preview__list__item__image')

    document.querySelector('.product__gallery__big__item--active').classList.remove('product__gallery__big__item--active')
    document.querySelector('[data-image="'+image_id+'"]').classList.add('product__gallery__big__item--active')
    
    document.querySelector('.product__gallery__preview__list__item__image--active').classList.remove('product__gallery__preview__list__item__image--active')
    e.target.classList.add('product__gallery__preview__list__item__image--active')
  }
})


var slider_preview = tns({
  container: '.product__gallery__preview__list',
  items: 5,
  loop: true,
  controls: true,
  controlsContainer: '.product__gallery__preview__arrows',
  axis: "vertical"
});

var slider_alike = tns({
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

var slider_addon = tns({
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