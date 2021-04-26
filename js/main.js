// alert("Working");

$(function () {
  $("#slider5").bsTouchSlider();
  $(".carousel .carousel-inner").swipe({
    swipeLeft: function (event, direction, distance, duration, fingerCount) {
      this.parent().carousel("next");
    },
    swipeRight: function () {
      this.parent().carousel("prev");
    },
    threshold: 0,
  });
  // This is for the static slider 6
  $(".video-img").on("click", function () {
    $(this).addClass("hide");
    $(".embed-responsive").show().removeClass("hide");
    $("video").each(function () {
      this.play();
    });
  });
  //testimonial 9
  $(".testi9").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      1650: {
        items: 1,
      },
    },
  });
});
