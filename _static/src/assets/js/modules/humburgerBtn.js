import jQuery from 'jquery';
const $ = jQuery;

/*==============================================================
  humburgerBtn
  ・ハンバーガーボタン
==============================================================*/
const hamburgerToggle = document.getElementById('js-hamburger-toggle');
const menu = document.getElementById('js-menu');
const body = document.getElementById('js-body');

hamburgerToggle.addEventListener('click', function () {
  hamburgerToggle.classList.toggle('is-active');
  menu.classList.toggle('is-active');
  body.classList.toggle('is-active');
});
