$(document).ready(function() {
    accordionMenu();
    pageSelection();
    anchorFocus();
});

function accordionMenu() {
    $('#icon-menu').click(function() {
        $('.accordion-text').removeClass('hide-menu');
        $('.accordion-icon').addClass('hide-menu');
    })

    $('#text-menu').click(function() {
        $('.accordion-text').addClass('hide-menu');
        $('.accordion-icon').removeClass('hide-menu');
    })
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