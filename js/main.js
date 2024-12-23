$(document).ready(function(){
    

    $("#home-navbar-burger").click(function() {
        $("#home-navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });

    $("#about-navbar-burger").click(function() {
        $("#about-navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
});
document.addEventListener("DOMContentLoaded", function(event) { 
    Chocolat(document.querySelectorAll('.chocolat-parent .chocolat-image'))
})