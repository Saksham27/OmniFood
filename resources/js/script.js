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

}

);

