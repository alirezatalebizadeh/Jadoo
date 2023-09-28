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



document.addEventListener('DOMContentLoaded', function () {
    var pageScrollLinks = document.querySelectorAll('a.page-scroll');

    pageScrollLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            var target = document.querySelector(this.getAttribute('href'));
            var targetOffsetTop = target.offsetTop;
            var scrollDuration = 1500;
            var scrollTimingFunction = 'easeInOutExpo';

            scrollTo(targetOffsetTop, scrollDuration, scrollTimingFunction);
        });
    });

    function scrollTo(to, duration, easing) {
        var start = window.pageYOffset;
        var change = to - start;
        var currentTime = 0;
        var increment = 20;

        function animateScroll() {
            currentTime += increment;
            var val = Math.easeInOutQuad(currentTime, start, change, duration);
            window.scrollTo(0, val);

            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        }

        Math.easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        animateScroll();
    }

    var navbarCollapseLinks = document.querySelectorAll('.navbar-collapse ul li a');

    navbarCollapseLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            var navbarToggle = document.querySelector('.navbar-toggle:visible');
            navbarToggle.click();
        });
    });

    function scrollSpy() {
        var navbar = document.querySelector('.navbar-fixed-top');
        var bodyRect = document.body.getBoundingClientRect();
        var navbarRect = navbar.getBoundingClientRect();
        var navbarHeight = navbarRect.height;
        var sections = document.querySelectorAll('section');
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        sections.forEach(function (section) {
            var sectionRect = section.getBoundingClientRect();
            var sectionTop = sectionRect.top - bodyRect.top - navbarHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionRect.height) {
                var activeLink = document.querySelector('a[href="#' + section.id + '"]');
                activeLink.classList.add('active');
            } else {
                var inactiveLink = document.querySelector('a[href="#' + section.id + '"]');
                inactiveLink.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', scrollSpy);
});

