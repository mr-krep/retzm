/* TMP */
function OneClick_form(element) {
  document.querySelector('.'+element+'__container__form').style.display = 'none';
  document.querySelector('.'+element+'__result').style.display = 'flex';
}
function Review_form(element) {
  document.querySelector('.'+element+'__container__form').style.display = 'none';
  document.querySelector('.'+element+'__result').style.display = 'flex';
}
function Check_authorization_code(element) {
  document.querySelector('.'+element+'__container').style.display = 'none';
  document.querySelector('.'+element+'__container__check_code').style.display = 'grid';
}

/* Проверяем клики, запускаем закрытие модального окна и завершение прослушки */
function ListenPopupClicks(element)
{
  if (!element.closest('.popup__container') && !element.closest('.popup__opener')){closeDialog ()}
}
/* Открываем модальноео окно и включаем прослушку кликов */
function openDialog(item){
  window.addEventListener('click', function(e){ListenPopupClicks(e.target)})
  document.getElementById(item).showModal()
}

/* Закрываем модальное окно и отключаем прослушку кликов */
function closeDialog (){
  const elements = document.querySelectorAll("dialog")
  elements.forEach((item, index, arr) => {document.querySelectorAll("dialog")[index].close()})
  window.removeEventListener('click', ListenPopupClicks)
}

/* Tooltip c корзиной */
document.querySelector('.link_icon--cart').addEventListener('click', () => {
  document.querySelector('.header__bottom__container__column__services__item__cart_tooltip').style.display = (document.querySelector('.header__bottom__container__column__services__item__cart_tooltip').style.display == 'flex') ? 'none' : 'flex'
})

class HvrSlider {
  constructor(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      const hvr = document.createElement('div');
      hvr.classList.add('hvr');

      const hvrImages = document.createElement('div');
      hvrImages.classList.add('hvr__images');
      hvr.appendChild(hvrImages);

      const hvrSectors = document.createElement('div');
      hvrSectors.classList.add('hvr__sectors');
      hvrImages.appendChild(hvrSectors);

      const hvrDots = document.createElement('div');
      hvrDots.classList.add('hvr__dots');
      hvr.appendChild(hvrDots);

      el.parentNode.insertBefore(hvr, el);
      hvrImages.prepend(el);

      if (el.querySelectorAll('img').length > 1) {

        const hvrImagesArray = hvr.querySelectorAll('img');
        hvrImagesArray.forEach(() => {
          hvrSectors.insertAdjacentHTML('afterbegin', '<div class="hvr__sector"></div>');
          hvrDots.insertAdjacentHTML('afterbegin', '<div class="hvr__dot"></div>');
        });
        hvrDots.firstChild.classList.add('hvr__dot--active');
        const setActiveEl = function (targetEl) {
          const index = [...hvrSectors.children].indexOf(targetEl);
          hvrImagesArray.forEach((img, idx) => {
            if (index == idx) {
              img.style.display = 'block';
            } else {
              img.style.display = 'none';
            }
          });
          hvr.querySelectorAll('.hvr__dot').forEach((dot, idx) => {
            if (index == idx) {
              dot.classList.add('hvr__dot--active');
            } else {
              dot.classList.remove('hvr__dot--active');
            }
          });
        };

        hvrSectors.addEventListener('mouseover', function (e) {
          if (e.target.matches('.hvr__sector')) {
            setActiveEl(e.target);
          }
        });
        hvrSectors.addEventListener('touchmove', function (e) {
          const position = e.changedTouches[0];
          const target = document.elementFromPoint(position.clientX, position.clientY);
          if (target.matches('.hvr__sector')) {
            setActiveEl(target);
          }
        });

      }
    });
  }
}

var slider = tns({
  container: '.popup_search__suggestions__container__list',
  responsive: {
    "1350": {
      fixedWidth: 210,
      items: 6
    }
  },
  fixedWidth: 200,
  items: 2,
  loop: true,
  mouseDrag: true,
  nav: false,
  controls: true,
  controlsContainer: '.popup_search__suggestions__container__arrows',
  gutter: 10
});