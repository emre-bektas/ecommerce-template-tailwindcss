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


    /* Drawer */

    function drawerClose(el) {
        $(el).removeClass("drawer_open");
        $("body").removeClass("overflow-hidden");
        $("body").css({
            paddingRight : "0",
        })
    }

    $("[data-drawer-id]").click(function () {
        const drawerId = $(this).attr("data-drawer-id");
        $(drawerId).addClass("drawer_open");
        $("body").addClass("overflow-hidden");
        $("body").css({
            paddingRight : "15px",
        })

    })
    $("[data-drawer-close]").click(function (e) {
        const el = $(this).closest(".drawer_");
        if(el?.length > 0){
            drawerClose(el);
        }
    })

    $(".drawer_").click(function (e) {
        if (!$(e.target).closest(".drawer_content").length){
            drawerClose(this);
        }
    })

})
