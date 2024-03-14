/*==============================================================
  TOP Worksのマウスストーカー
==============================================================*/

const cursor = document.getElementById('js-cursor'),
  chaser = document.getElementById('js-chaser'),
  target = document.querySelector('.p-home-works__sliderTrack'),
  body = document.querySelector('.js-body');
let delay = 10,
  cursorPosX = 0,
  cursorPosY = 0,
  chaserPosX = 0,
  chaserPosY = 0;

// カーソルの遅延アニメーション
TweenMax.to({}, 0.001, {
  repeat: -1,
  onRepeat: function () {
    chaserPosX += (cursorPosX - chaserPosX) / delay;
    chaserPosY += (cursorPosY - chaserPosY) / delay;

    TweenMax.set(cursor, {
      css: {
        left: cursorPosX - cursor.clientWidth / 2,
        top: cursorPosY - cursor.clientWidth / 2,
      },
    });

    TweenMax.set(chaser, {
      css: {
        left: chaserPosX - chaser.clientWidth / 2,
        top: chaserPosY - chaser.clientWidth / 2,
      },
    });
  },
});

// マウス座標を取得
document.onmousemove = function (event) {
  cursorPosX = event.pageX;
  cursorPosY = event.pageY;
};

// マウスオーバー時の処理
target.onmouseover = function () {
  cursor.classList.add('is-active');
  chaser.classList.add('is-active');
  body.classList.add('is-active');
};

// マウスアウト時の処理
target.onmouseout = function () {
  cursor.classList.remove('is-active');
  chaser.classList.remove('is-active');
  body.classList.remove('is-active');
};
