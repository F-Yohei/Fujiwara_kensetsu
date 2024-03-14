/*==============================================================
  moreButton
  ・Worksページ「もっと見るボタン」
==============================================================*/

import jQuery from 'jquery';
const $ = jQuery;

// 最初に表示させておくリストの数を指定します。
var moreNum = 9;

$('.p-works-archive__item:nth-child(n + ' + (moreNum + 1) + ')').addClass('is-hidden');

$('.c-list-button').on('click', function () {
  $('.p-works-archive__item.is-hidden').slice(0, moreNum).removeClass('is-hidden');
  if ($('.p-works-archive__item.is-hidden').length == 0) {
    $('.c-list-button').fadeOut();
  }
});

$(function () {
  var list = $('.p-works-archive__item').length;
  if (list < moreNum) {
    $('.c-list-button').addClass('is-btn-hidden');
  }
});
