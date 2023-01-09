$(document).ready(function(){
  $('.list-btn').click(function(){
    $('.navbar .list').toggleClass('active');
    });
  
  
  // -------------typing animation script-----------
  
  var typed = new Typed(".typing",{
    strings:["Developer", "Freelancer", "Designer", "Coder"],
    loop:true,
    typeSpeed:100,
    backSpeed:100
  });
  
  
  // ---------teams caraousel script----------
  
  $('.owl-carousel').owlCarousel({
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  });
  
  // --------scroll button show hide script----------
  
  $(window).scroll(function(){
    if(this.scrollY>500){
      $('.scroll-up-btn').addClass('show')
    }
    else{
      $('.scroll-up-btn').removeClass('show')
    }
  });
  
  // ------scroll up button script------------
  
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop:0});
  });
  
 // --------------home type script---------
  
  

});
