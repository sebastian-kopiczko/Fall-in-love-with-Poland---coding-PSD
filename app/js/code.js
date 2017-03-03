(function () {
    //    var onresize = function (e) {
    //        var width = e.target.outerWidth;
    //        var imgSize = "";
    //        if (width > 710 && width < 995) {
    //            imgSize = "700x300"
    //        }
    //        else if (width > 709 && width < 450) {
    //            imgSize = "500x250"
    //        }
    //        else {
    //            imgSize = "350x350"
    //        }
    //        document.getElementById("responsiveImg").src = "http://placehold.it/" + imgSize;
    //    }
    //    window.addEventListener("resize", onresize);
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
})();
