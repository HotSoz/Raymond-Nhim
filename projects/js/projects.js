$(document).ready(function(){
    themePrefered();
});

function themePrefered() {
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

document.documentElement.setAttribute('data-theme', prefersDarkMode ? 'dark' : 'light');
}