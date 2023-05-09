//RUN ON DOCUMENT READY
$(document).ready(function(){
    smoothScrolling();
});

//RUN ON PAGE LOADED
$(window).on('load',function(){
    voidBlankLinks();
});

//RUN WHEN WINDOW IS RESIZED
$(window).on('resize',function(){

});

//RUN WHEN PAGE IS SCROLLED
//THIS INCLUDES SCROLLING OF ANY KIND (NOT JUST USER CONTROLLED)
$(window).on('scroll',function(){
  
});

function voidBlankLinks(){
    $('a').each(function(){
        if($(this).attr('href') === ''){
            $(this).attr('href','javascript:void();')
        }
    });
}

function navBarScroll() {
    var prevScrollpos = $(window).scrollTop();
    $(window).scroll(function() {
      var currentScrollPos = $(window).scrollTop();
      if (currentScrollPos == 0) {
        $('#navbar').removeClass('navbar-shadow');
        $('#navbar').addClass('navbar-wide');
      } else if (prevScrollpos > currentScrollPos) {
        $('#navbar').removeClass('navbar-hidden');
        $('#navbar').removeClass('navbar-wide');
        $('#navbar').addClass('navbar-shadow');
      } else {
        $('#navbar').addClass('navbar-hidden');
        $('#navbar').addClass('navbar-shadow');
      }
      prevScrollpos = currentScrollPos;
    });
}

function smoothScrolling() {
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        
        var target = $(this.hash);
        
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 300);
    });
}