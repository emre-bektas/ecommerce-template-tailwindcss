$(document).ready(function () {


    $(".open-left-slide-menu").click(function () {
        $(".slide-menu").toggleClass("slide-left");
    });
    $('.slide-close-button, .slider-overlay').click(function () {
        $(".slide-menu").removeClass("slide-left");
    });

    $(".btn_ , [data-btn-ripple]")
        .on("mousedown touchstart", function () {
            $(this).css('transform', 'scale(0.95)');
        })
        .on("mouseup touchend", function () {
            $(this).css('transform', 'scale(1)');
        })

    $(".dropdown_ .dropdown_trigger").click(function () {
        const dropEl = $(this).closest(".dropdown_")
        $(this).toggleClass("dt-active");

        dropEl.find(".dropdown_content").toggleClass("dc-active");

    })

    const swiper = new Swiper("[data-slider-products]", {
        slidesPerView: "auto",
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    new Swiper("[data-slider-stories]", {
        slidesPerView: "auto",
        spaceBetween: 0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });



    $(".bps_ca_total").click(function () {
        $(".basket-page").toggleClass("bp_mobile_box");
    })

    $(".bp-overlay").click(function () {
        $(".basket-page").removeClass("bp_mobile_box");
    })



});
