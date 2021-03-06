// Create smooth scrolling through menu sections

$(document).ready( function() {
    $(function(){
        $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        var sc = $(this).attr("href");
        var dn = $(sc).offset().top;
        setTimeout(function() {$('.menu').removeClass("sticky")}, 1100);
        $('html, body').animate({scrollTop: dn}, 1000);
        });
    });

    // Change button names when pressed

    $('.mainPromoButton').click(function(){
        $(this).text('похудеть за неделю!');
        $(this).style('font-size:1rem');
    });

    // Get auto changes slides on main screen (use owl-carousel (JQuery) plugin)

    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            autoplay:true,
            items:1,
            rewind:true
        });
    });

    // Create animation of sticking menu

    $(window).scroll(function() {
        if ($(this).scrollTop() > 20){
            $('.menu').addClass("sticky");
        }else {
            $('.menu').removeClass("sticky");
        }
    });
});  

// Create simple slider on native JS
    
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnails image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("carouselDot");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dotActive", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " dotActive";
}



    

  
  