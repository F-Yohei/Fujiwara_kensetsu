/*==============================================================
  kvOverlay
  ・スクロールに応じて徐々に白く（TOP）
==============================================================*/

const overlay = gsap.timeline({
  scrollTrigger: {
    trigger: ".js-trigger-section",
    start: "top bottom",
    end: "top-=100 top",
    scrub: true,
    markers: false,
  },
});
overlay.fromTo(".p-overlay", { opacity: 0 }, { opacity: 1 });
