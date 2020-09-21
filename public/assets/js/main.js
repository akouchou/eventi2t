


!(function($) {
 

    if ($(window).width() > 992) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
          $('#navbar_top').addClass("fixed-top");
          // add padding top to show content behind navbar
          $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
        } else {
          $('#navbar_top').removeClass("fixed-top");
          // remove padding top from body
          $('body').css('padding-top', '0');
        }
      });
    }
   
  
    // Init AOS
    function aos_init() {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out-back",
        once: true
      });
    }
    $(window).on('load', function() {
      aos_init();
    });
  
  })(jQuery);