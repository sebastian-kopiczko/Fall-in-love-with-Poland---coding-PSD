(function () {
    animateMenu();
    exploreCity();
    hideMenu();
    var cityName = document.getElementById("city-name");

    function exploreCity() {
        var cities = document.querySelectorAll(".gallery__item");
        cities.forEach(function (city) {
            return city.addEventListener("click", setCityName);
        });
    }

    function setCityCode(cityName) {
        var tripBtn = document.getElementById("trip-btn");
        var cityCode;
        switch (cityName) {
        case "Wrocław":
            cityCode = "g274812";
            break;
        case "Zakopane":
            cityCode = "g274793";
            break;
        case "Kraków":
            cityCode = "g274772";
            break;
        case "Sandomierz":
            cityCode = "g277818";
            break;
        case "Warszawa":
            cityCode = "g274856";
            break;
        case "Sopot":
            cityCode = "g274735";
            break;
        }
        var tripLink = "https://pl.tripadvisor.com/Tourism-" + cityCode;
        tripBtn.setAttribute("href", tripLink);
    }

    function setCityName() {
        var dataName = this.getAttribute("data-city-name");
        cityName.textContent = dataName;
        setCityCode(dataName);
    }

    function animateMenu() {
        var menuBtn = document.getElementById("hamburger");
        var mobileMenu = document.getElementById("mobile-menu");
        menuBtn.addEventListener("click", function () {
            if (this.classList.contains("is-active")) {
                this.classList.remove("is-active");
                Object.assign(mobileMenu.style, {
                    visibility: "hidden"
                    , opacity: 0
                });
            }
            else {
                this.classList.add("is-active");
                Object.assign(mobileMenu.style, {
                    visibility: "visible"
                    , opacity: 1
                })
            };
        });
    }

    function hideMenu() {
        var ishiddenclass = 'hide'
            , b = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
        var ms = 0;
        document.ontouchmove = function () {
            $('body').append(document.documentElement.scrollTop);
        };
        document.onscroll = function () {
            var t = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0)
                , a = t;
            var elements = document.querySelectorAll('.menu');
            elements.forEach(function (el) {
                if (a < b) {
                    if (el.classList) el.classList.remove(ishiddenclass);
                    else el.className = el.className.replace(new RegExp('(^|\\b)' + ishiddenclass.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
                }
                if (a > b) {
                    if (el.classList) el.classList.add(ishiddenclass);
                    else el.className += ' ' + ishiddenclass;
                }
            });
            b = a;
        };
    }
})();
