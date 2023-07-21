$(function () {
    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.submenu').slideUp();
        }

    });

    $('.mopen').on('click', function () {
        $('.header .gnb').toggleClass('on');
    });

    $(window).on('resize', function () {
        $('.header .gnb').removeClass('on');
        $('.submenu').removeAttr('style');
    })
})