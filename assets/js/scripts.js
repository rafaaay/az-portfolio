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

    // About
    $(".about-link").on("click", function(){
        $(".home").fadeOut();
        $(".about").fadeIn();
    });
    // About

    // Home
    $(".home-link").on("click", function(){
        $(".about").fadeOut();
        $(".home").fadeIn();
        sideNav.style.width = 0;
    });
    // Home
        
});