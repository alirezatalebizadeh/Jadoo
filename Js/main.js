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



//! to show and hidden navbar
document.querySelector('.navbar-toggler').addEventListener('click', () => {
    document.querySelector('.navbar-collapse').classList.toggle('show')
})

//! change background with scroll
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
        document.querySelector('.navbar').style.backgroundColor = 'rgb(218 213 213)'
    } else {
        document.querySelector('.navbar').style.backgroundColor = 'transparent'
    }
})


let dropdown = document.querySelector('.dropdown')

dropdown.addEventListener('click', (event) => {
    event.target.classList.toggle('show')

    document.querySelectorAll('.dropdown-item').forEach(link => {
        link.addEventListener('click', (e) => {
            document.querySelector('.dropdown-toggle').textContent = e.target.innerHTML
        })
    })
    document.querySelector('.dropdown-menu').classList.toggle('show')
})

document.body.addEventListener('click', (event) => {
    if (event.target.tagName !== 'A') {
        dropdown.classList.remove('show')
        document.querySelector('.dropdown-menu').classList.remove('show')
    }
})