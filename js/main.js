/* global $ */
$(document).ready(function () {
  'use strict';
  $('.title-card').click(function () {
    $(this).parent().find(".body-card").slideToggle(500);
  });
  /* $('.table-card thead').click(function () {
    $(this).next().slideToggle(500);
  }); */
 /*  $('.read-more').click(function () {
    $(this).parent('.body-card').toggleClass('auto-width')
    $(this).parent().find('.read-more i').toggleClass('fa fa-chevron-down').toggleClass('fa fa-chevron-up');
  }); */
  $('.read-more').click(function () {
    $(this).parent('.body-card').find("tbody tr").toggleClass('active')
    $(this).parent().find('.read-more i').toggleClass('fa fa-chevron-down').toggleClass('fa fa-chevron-up');
  });
});

/* function ToggleCard(src) {
  $(src).parent().find("body-card'").toggle(500);
} */