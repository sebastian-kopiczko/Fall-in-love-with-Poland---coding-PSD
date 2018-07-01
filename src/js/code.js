(function () {
    animateMenu();
    exploreCity();
    var cityName = document.getElementById("city-name");

    function exploreCity() {
        var cities = document.querySelectorAll(".gallery__item");
        cities.forEach(function (city) {
            return city.addEventListener("click", setCityName);
        });
    }

    function setCityCode(cityName) {
        var cityCode = "";
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
        console.log(tripLink);
        var tripBtn = document.getElementById("trip-btn");
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
        var nav = document.getElementById("nav");
        menuBtn.addEventListener("click", function () {
            if (this.classList.contains("is-active")) {
                this.classList.remove("is-active");
                Object.assign(mobileMenu.style, {
                    visibility: "hidden",
                    opacity: 0
                });
                Object.assign(nav.style, {
                    display: "none"
                });
            } else {
                this.classList.add("is-active");
                Object.assign(mobileMenu.style, {
                    visibility: "visible",
                    opacity: 1
                });
                Object.assign(nav.style, {
                    display: "flex"
                })
            };
        });
    }
})();