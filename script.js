const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.main-nav');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    nav.classList.toggle('active');
});

// $('.carousel').slick({
//     infinite: true,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     centerMode: true,
//     centerPading: '60px',
//     prevArrow: '<img src="img/Arrow_left.svg">',
//     nextArrow: '<img src="img/Arrow_right.svg">',
// });
$('.carousel').slick({
    dots: true,                      // Show navigation dots
    infinite: true,                  // Infinite loop
    speed: 500,                      // Transition speed
    slidesToShow: 1,                 // Number of slides to show at once
    slidesToScroll: 1,               // Number of slides to scroll
    autoplay: true,                  // Enable autoplay
    autoplaySpeed: 3000,             // Autoplay speed in milliseconds
    arrows: true,                    // Show navigation arrows
    responsive: [
        {
            breakpoint: 768,         // Responsive settings for tablets
            settings: {
                arrows: false,       // Hide arrows on mobile
                dots: true
            }
        }
    ]
});