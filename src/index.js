import $ from 'jquery';
import anime from 'animejs';

// animations
let downarrow;

let isScrolling = false;
function autoScroll(e) {
  if(isScrolling)
    return;
  if(e.originalEvent.wheelDelta > 0 && $(this).attr('class') === 'content-cont') {
    playPopOutAnimation();
    isScrolling = true;
    $('html').animate({
      scrollTop: 0
    }, 1000, function (e) {
      isScrolling = false;
      downarrow.play();
    });
  }
  else if ($(this).attr('class') === 'intro-cont') {
    isScrolling = true;
    playPopOutAnimation();
    $('html').animate({
      scrollTop: $('.intro-cont').get(0).scrollHeight
    }, 1000, function (e) {
      isScrolling = false;
      downarrow.pause();
    });
  }
}

function playPopOutAnimation() {
  console.log('toggle');
  $('.subcont').toggleClass('boxshadow');
}

$(document).ready(function(){
  $('html, body').on('mousewheel DOMMouseScroll', (e) => {return false;});
  $('.intro-cont').on('mousewheel DOMMouseScroll', autoScroll);
  $('.content-cont').on('mousewheel DOMMouseScroll', autoScroll);

  downarrow = anime({
    targets: '.down-arrow',
    translateY: -10,
    duration: 1500,
    easing: 'easeInQuad',
    direction: 'alternate',
    loop: true
  })

  $('.down-arrow').on('click', function(e) {
    downarrow.pause();
    playPopOutAnimation();
    $('html').animate({
      scrollTop: $('.intro-cont').get(0).scrollHeight
    }, 1000);
  });


});
