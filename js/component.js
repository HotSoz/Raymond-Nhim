$(document).ready(function() {
    accordionMenu();
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