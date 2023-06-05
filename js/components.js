$(document).ready(function () {
  themeChange();
  themeSVGChange();
  toggleMenu();
});

// globals

let prevScrollpos = window.pageYOffset;

function themeChange() {
  var themes = ['dark', 'light'];
  var htmlElement = document.querySelector('html');
  var currentThemeIndex = themes.indexOf(
    htmlElement.getAttribute('data-theme')
  );

  var toggleThemeButton = document.getElementById('toggle-theme');
  toggleThemeButton.addEventListener('click', function () {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    var newTheme = themes[currentThemeIndex];
    htmlElement.setAttribute('data-theme', newTheme);
  });
}

function themeSVGChange() {
  var toggleTheme = document.getElementById('toggle-theme');
  var htmlElement = document.documentElement;
  var sunGroup = document.getElementById('sun-group');
  var moonGroup = document.getElementById('moon-group');
  var cloudGroup = document.getElementById('cloud-group');
  var glowGroup = document.getElementById('backlight-group');

  toggleTheme.addEventListener('click', function () {
    var currentTheme = htmlElement.getAttribute('data-theme');

    // Hide all groups
    sunGroup.classList.remove('show');
    sunGroup.classList.add('hide');
    moonGroup.classList.remove('show');
    moonGroup.classList.add('hide');
    cloudGroup.classList.remove('show');
    cloudGroup.classList.add('hide');
    glowGroup.classList.remove('show');
    glowGroup.classList.add('hide');

    // Show specific groups based on the theme
    if (currentTheme === 'dark' || currentTheme === 'purple') {
      moonGroup.classList.remove('hide');
      moonGroup.classList.add('show');
      glowGroup.classList.remove('hide');
      glowGroup.classList.add('show');
    } else if (currentTheme === 'light') {
      sunGroup.classList.remove('hide');
      sunGroup.classList.add('show');
      cloudGroup.classList.remove('hide');
      cloudGroup.classList.add('show');
    }
  });
}

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  let navElements = document.getElementsByTagName('nav');
  
  if (prevScrollpos > currentScrollPos) {
    // Scrolling up
    for (let i = 0; i < navElements.length; i++) {
      navElements[i].classList.remove('hidden');
    }
  } else {
    // Scrolling down
    for (let i = 0; i < navElements.length; i++) {
      navElements[i].classList.add('hidden');
    }
  }
  
  // Check if scrolling reached the top
  if (currentScrollPos === 0) {
    for (let i = 0; i < navElements.length; i++) {
      navElements[i].classList.remove('box-shadow');
    }
  } else {
    for (let i = 0; i < navElements.length; i++) {
      navElements[i].classList.add('box-shadow');
    }
  }
  
  prevScrollpos = currentScrollPos;
}


function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-container');

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
  })

  document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
  }))
}