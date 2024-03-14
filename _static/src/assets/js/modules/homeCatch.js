/*==============================================================
  homeCatch
  ・TOP kvキャッチコピーのディレイ
==============================================================*/

$('.js-catch .p-home-catch__engText').each(function () {
  var letters = $(this).closest('.p-home-catch__engWrap').find('.p-home-catch__engText');
  var index = $(letters).index(this);
  var time = index * 0.03;
  $(this).css('animation-delay', time + 's');
});
