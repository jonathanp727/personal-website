import $ from 'jquery';
import anime from 'animejs';

let isScrolling = false;
function autoScroll(e) {
  if(isScrolling)
    return;
  if(e.originalEvent.wheelDelta > 0 && $(this).attr('class') === 'content-cont') {
    isScrolling = true;
    $('html').animate({
      scrollTop: 0
    }, 1000, function (e) {
      isScrolling = false;
    });
  }
  else if ($(this).attr('class') === 'intro-cont') {
    isScrolling = true;
    $('html').animate({
      scrollTop: $('.intro-cont').get(0).scrollHeight
    }, 1000, function (e) {
      isScrolling = false;
    });
  }
}

$(document).ready(function(){
  $('html, body').on('mousewheel DOMMouseScroll', (e) => {return false;});
  $('.intro-cont').on('mousewheel DOMMouseScroll', autoScroll);
  $('.content-cont').on('mousewheel DOMMouseScroll', autoScroll);

  // animation by Julien Garnier
  var pathEls = document.querySelectorAll('path');
  for (var i = 0; i < pathEls.length; i++) {
    var pathEl = pathEls[i];
    var offset = anime.setDashoffset(pathEl);
    pathEl.setAttribute('stroke-dashoffset', offset);
    anime({
      targets: pathEl,
      strokeDashoffset: [offset, 0],
      duration: anime.random(1000, 3000),
      delay: anime.random(0, 2000),
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
      autoplay: true
    });
  }
});
