$(function() {
    /* trigger the skitter slider */

    $('.skitter-large').skitter({
        fullscreen: true,
        dots: false,
        numbers: false,
        label_animation: "right",
        velocity: 0.7
    });

    /* trigger slick.js slider */

    $('.slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 1500,

    });

    /* trigger count.js  */

    $(".timer").countTo();




});


/* adjust the scrollup */

var scrollUp = document.querySelector(".scrollup"),
    navBar = document.querySelector(".navbar");

window.onscroll = function() {

    if (window.pageYOffset >= 200) {
        scrollUp.style.display = "block";
        navBar.style.transition = "0.3s";
        navBar.style.background = "#0f3460";
        navBar.style.top = "0";
    } else if (window.innerWidth < 1200) {
        navBar.style.top = "0";
        navBar.style.transition = "0.5s";
        navBar.style.background = "rgba(15, 52, 97, .5)";
    } else {
        scrollUp.style.display = "none";
        navBar.style.top = "7%";
        navBar.style.transition = "0.3s";
        navBar.style.background = "rgba(15, 52, 97, .5)";
    }
}

scrollUp.onclick = function() {
    window.scrollTo(0, 0);
}

/* end adjust scrollup */

/* show the hegra countries on click */

var hegraBtn = document.querySelector(".hegra-btn"),
    hegraCountries = document.querySelector(".hegra-countries"),
    hegraCountriesIcon = document.querySelector(".fa-times");

hegraBtn.onclick = function() {
    hegraCountries.style.transform = "translateX(0)";
}

hegraCountriesIcon.onclick = function() {
    hegraCountries.style.transform = "translateX(100%)";
}


/* end show the hegra countries on click */



/* adjust slick slider on responsive  */

var slickSlider = document.querySelector(".slick");

function adjustSlider() {
    if (window.innerWidth <= 768) {
        slickSlider.setAttribute("data-slick", '{"slidesToShow": 1, "slidesToScroll": 1}');
    } else {
        slickSlider.setAttribute("data-slick", '{"slidesToShow": 3, "slidesToScroll": 3}');
    }
}
adjustSlider();