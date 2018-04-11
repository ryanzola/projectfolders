import '../sass/style.scss';
import '../views/head.pug';
import '../views/index.pug';
import '../views/footer.pug';

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('.nav-bg').css({
    opacity: function() {
      var elementHeight = $(this).height();
      return 0.001 - (elementHeight - scrollTop) / elementHeight;
    }
  });
});