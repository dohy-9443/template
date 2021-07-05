$(function () {
  $(window).on("scroll", onScroll);

  function onScroll() {
    var sct = $(window).scrollTop();
    $(".navigation ul li").each(function () {
      var list = $(this).children("a");
      var t = $(this).children("a").attr("href");
      var off = $(t).offset().top;
      var off_end = off + $("section").height();
    });

    if (sct < $("#ABOUT").offset().top) {
      $(".navigation ul li").removeClass("active");
      $(".navigation ul li.HOME").addClass("active");
    } else if (sct < $("#SKILL").offset().top) {
      $(".navigation ul li").removeClass("active");
      $(".navigation ul li.ABOUT").addClass("active");
    } else if (sct < $("#WORK").offset().top) {
      $(".navigation ul li").removeClass("active");
      $(".navigation ul li.SKILL").addClass("active");
    } else if (sct < $("#CONTACT").offset().top) {
      $(".navigation ul li").removeClass("active");
      $(".navigation ul li.WORK").addClass("active");
    } else if (sct == $("#CONTACT").offset().top) {
      $(".navigation ul li").removeClass("active");
      $(".navigation ul li.CONTACT").addClass("active");
    }
  }
});
