/* eslint-disable */
// We import JQuery


const $ = require('jquery');
// We declare it globally
var $jq = jQuery.noConflict();
window.$ = $;

// You can use it now
$jq(function () {
    $jq(document).scroll(function () {
        var $nav = $jq(".navbar");
        $nav.toggleClass('scrolled', $jq(this).scrollTop() > $nav.height());
      });
  });

 
  $('ul.navbar-nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });
