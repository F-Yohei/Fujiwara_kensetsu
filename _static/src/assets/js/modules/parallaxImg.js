/*==============================================================
  parallaxImg
  ・画像のパララックス効果
==============================================================*/

// GSAP parallax
const targets = document.querySelectorAll(".js-parallax-img");

targets.forEach((target) => {
  gsap.fromTo(
    target.querySelector("img"),
    {
      y: -30,
      scale: 1.2,
    },
    {
      y: +30,
      ease: "none",
      scrollTrigger: {
        trigger: target, //アニメーションが始まるトリガーの設定
        start: "top bottom",
        end: "bottom top",
        scrub: 0,
        // markers: true,
      },
    }
  );
});
