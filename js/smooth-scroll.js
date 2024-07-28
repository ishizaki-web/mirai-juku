$(function(){
  var pagetop = $('.pagetop');
  $(window).scroll(function(){
    if($(window).scrollTop() > 200){
      pagetop.fadeIn();
    }else{
      pagetop.fadeOut();
    }
  });
  $('a[href^="#"]').click(function(){
    var speed = 800;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("body,html").animate({scrollTop:position},speed,"swing");
    return false;
  });
});
