new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        358: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        450: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 40
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 50
        }
    }
})


// mini Slider
new Swiper('.miniSlider', {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        358: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 1,
            spaceBetween: 20
        },
    }
})


new Swiper(".vertical-swiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


