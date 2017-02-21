document.addEventListener("DOMContentLoaded", function () {
    var menuBtn = document.getElementById('hamburger');
    var mobileMenu = document.getElementById('mobile-menu');
    menuBtn.addEventListener('click', function () {
        if (this.classList.contains('is-active')) {
            this.classList.remove('is-active');
            Object.assign(mobileMenu.style, {
                visibility: "hidden"
                , opacity: 0
            });
        }
        else {
            this.classList.add('is-active');
            Object.assign(mobileMenu.style, {
                visibility: "visible"
                , opacity: 1
            });
        }
    });
});
