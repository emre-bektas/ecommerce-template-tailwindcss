$(document).ready(function () {


    $(".btn_ , [data-btn-ripple]")
        .on("mousedown touchstart", function () {
            $(this).css('transform', 'scale(0.95)');
        })
        .on("mouseup touchend", function () {
            $(this).css('transform', 'scale(1)');
        })

    $(".dropdown_ .dropdown_trigger").click(function (){
        const dropEl = $(this).closest(".dropdown_")
        $(this).toggleClass("dt-active");

        dropEl.find(".dropdown_content").toggleClass("dc-active");

    })

});


