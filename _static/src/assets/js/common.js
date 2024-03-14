import jQuery from "jquery";
const $ = jQuery;

require("./modules/header");
require("./modules/humburgerBtn");
require("./modules/parallaxImg");
require("./modules/sectionTitle");
require("./modules/subMenu");
require("./modules/triggerAnimation");

// smooth scroll
$(function () {
  var headerHeight = $(".l-header").outerHeight();
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
