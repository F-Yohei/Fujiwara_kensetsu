import jQuery from "jquery";
const $ = jQuery;

/*==============================================================
header
・スクロール時のアニメーション
==============================================================*/

// var beforePos = 0;

// function ScrollAnime() {
//   var elemTop = $("#js-top").offset().top;
//   var scroll = $(window).scrollTop();
//   if (scroll == beforePos) {
//   } else if (elemTop > scroll || 0 > scroll - beforePos) {
//     $(".l-header").removeClass("js-hide");
//     $(".l-header").addClass("js-view");
//   } else {
//     $(".l-header").removeClass("js-view");
//     $(".l-header").addClass("js-hide");
//   }

//   beforePos = scroll;
// }

// $(window).scroll(function () {
//   ScrollAnime();
// });

$(window).on("load resize", function () {
  let winW = $(window).width();
  let devW = 1025;
  if (winW <= devW) {
    //1024px以下の時の処理
    return;
  } else {
    //1025pxより大きい時は何もしない
    var beforePos = 0;

    function ScrollAnime() {
      var elemTop = $("#js-top").offset().top;
      var scroll = $(window).scrollTop();
      if (scroll == beforePos) {
      } else if (elemTop > scroll || 0 > scroll - beforePos) {
        $(".l-header").removeClass("js-hide");
        $(".l-header").addClass("js-view");
      } else {
        $(".l-header").removeClass("js-view");
        $(".l-header").addClass("js-hide");
      }

      beforePos = scroll;
    }

    $(window).scroll(function () {
      ScrollAnime();
    });
  }
});
