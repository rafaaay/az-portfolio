var openBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

var sideNav = document.querySelector(".side-nav");

openBtn.addEventListener("click", function(){
    sideNav.style.width = "50%";
});

closeBtn.addEventListener("click", function(){
    sideNav.style.width = 0;
});


// jQuery
$(document).ready(function() {

    // Home
    $(".home-link").on("click", function(){
        $(".show-div").fadeOut().addClass("hide-div").removeClass("show-div");
        $(".home").fadeIn().addClass("show-div");
        sideNav.style.width = 0;
    });
    // Home

    // About
    $(".about-link").on("click", function(){
        $(".show-div").fadeOut().addClass("hide-div").removeClass("show-div");
        $(".about").fadeIn().addClass("show-div");
        sideNav.style.width = 0;
    });
    // About

    // Skills
    $(".skills-link").on("click", function(){
        $(".show-div").fadeOut().addClass("hide-div").removeClass("show-div");
        $(".skills").fadeIn().addClass("show-div");
        sideNav.style.width = 0;
    });
    // Skills

    // Portfolio
    $(".portfolio-link").on("click", function(){
        $(".show-div").fadeOut().addClass("hide-div").removeClass("show-div");
        $(".portfolio").fadeIn().addClass("show-div");
        sideNav.style.width = 0;
    });
    // Portfolio

    // Contact Me
    $(".contact-link").on("click", function(){
        $(".show-div").fadeOut().addClass("hide-div").removeClass("show-div");
        $(".contact").fadeIn().addClass("show-div");
        sideNav.style.width = 0;
    });
    // Contact Me

});