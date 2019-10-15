var openBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

var sideNav = document.querySelector(".side-nav");

openBtn.addEventListener("click", function(){
    sideNav.style.width = "50%";
});

closeBtn.addEventListener("click", function(){
    sideNav.style.width = 0;
});


// function openNav() {
//     document.getElementById("side-nav").style.width = "50%";
// }

// function closeNav() {
//     document.getElementById("side-nav").style.width = "0";
// }