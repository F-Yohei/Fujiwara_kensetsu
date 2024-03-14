/*==============================================================
  worksSticky
  ・Works詳細ページの項目→固定
==============================================================*/

ScrollTrigger.create({
  trigger: '.js-block01',
  start: 'top-=1200 center',
  // markers: true,
  end: 'bottom+=152 center',
  toggleClass: {
    targets: '.js-link01',
    className: 'is-active',
  },
});

ScrollTrigger.create({
  trigger: '.js-block02',
  start: 'top-=0 center',
  // markers: true,
  end: 'bottom+=152 center',
  toggleClass: {
    targets: '.js-link02',
    className: 'is-active',
  },
});

ScrollTrigger.create({
  trigger: '.js-block03',
  start: 'top-=0 center',
  // markers: true,
  end: 'bottom+=152 center',
  toggleClass: {
    targets: '.js-link03',
    className: 'is-active',
  },
});
