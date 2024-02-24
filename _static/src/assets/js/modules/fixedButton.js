/*==============================================================
  fixedButton
  ・スマホの追従ボタン
==============================================================*/

ScrollTrigger.create({
  trigger: ".js-trigger-section",
  start: "top+=0 center",
  // markers: true,
  end: "bottom-=700 center",
  toggleClass: {
    targets: ".p-fixed-button",
    className: "is-active",
  },
});
