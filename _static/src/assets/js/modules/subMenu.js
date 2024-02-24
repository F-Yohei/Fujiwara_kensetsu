/*==============================================================
  subMenu
  ・ヘッダーのメガメニュー
==============================================================*/

$(function () {
  $(".js-submenu-trigger").hover(
    function () {
      $(this).find(".js-submenu").addClass("is-active");
      $(this).find(".js-submenu").removeClass("is-none");
    },
    function () {
      $(this).find(".js-submenu").removeClass("is-active");
      $(this).find(".js-submenu").addClass("is-none");
    }
  );
});
