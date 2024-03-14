/*==============================================================
  homeSliderText
  ・TOP KVテキストのディレイ
==============================================================*/

$('.js-slider-text .p-home-slider__engText').each(function () {
  var letters = $(this).closest('.p-home-slider__engWrap').find('.p-home-slider__engText');
  var index = $(letters).index(this);
  var time = index * 0.03; // ずらす間隔
  $(this).css('animation-delay', time + 's');
});
