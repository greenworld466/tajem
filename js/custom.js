$(function(){
    
    $('.banner-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
        speed: 1500,
        arrows: false,
});
    
    $('.venobox').venobox(); 
    
    var containerEl = document.querySelector('.work-filter');

            var mixer = mixitup(containerEl);
    
});