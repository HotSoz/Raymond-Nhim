$(document).ready(function() {
    accordionMenu();
    pageSelection();
    anchorFocus();
    $('#menu-arrow').on('click', toggleMenu);
});

function accordionMenu() {
    $('.text-toggle').hide();
    $('#menu-arrow').click(function() {
        if($(this).hasClass('exit-menu')){
            $(this).removeClass('exit-menu');
            $('.text-toggle').hide();
            $('.icon-toggle').show();
        } else {
            $(this).addClass('exit-menu');
            $('.text-toggle').show();
            $('.icon-toggle').hide();
        }
    })
}


function toggleMenu() {
    $('.text-toggle').toggleClass('hidden');
    $('.icon-toggle').toggleClass('hidden');
}

function pageSelection() {
    $('#main').fadeIn(1000);

    $('.toggle-action').not('#main').hide();

    $('.toggle-section').click(function() {
        // Get the ID of the div to toggle
        var divId = $(this).attr('href'); 
    
        // Hide all toggleable divs except for the one to toggle
        $('.toggle-action').not(divId).hide();
    
        // Fade in the toggleable div
        $(divId).fadeIn(1000);
      });
}

function anchorFocus() {
    $('#home-toggle').addClass('nav-focus');
  
    $('.toggle-section').on('click', function() {
      $('.toggle-section i, .toggle-section p').removeClass('nav-focus');
      
      $(this).find('i, p').addClass('nav-focus');
    });
}