$(document).ready(function(){
  $(".sp-menu-click").click(function(){
    $(".sp-menu-toggle").slideToggle();
  });
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
    );
});