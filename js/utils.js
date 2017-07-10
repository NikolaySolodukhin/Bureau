'use strict';

window.slider = (function() {

  var reviewSlider = document.querySelector('.reviews-slider');
  var slider = document.querySelector('.slider');

  if (reviewSlider && slider) { // Для работы слайдеров только на главной
    var reviewSliderList = reviewSlider.querySelector('.reviews');
    var reviewSliderCount = reviewSliderList.children.length;
    var translateSliderWidth = 1200;
    var reviewSliderButtonNext = reviewSlider.querySelector('.slider-toggle__button--next');
    var reviewSliderButtonPrev = reviewSlider.querySelector('.slider-toggle__button--prev');
    var reviewsHidden = 'reviews__item--hidden';

    var sliderList = slider.querySelector('.slider__list');
    var sliderCount = sliderList.children.length;
    var sliderButtonNext = slider.querySelector('.slider-toggle__button--next');
    var sliderButtonPrev = slider.querySelector('.slider-toggle__button--prev');
    var quoteHidden = 'quote--hidden';

    document.addEventListener('DOMContentLoaded', function() {

      function nextSlide(buttonPrev, classHidden, numberSlide, listSlider) {
        for (var i = 0; i < numberSlide; i++) {
          if (!listSlider.children[i].classList.contains(classHidden)) {
            //Делаем активную кнопку назад при пролистовании слайдера вперед
            if ( i === 0) {
              buttonPrev.removeAttribute('disabled');
            }
            var sliderItem = listSlider.children[i];
            var sliderItemNext = i < (numberSlide - 1) ? listSlider.children[ i + 1] : listSlider.children[0];

            sliderItem.style.transform = 'translate(' + translateSliderWidth + 'px, 0)';
            sliderItem.classList.add(classHidden);
            sliderItemNext.classList.remove(classHidden);
            sliderItemNext.style.transform = 'translate(' + 0 + 'px, 0)';
            break;
          }
        }
      }

      function prevSlide(buttonPrev, classHidden, numberSlide, listSlider) {
        for (var i = 0; i < numberSlide; i++) {
          if (!listSlider.children[i].classList.contains(classHidden)) {
            //Делаем неактивную кнопку назад при начале слайдера
            if (i === 0 ) {
              buttonPrev.setAttribute('disabled', 'disabled');
              break;
            }
            var sliderItem = listSlider.children[i];
            var sliderItemPrev = listSlider.children[ i - 1];

            sliderItem.style.transform = 'translate(' + -translateSliderWidth + 'px, 0)';
            sliderItem.classList.add(classHidden);
            sliderItemPrev.classList.remove(classHidden);
            sliderItemPrev.style.transform = 'translate(' + 0 + 'px, 0)';
            break;
          }
        }
      }

      sliderButtonNext.addEventListener('click', function(evt) {
        evt.preventDefault();
        nextSlide(sliderButtonPrev, quoteHidden, sliderCount, sliderList);
      });
      sliderButtonPrev.addEventListener('click', function(evt) {
        evt.preventDefault();
        prevSlide(sliderButtonPrev, quoteHidden, sliderCount, sliderList);
      });

      reviewSliderButtonNext.addEventListener('click', function(evt) {
        evt.preventDefault();
        nextSlide(reviewSliderButtonPrev, reviewsHidden, reviewSliderCount, reviewSliderList);
      });
      reviewSliderButtonPrev.addEventListener('click', function(evt) {
        evt.preventDefault();
        prevSlide(reviewSliderButtonPrev, reviewsHidden, reviewSliderCount, reviewSliderList);
      });
    });
  }
})();
