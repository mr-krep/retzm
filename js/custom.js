/* TMP для более удобного тестирования */
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
function Problem_form(element) {
  document.querySelector('.'+element+'__container__form').style.display = 'none';
  document.querySelector('.'+element+'__result').style.display = 'flex';
}
/* end TMP для более удобного тестирования */

/* Проверяем клики, запускаем закрытие модального окна и завершение прослушки */
function ListenPopupClicks(element)
{
  if (!element.closest('.popup__container') && !element.closest('.popup__opener')){closeDialog ()}
}
/* Открываем модальноео окно и включаем прослушку кликов */
function openDialog(item, DialogType=""){
  const elements = document.querySelectorAll("dialog")
  elements.forEach((item, index, arr) => {document.querySelectorAll("dialog")[index].close()})
  // window.scrollPosition = window.scrollY
  // window.scrollTo(0, 0)
  window.addEventListener('click', function(e){ListenPopupClicks(e.target)})
  if (typeof DialogType != undefined && DialogType == 'popup') document.getElementById(item).show()
  else document.getElementById(item).showModal()
  return true
}

/* Закрываем модальное окно и отключаем прослушку кликов */
function closeDialog (){
  if (typeof window.scrollPosition == undefined) window.scrollPosition = 0
  const elements = document.querySelectorAll("dialog")
  // window.scrollTo(0, window.scrollPosition)
  elements.forEach((item, index, arr) => {document.querySelectorAll("dialog")[index].close()})
  window.removeEventListener('click', ListenPopupClicks)
  // window.scrollPosition = undefined
  return true
}

/* Одноразовые попапы */

function closePopup(element){
  document.querySelector('.'+element).style.display = 'none';
}

/* попап при наведении на категорию в меню */
function openCategoryPopup (category) {
  document.querySelector('#category__' + category).style.display = 'block'
}
function closeCategoryPopup (category) {
  document.querySelector('#category__' + category).style.display = ''
}

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

var slider = tns({
  container: '#category__headphones__suggestions',
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
  controlsContainer: '#category__headphones__arrows',
  gutter: 10
});

var slider = tns({
  container: '#category__mouse__suggestions',
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
  controlsContainer: '#category__mouse__arrows',
  gutter: 10
});

var slider = tns({
  container: '#category__keyboard__suggestions',
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
  controlsContainer: '#category__keyboard__arrows',
  gutter: 10
});

var slider = tns({
  container: '#category__acoustic__suggestions',
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
  controlsContainer: '#category__acoustic__arrows',
  gutter: 10
});

var slider = tns({
  container: '#category__microphone__suggestions',
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
  controlsContainer: '#category__microphone__arrows',
  gutter: 10
});

var slider = tns({
  container: '#category__monitor__suggestions',
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
  controlsContainer: '#category__monitor__arrows',
  gutter: 10
});

var slider = tns({
  container: '#category__accessories__suggestions',
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
  controlsContainer: '#category__accessories__arrows',
  gutter: 10
});

var slider = tns({
  container: '#category__parts__suggestions',
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
  controlsContainer: '#category__parts__arrows',
  gutter: 10
});