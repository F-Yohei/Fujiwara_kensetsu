/*==============================================================
  loading
  ・ローディングアニメーション
==============================================================*/
// $(function () {
const loader = document.getElementById("js-loading");
const loaderLogo = document.getElementById("js-logo");
const loaderBg = document.getElementById("js-loading-bg");
const loaderText = document.getElementById("js-catch");
const loaderCatchText = document.getElementById("js-catch-text");
const loaderHeader = document.getElementById("js-header");
const loaderScroll = document.getElementById("js-scroll");

window.addEventListener("load", () => {
  const loadingLogo = 800; //ロゴフェードアウト
  const loadedBg = 1300; //緑背景表示
  const loadedText = 1800; //キャッチコピー表示
  const loaded = 3200; //ローディング終わり

  const loaderAddClass = function () {
    loaderLogo.classList.add("is-anim");
  };

  const loadedBgAdd = function () {
    loaderBg.classList.add("is-loaded-bgG");
  };

  const loadedTextAdd = function () {
    loaderText.classList.add("is-loaded-text");
  };

  const loadedAddClass = function () {
    loader.classList.add("is-loaded");
    loaderBg.classList.add("is-loaded");
    loaderCatchText.classList.add("is-loaded");
    loaderHeader.classList.add("is-loaded");
    loaderScroll.classList.add("is-loaded");
  };

  setTimeout(loaderAddClass, loadingLogo);
  setTimeout(loadedBgAdd, loadedBg);
  setTimeout(loadedTextAdd, loadedText);
  setTimeout(loadedAddClass, loaded);
});
