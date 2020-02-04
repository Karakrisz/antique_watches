/* WHEN DOCUMENT READY */
$(document).ready(function () {
    Mymenu()
    MyScroll()
});

/* FUNCTIONS */
function Mymenu() {
    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 50) {
            $(".header__container__box").removeClass("header__container__box__bottom-shadow-off").addClass("header__container__box__bottom-shadow-on");
        } else {
            $(".header__container__box").removeClass("header__container__box__bottom-shadow-on").addClass("header__container__box__bottom-shadow-off");
        }
    });
};

function MyScroll() {
    /*------------------------------------
        		1. Scroll to .div about us
        ----------------------------------- */
    $('a.header__container__navbar__nav__elem__link--about-us-scroll').click(function () {
        $('html, body').animate({
            scrollTop: $("div.references__container__box").offset().top - 130
        }, 1000)
    });
    /*------------------------------------
        		2. Scroll to .div photo gallery
        ----------------------------------- */
    $('a.header__container__navbar__nav__elem__link--gallery-scroll').click(function () {
        $('html, body').animate({
            scrollTop: $("div.photo-gallery__container").offset().top - 130
        }, 1000)
    });
    /*------------------------------------
    		3. Scroll to .div relationship
    ----------------------------------- */
    $('a.header__container__navbar__nav__elem__link--relationship-scroll').click(function () {
        $('html, body').animate({
            scrollTop: $("div.footer__container__content").offset().top - 130
        }, 1000)
    });
};