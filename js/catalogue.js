new HvrSlider('.catalogue__products__list__item__slider__link__images');

document.querySelector('.catalogue__filters_mobile__link').addEventListener('click', () => {
  document.querySelector('.catalogue__filters').showModal()
  document.body.style.overflowY = 'hidden'
})

document.querySelector('.catalogue__filters__container__heading__close').addEventListener('click', () => {
  document.querySelector('.catalogue__filters').close()
  document.body.style.overflowY = 'auto'
})

document.querySelector('.catalogue__sorting__active').addEventListener('click', () => {
  document.querySelector('.catalogue__sorting__select').style.display = (document.querySelector('.catalogue__sorting__select').style.display == 'flex') ? 'none' : 'flex'
})