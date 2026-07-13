document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.procedure-slider', {
        loop: true,

        slidesPerView: 3,
        spaceBetween: 0,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

         pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });
});