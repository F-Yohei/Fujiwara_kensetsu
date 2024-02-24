/*==============================================================
  slideNumber
  ・TOP Worksスライダーの番号
==============================================================*/

// スライド総数と現在のスライド番号の表示
export function SlideNumber(Splide, Components) {
  const { track } = Components.Elements;

  let elm;

  function mount() {
    elm = document.createElement("div");
    elm.style.textAlign = "center";
    elm.setAttribute("class", "p-home-works__slideNumber");

    track.parentElement.insertBefore(elm, track.nextSibling);

    update();
    Splide.on("move", update);
  }

  function update() {
    elm.innerHTML = `
    <div class="p-home-works__slideNumberInner">
    <div class="-number">0${Splide.index + 1}</div>
     <span class="-slash">/</span>
    <div class="-all">0${Splide.length}</div>
    </div>`;
  }

  return {
    mount,
  };
}
