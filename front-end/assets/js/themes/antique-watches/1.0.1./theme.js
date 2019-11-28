/* WHEN DOCUMENT READY */
$(document).ready(function () {
    Add_Active()
});

/* FUNCTIONS */
function Add_Active() {
    $('.header__container__navbar__nav__elem__link').click(function () {
        $('.header__container__navbar__nav__elem__link').removeClass("status-active");
        $(this).addClass("status-active");
    });
};