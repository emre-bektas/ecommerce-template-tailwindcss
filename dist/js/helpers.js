let isDragging = false;
let startClientY;
let startHeight;
let dragStartTime;
let minHeight = 0;
let animationDuration = 300;
let snapPoints = [0.5, 0.75, 0.9];

function bottomSheetClose() {

    $(".bottom_sheet_ .bs_content").animate({
        bottom: '-100%',
        height: '0'
    }, animationDuration, function() {
        $(".bottom_sheet_ .bs_content").css({
            bottom: '',
        })
        //$(".bottom_sheet_").removeClass("bottom_sheet_show");

    });
    $('.bottom_sheet_').css('--opacity-bg', 1);
    $(".bottom_sheet_").removeClass("bottom_sheet_open");
    $("body").removeClass("overflow-hidden");
    $("body").css({
        paddingRight : "0",
    })

    isDragging = false;


}
function bottomSheetOpen(sheetId) {

    var windowHeight = $(window).height();
    var snapHeight = windowHeight * snapPoints[0];

    $(sheetId).addClass("bottom_sheet_open");
    $("body").addClass("overflow-hidden");

    var isMobile = /Mobi|Android/i.test(navigator.userAgent);
    var hasScrollbar = $(document).height() > $(window).height();

    if (!isMobile && hasScrollbar) {
        $("body").css({
            paddingRight: "15px",
        });
    } else {
        $("body").css({
            paddingRight: "",
        });
    }

    $('.bottom_sheet_ .bs_content').animate({
        height: snapHeight + 'px'
    }, animationDuration);
}

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


    /* Tabs */

    function activateTab_(tabId) {
        // Show/Hide Tabs
        $(tabId).fadeIn(400).siblings().hide();
        // Change/remove current tab to active
        $(`[data-tab='${tabId}']`).addClass('active').siblings().removeClass('active');
    }

    $('[data-tab]').on('click', function(e) {
        e.preventDefault();
        let tabId = $(this).data('tab');
        activateTab_(tabId);
    });

    /* Bottom Sheet */



    $(".bottom_sheet_").click(function (e) {
        if (!$(e.target).closest(".bs_content").length && !isDragging){
            bottomSheetClose();
        }
    })

    $("[data-bottom-sheet]").click(function () {
        const sheetId = $(this).attr("data-bottom-sheet");
        bottomSheetOpen(sheetId);
    })
    $("[data-bottom-sheet-close]").click(function () {
       bottomSheetClose();
    })
    $('.bs_header').on('mousedown touchstart', function(e) {

        if ($(e.target).is('[data-bottom-sheet-close]') || $(e.target).closest('[data-bottom-sheet-close]').length) {
            return;
        }

        isDragging = true;
        startClientY = e.clientY || e.originalEvent.touches[0].clientY;
        startHeight = $('.bottom_sheet_ .bs_content').outerHeight();
        dragStartTime = new Date().getTime();
    });

    $(document).on('mousemove touchmove', function(e) {

        if (!isDragging) return;

        let clientY = e.clientY || e.originalEvent.touches[0].clientY;
        let deltaY = clientY - startClientY;
        let windowHeight = $(window).height();
        let newHeight = startHeight - deltaY;

        if (newHeight >= minHeight) {
            $('.bottom_sheet_ .bs_content').css('height', Math.min(newHeight, $(window).height()) + 'px');
        }

        var maxSnapHeight = windowHeight * snapPoints[0]; // En alt snap noktası
        if (newHeight <= maxSnapHeight) {
            var opacity = (newHeight - minHeight) / (maxSnapHeight - minHeight);
            $('.bottom_sheet_').css('--opacity-bg', opacity);
        } else {
            $('.bottom_sheet_').css('--opacity-bg', 1);
        }


    });

    $(document).on('mouseup touchend', function(e) {
        if (!isDragging) return;

        isDragging = false;
        let currentHeight = $('.bottom_sheet_ .bs_content').outerHeight();
        var windowHeight = $(window).height();
        var snapHeight;
        var minDistance = Infinity;

        // En yakın snap noktasını bul
        snapPoints.forEach(function(point) {
            var targetHeight = windowHeight * point;
            var distance = Math.abs(currentHeight - targetHeight);
            if (distance < minDistance) {
                minDistance = distance;
                snapHeight = targetHeight;
            }
        });


        $('.bottom_sheet_ .bs_content').animate({
            height: snapHeight + 'px'
        }, animationDuration);

        $('.bottom_sheet_').css('--opacity-bg', 1);

        let clientY = e.clientY || e.originalEvent.changedTouches[0].clientY;
        let deltaY = clientY - startClientY;
        var dragEndTime = new Date().getTime();
        var dragDuration = dragEndTime - dragStartTime;

        if (deltaY > 150 && dragDuration < 150) {
            bottomSheetClose();
        }else{
            if (currentHeight < 100){
                bottomSheetClose();
            }
        }
    });


})
