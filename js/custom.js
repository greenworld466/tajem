$(function(){
    $(window).on('load', function(){
      $('.preloder').delay(500).fadeOut(500);
  });  
    $('.back-top').click(function(){
        $('html,body').animate({scrollTop: 0},2000);
    });
    
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
