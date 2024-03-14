/*==============================================================
  sectionTitle
  ・各見出しテキストディレイ
==============================================================*/

import jQuery from 'jquery';
const $ = jQuery;

$('.js-title .l-section__titleText').each(function () {
  var letters = $(this).closest('.l-section__titleTextWrap').find('.l-section__titleText');
  var index = $(letters).index(this);
  var time = index * 0.03;
  $(this).css('animation-delay', time + 's');
});
