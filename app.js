$(function(){


    // Fixed Header

    let header = $('#header');
        intro = $('#intro');
        introH = intro.innerHeight();
        scrollPos = $(window).scrollTop();
        
        nav = $('#nav');
        navToggle = $('#navToggle');

        checkScroll(scrollPos, introH);


    $(window).on('scroll resize', function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
      })
            
      function checkScroll(scrollPos, introH) {
        if(scrollPos >= introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }

    //  Scroll

     $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        let blockID = $(this).data('scroll');
            blockOffset = $(blockID).offset().top;

        
        $('html, body').animate({
            scrollTop: blockOffset - 70
        }, 700);

        nav.removeClass('show');
     });




    //  Nav Toggle

    navToggle.on('click', function(event) {
        event.preventDefault();

        nav.toggleClass('show');
    });

    // Testimonials https://kenwheeler.github.io/slick/

    let slider = $('#testimonialSlider');

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

});