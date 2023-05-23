$(document).ready(function() {
    themeChange();
});

function themeChange() {
    $('#toggle-theme').click(function() {
        var currentTheme = $('html').attr('data-theme');
        
        switch (currentTheme) {
            case 'dark':
              newTheme = 'light';
              break;
            case 'light':
              newTheme = 'purple';
              break;
            case 'purple':
              newTheme = 'dark';
              break;
            default:
              newTheme = 'dark';
              break;
          }

        $('html').attr('data-theme', newTheme);
    });
}