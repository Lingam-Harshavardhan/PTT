// Toggle Menu
hamburger = document.querySelector(".hamburger");
    hamburger.onclick = function(){
        navBar = document.querySelector(".navBar");
        navBar.classList.toggle("tog");
}
//carousel
$(document).ready(function() {
    $('.carousel').carousel({
        pause: 'none'
    });
});

//scroll animation
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i=0; i<reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;
        if (revealtop < windowheight - revealpoint){
            reveals[i].classList.add("see");
        }
        else{
            reveals[i].classList.remove("see");
        }
    }
}
window.onscroll = function () {
    reveal();
};