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

/* Tooltip c гарантией */
document.querySelector('.product__guarantee__button').addEventListener('click', () => {
  document.querySelector('.product__guarantee__tooltip').style.display = (document.querySelector('.product__guarantee__tooltip').style.display == 'block') ? '' : 'block'
})

/* Галерея фото товара с превью */
let productPreviews = document.querySelectorAll('.product__gallery__preview__list__item__image');
productPreviews.forEach(function (img) {
    img.onclick = function(e) {
    var image_id = e.target.getAttribute('data-preview')
    console.log('image_id: ', image_id)
    productPreviews.forEach(function (PreviewsImg) {
          PreviewsImg.classList.remove('product__gallery__preview__list__item__image--active');
        });
        document.querySelector('.product__gallery__big__item--active').classList.remove('product__gallery__big__item--active')
        e.target.classList.add('product__gallery__preview__list__item__image--active');
        document.querySelector('[data-image="'+image_id+'"]').classList.add('product__gallery__big__item--active')
        
    };
});