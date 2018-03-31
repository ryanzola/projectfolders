$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('.header').css({
    opacity: function() {
      var elementHeight = $(this).height();
      return 0.01 - (elementHeight - scrollTop) / elementHeight;
    }
  });
});