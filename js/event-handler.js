$(document).ready(function() {
    themeChange();
    themeSVGChange();
    accordionMenu();
    $('#menu-arrow').on('click', toggleMenu);
});


function themeChange() {
  var themes = ['dark', 'light', 'purple'];
  var currentThemeIndex = themes.indexOf($('html').attr('data-theme'));
  
  $('#toggle-theme').click(function() {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    var newTheme = themes[currentThemeIndex];
    $('html').attr('data-theme', newTheme);
  });
}

function themeSVGChange() {
  $('#toggle-theme').click(function() {
    var currentTheme = $('html').attr('data-theme');
    var sunGroup = $('#sun-group');
    var moonGroup = $('#moon-group');
    var cloudGroup = $('#cloud-group');
    var glowGroup = $('#backlight-group');
    
    // Hide all groups
    sunGroup.removeClass('show').addClass('hide');
    moonGroup.removeClass('show').addClass('hide');
    cloudGroup.removeClass('show').addClass('hide');
    glowGroup.removeClass('show').addClass('hide');
    
    // Show specific groups based on the theme
    if (currentTheme === 'dark' || currentTheme === 'purple') {
      moonGroup.removeClass('hide').addClass('show');
      glowGroup.removeClass('hide').addClass('show');
    } else if (currentTheme === 'light') {
      sunGroup.removeClass('hide').addClass('show');
      cloudGroup.removeClass('hide').addClass('show');
    }
  });
}

function accordionMenu() {
  $('.icon-toggle').hide();
  $('#menu-arrow').click(function() {
      if($(this).hasClass('exit-menu')){
          $(this).removeClass('exit-menu');
          $('.icon-toggle').hide();
          $('.text-toggle').show();
      } else {
          $(this).addClass('exit-menu');
          $('.icon-toggle').show();
          $('.text-toggle').hide();
      }
  })
}

function toggleMenu() {
  $('.text-toggle').toggleClass('hidden');
  $('.icon-toggle').toggleClass('hidden');
}