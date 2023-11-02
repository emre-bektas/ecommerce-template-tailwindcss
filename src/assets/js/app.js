$(document).ready(function () {


    $(".btn_ , [data-btn-ripple]")
        .on("mousedown touchstart", function () {
            $(this).css('transform', 'scale(0.95)');
        })
        .on("mouseup touchend", function () {
            $(this).css('transform', 'scale(1)');
        })


});


