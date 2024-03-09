import jQuery from "jquery";
const $ = jQuery;

require("./modules/headerMove");
require("./modules/humburgerBtn");
require("./modules/mvHeight");
require("./modules/loading");
require("./modules/subMenu");
require("./modules/kvOverlay");
require("./modules/fixedButton");
require("./modules/parallaxImg");
require("./modules/triggerAnimation");
require("./modules/sectionTitle");
require("./modules/homeSlider");
require("./modules/sliderCursor");
require("./modules/slideNumber");
require("./modules/homeCatch");
require("./modules/fixedService");

$(function () {
  var headerHeight = $(".l-header").outerHeight(); // ヘッダーのクラス
  var urlHash = location.hash;
  if (urlHash) {
    $("body,html").stop().scrollTop(0);
    setTimeout(function () {
      var target = $(urlHash);
      var position = target.offset().top - headerHeight;

      $("body,html").stop().animate({ scrollTop: position }, 500);
    }, 100);
  }
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href);
    var position = target.offset().top - headerHeight;

    $("body,html").stop().animate({ scrollTop: position }, 500);

    return false;
  });
});
