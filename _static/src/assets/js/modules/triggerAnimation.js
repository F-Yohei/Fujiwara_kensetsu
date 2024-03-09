// ローディング時のアニメーション
$(window).on("load", function () {
  $(".load").addClass("is-anim");
});

$(window).scroll(function () {
  $(".inview").each(function () {
    var hit = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var wHeight = $(window).height();

    if (scroll > hit - wHeight + wHeight / 7) {
      $(this).addClass("is-anim");
    }
  });
});
