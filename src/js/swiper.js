const swiperVideo = new Swiper('.videoSwiper', {
    // Optional parameters
    // direction: 'gorizontal',
    loop: true,
    spaceBetween: 30,

    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});
const swiperFeedbacks = new Swiper('.feedbacksSwiper', {
    // Optional parameters
    // direction: 'gorizontal',
    // slidesPerView: 3,
    loop: true,
    spaceBetween: 30,

    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});