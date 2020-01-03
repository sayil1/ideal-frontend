const $ = require('jquery');
// We declare it globally
// var $jq = jQuery.noConflict();
window.$ = $;

// You can use it now
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });


