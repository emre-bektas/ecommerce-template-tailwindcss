$(document).ready(function () {

    $(".btn_ , [data-btn-ripple]")
        .on("mousedown touchstart", function () {
            $(this).css('transform', 'scale(0.95)');
        })
        .on("mouseup touchend", function () {
            $(this).css('transform', 'scale(1)');
        })


    $('.phone_tr').mask('0 (000) 000 0000' , {
        placeholder : "0 (555) 555 5555",
    });
    $('.cardNumber').mask('0000 0000 0000 0000' , {
        placeholder : "**** **** **** ****",
    });
    $('.expireDate').mask('00/00');
    $('.cvv').mask('000');


    $(".cpm_ca_total").click(function () {
        $(".checkout-page").toggleClass("cp_mobile_box");
    })
    $(".cp-overlay").click(function () {
        $(".checkout-page").removeClass("cp_mobile_box");
    })

})
