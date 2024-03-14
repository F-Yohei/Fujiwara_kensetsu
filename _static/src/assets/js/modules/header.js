import jQuery from 'jquery';
const $ = jQuery;

/*==============================================================
header
・スクロール時のアニメーション
==============================================================*/

var beforePos = 0;

function ScrollAnime() {
  var elemTop = $('#js-top').offset().top;
  var scroll = $(window).scrollTop();
  if (scroll == beforePos) {
  } else if (elemTop > scroll || 0 > scroll - beforePos) {
    $('.l-header').removeClass('js-hide');
    $('.l-header').addClass('js-view');
  } else {
    $('.l-header').removeClass('js-view');
    $('.l-header').addClass('js-hide');
  }

  beforePos = scroll;
}

$(window).scroll(function () {
  ScrollAnime();
});
