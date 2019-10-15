$(document).ready(function () {

    $('.js--section-features').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '68px;'
    });



    /* ====== Scroll on Hero page buttons =========== */
    $('.js--scroll-to-plan').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-plan').offset().top }, 1000)
    });
    
    $('.js--scroll-to-features').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000)
    });



    /* ============== Scroll on Logo ============== */
    $('.js--scroll-to-home').click(function() {
        $('html, body').animate({scrollTop :$('.js--home').offset().top }, 1000)
    });



    /* ======== Scroll on Navigation ============ */
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault()

        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top,
            },
            800,
            'linear'
        )
    })



    /* =========== Animations on scroll =========== */
    $('.js--wp-1').waypoint(function() {
        $('.js--wp-1').addClass('animated fadeIn slow');
    },{
        offset: '70%'
    });

    $('.js--wp-2').waypoint(function() {
        $('.js--wp-2').addClass('animated fadeInUp');
    },{
        offset: '40%'
    });

    $('.js--wp-3').waypoint(function () {
        $('.js--wp-3').addClass('animated fadeIn slow');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function () {
        $('.js--wp-4').addClass('animated pulse short');
    }, {
        offset: '25%'
    });

}

);

