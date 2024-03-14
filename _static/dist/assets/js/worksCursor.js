/*==============================================================
  worksCursor
==============================================================*/

const cursor = document.getElementById('js-cursor-img'),
  chaser = document.getElementById('js-chaser-img'),
  target01 = document.querySelector('.js-works-cursor01'),
  target02 = document.querySelector('.js-works-cursor02'),
  target03 = document.querySelector('.js-works-cursor03'),
  targetImg01 = document.querySelector('.js-cursor-img01'),
  targetImg02 = document.querySelector('.js-cursor-img02'),
  targetImg03 = document.querySelector('.js-cursor-img03'),
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
target01.onmouseover = function () {
  cursor.classList.add('is-active');
  chaser.classList.add('is-active');
  body.classList.add('is-active');
  targetImg01.classList.add('is-active');
};

target02.onmouseover = function () {
  cursor.classList.add('is-active');
  chaser.classList.add('is-active');
  body.classList.add('is-active');
  targetImg02.classList.add('is-active');
};

target03.onmouseover = function () {
  cursor.classList.add('is-active');
  chaser.classList.add('is-active');
  body.classList.add('is-active');
  targetImg03.classList.add('is-active');
};

// マウスアウト時の処理
target01.onmouseout = function () {
  cursor.classList.remove('is-active');
  chaser.classList.remove('is-active');
  targetImg01.classList.remove('is-active');
  body.classList.remove('is-active');
};

target02.onmouseout = function () {
  cursor.classList.remove('is-active');
  chaser.classList.remove('is-active');
  targetImg02.classList.remove('is-active');
  body.classList.remove('is-active');
};

target03.onmouseout = function () {
  cursor.classList.remove('is-active');
  chaser.classList.remove('is-active');
  targetImg03.classList.remove('is-active');
  body.classList.remove('is-active');
};
