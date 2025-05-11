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
    productPreviews.forEach(function (PreviewsImg) {
          PreviewsImg.classList.remove('product__gallery__preview__list__item__image--active');
        });
        document.querySelector('.product__gallery__big__item--active').classList.remove('product__gallery__big__item--active')
        e.target.classList.add('product__gallery__preview__list__item__image--active');
        document.querySelector('[data-image="'+image_id+'"]').classList.add('product__gallery__big__item--active')
        
    };
});


/**
 * Слайдер с превью, стрелками, автопрокруткой
 */
const slides = document.querySelector('.popup_gallery__wrapper__big')
const slideCount = document.querySelectorAll('.popup_gallery__wrapper__big__item').length // Количество слайдов
const prevButton = document.querySelector('.product__gallery__preview__arrows__left')
const nextButton = document.querySelector('.product__gallery__preview__arrows__right')
const gallery = document.querySelector('.popup_gallery__wrapper')
let galleryPreviews = document.querySelectorAll('.popup_gallery__wrapper__preview__list__item') // массив превью картинок

let currentIndex = 0 // Текущий индекс слайда

/* Функция смены слайда. @param {number} index - Индекс слайда, на который нужно перейти. */
function goToSlide(index) {
    var current_img = document.querySelector('[data-popup_image="'+currentIndex+'"]')
    var current_preview = document.querySelector('[data-popup_preview="'+currentIndex+'"]')

    var index = index % slideCount
    if (index < 0) {index = index + slideCount}

    var new_img = document.querySelector('[data-popup_image="'+index+'"]')
    var new_preview = document.querySelector('[data-popup_preview="'+index+'"]')

    current_preview.classList.remove('active')
    new_preview.classList.add('active')

    currentIndex = index
    slides.style.transform = `translateX(${-index * 100}%)` // Смещение слайдов
}
// Обработчик кликов на превью
galleryPreviews.forEach(function (img) {
    img.onclick = function(e) {
    var image_id = e.target.getAttribute('data-popup_preview')
    goToSlide(image_id)
  }
})
// Обработчики кликов для кнопок
prevButton.addEventListener('click', () => goToSlide(currentIndex - 1))
nextButton.addEventListener('click', () => goToSlide(currentIndex + 1))

// Обработчики свайпов для мобильной версии
document.querySelector('.popup_gallery__wrapper__big').addEventListener('swiped', function(e) {
  if ( e.detail.dir == 'right' ) {goToSlide(currentIndex - 1)}
  else if ( e.detail.dir == 'left' ) {goToSlide(currentIndex + 1)}
})

document.querySelectorAll('.product__gallery__big__item__image').forEach(el => 
  el.onclick = function() {
    document.getElementById('Gallery').showModal()
  }
)