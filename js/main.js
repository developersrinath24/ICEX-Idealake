$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 300) {
      // this refers to window
      $("header").css("background", "#fff");
      $("header nav a.menu-item, .header-btn-mutual").css("color", "#000");
      $(".header-btn-mutual").css("border-color", "#000");
    } else {
      $("header").css("background", "transparent");
      $("header nav a.menu-item, .header-btn-mutual").css("color", "#fff");
      $(".header-btn-mutual").css("border-color", "#fff");
    }
  });

  $(".trade-card ul li").click(function () {
    $(".trade-card ul li").removeClass("active");
    $(".right-content div").removeClass("active");
    $(this).addClass("active");
    $("#" + $(this).attr("data-id")).addClass("active");
  });
  $('h3.footer-head').click(function(){
    $('h3.footer-head').removeClass("active");
    $(this).addClass("active");
    $('.footer-content').slideUp();
    $(this).parent().find('.footer-content').slideDown();
});

  $(".hero-slider").slick({
    dots: true,
    arrows: false,
  });
});
