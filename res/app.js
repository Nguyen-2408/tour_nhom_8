
$(document).ready(function () {
    $(".slider_discount").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        draggable: false,
        arrows:true,
        prevArrow: `<button type='button' class="slick-prev slick-arrow"><i class="fa-solid fa-circle-chevron-left"></i></button>`,
        nextArrow: `<button type='button' class="slick-next slick-arrow"><i class="fa-solid fa-circle-chevron-right"></i></button>`,
        dots: true,
        /* autoplay: true,
        autoplaySpeed: 2000, */
    });
});


