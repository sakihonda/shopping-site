$(document).ready(function(){
  $(".sp-menu-click").click(function(){
    $(".sp-menu-toggle").slideToggle();
  });
});

$(window).load(function(){
  $(".grandchild-slideshow img").click(function(){
    var img_src = $(this).attr("src");
    $(".child1-slideshow img").attr("src", img_src);
  });
});