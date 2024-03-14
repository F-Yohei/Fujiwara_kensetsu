/*==============================================================
  recruitAccordion
  ・Recruitページのアコーディオン
==============================================================*/

import jQuery from 'jquery';
const $ = jQuery;

$('.p-recruit-faq__title').on('click', function () {
  var findElm = $(this).next('.p-recruit-faq__text');
  $(findElm).slideToggle();

  if ($(this).hasClass('close')) {
    $(this).removeClass('close');
    $(this).addClass('open');
  } else {
    $(this).addClass('close');
    $(this).removeClass('open');
  }
});
