/* WHEN DOCUMENT READY */
$(document).ready(function () {
    Mymenu()
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