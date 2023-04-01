document.addEventListener('DOMContentLoaded', function () {

    const showSlider = new Swiper('.showcase-carousel', {

        loop: true,
        // loopedSlides: 50,

        slidesPerView: 3,
        speed: 1800,
        centeredSlides: true,
        slideToClickedSlide: true,

        navigation: {
            nextEl: '.showcase-navigation__next',
            prevEl: '.showcase-navigation__prev'
        },

        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },

        mousewheel: {
            sensitivity: 1,
            // eventsTarget: '.image-slider'
        },

        // autoplay: {
        //     delay: 500,
        // },
    });

    document.querySelector('video').playbackRate = 2

});