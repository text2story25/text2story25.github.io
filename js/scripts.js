jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    // (function () {
    //     $('#preloader').delay(200).fadeOut('slow');
    // }());

    // --------------------------------------------------------------------
    // One Page Navigation
    // --------------------------------------------------------------------

    (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 50) {
                $('nav.navbar').addClass('sticky-nav');
            }
            else {
                $('nav.navbar').removeClass('sticky-nav');
            }
        });
    }());

    // --------------------------------------------------------------------
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    // --------------------------------------------------------------------

    (function () {
        $('a.page-scroll').on('click', function (e) {
            e.preventDefault();
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
        });
    }());

    // --------------------------------------------------------------------
    // Closes the Responsive Menu on Menu Item Click
    // --------------------------------------------------------------------

    (function () {
        $('.navbar-collapse ul li a').on('click', function () {
            if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
                $('.navbar-toggle:visible').trigger('click');
            }
        });
    }());
    
    // --------------------------------------------------------------------
    // Event Photos Carousel Initialization
    // --------------------------------------------------------------------
    
    (function () {
        // Initialize the carousel
        $('#eventPhotosCarousel').carousel({
            interval: 5000,
            pause: "hover",
            wrap: true
        });
        
        // Add swipe support for touch devices
        if (navigator.userAgent.match(/Android|iPhone|iPad|iPod|Windows Phone/i)) {
            $("#eventPhotosCarousel").on("touchstart", function (e) {
                var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                this.touchStartX = touch.pageX;
            }).on("touchmove", function (e) {
                e.preventDefault();
            }).on("touchend", function (e) {
                var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                if (touch.pageX - this.touchStartX > 50) {
                    $(this).carousel('prev');
                } else if (this.touchStartX - touch.pageX > 50) {
                    $(this).carousel('next');
                }
            });
        }
    }());

}); // JQuery end
