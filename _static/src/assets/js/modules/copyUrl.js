import jQuery from 'jquery';
const $ = jQuery;

/*==============================================================
  copyUrl
  ・URLコピー機能
==============================================================*/

var clipboard = new ClipboardJS('.share-url');
clipboard.on('success', function (e) {
  $(e.trigger.nextElementSibling).fadeIn().delay(1000).fadeOut();
});
