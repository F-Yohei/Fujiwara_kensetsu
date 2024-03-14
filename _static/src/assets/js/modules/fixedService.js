/*==============================================================
fixedService
・背景と文字の固定
==============================================================*/

const area = document.querySelector(".p-fixed-bg");
const panels = document.querySelectorAll(".p-fixed-bg__area");
const panelText = document.querySelectorAll(".p-service__inner");
const panelImg = document.querySelectorAll(".p-fixed-bg__img");
const length = panels.length;

const itemSwitch = (progress) => {
  const snapVal = gsap.utils.snap(1, progress * length - 0.5); //0 , 1 , 2...length
  const clampVal = gsap.utils.clamp(0, length - 1, snapVal); //0 ～ length -1 の間に収める
  panels.forEach((panel, index) => {
    if (index == clampVal) {
      panel.classList.add("is-active");
    } else {
      panel.classList.remove("is-active");
    }
  });
  panelText.forEach((text, index) => {
    if (index == clampVal) {
      text.classList.add("is-active");
    } else {
      text.classList.remove("is-active");
    }
  });
  panelImg.forEach((img, index) => {
    if (index == clampVal) {
      img.classList.add("is-active");
    } else {
      img.classList.remove("is-active");
    }
  });
};

itemSwitch(0);

ScrollTrigger.create({
  trigger: area,
  start: "top",
  end: "+=500%",
  scrub: true,
  pin: true,
  // markers: true,
  onUpdate: (self) => {
    itemSwitch(self.progress);
  },
});
