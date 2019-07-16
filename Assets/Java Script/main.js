$(document).ready(function() {
    $(window).scroll(function () { 
  
      console.log($(window).scrollTop());
  
      if ($(window).scrollTop() > 550) {
        $('.navbar').addClass('sticky');
      }
  
      if ($(window).scrollTop() < 551) {
        $('.navbar').removeClass('sticky');
      }
    });
  });