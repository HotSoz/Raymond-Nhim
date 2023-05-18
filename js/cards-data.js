$(document).ready(function(){
    CardShowCase();
});

// Only three top showcase
let Cards = [
    {
        icon: 'fa-window-maximize',
        title: 'Death Stranding Landing Page',
        image: 'death-stranding-img.png',
        text: 'This project involves building a website from scratch for studying and project development purposes, with a focus on hands-on learning in HTML, CSS, JavaScript, project management, and collaboration. The project aims to develop skills for future web development projects and showcase abilities to potential employers or clients. This project also features Death Stranding. All rights go to Kojima Productions.',
        link: 'https://deconile.github.io/death-stranding/',
        techs: ['VSCode'],
        codes: ['HTML', 'CSS', 'JQuery'],
        type: 'website',
    },
    {
        icon: 'fa-gamepad',
        title: 'Solar Clicker',
        image: 'solar-clicker-img.png',
        text: 'A standard cookie clicker like game with a little twist that involves solar power instead of just cookies. Dive into the wonders of solar energy and many different planets to click. Learn something new with tips or fun facts about the vast universe. Welcome to Solar Clicker',
        link: '',
        techs: ['Unity', 'Aesprite'],
        codes: ['C#'],
        type: 'blog',
    },
    {
          icon: 'fa-code',
        title: 'Card Transition',
        image: 'card-transition.png',
        text: 'Want to pick up a card as you hover it?',
        link: 'https://codepen.io/HotSoz/pen/LYggbZq',
        techs: ['CodePen'],
        codes: ['HTML', 'CSS'],
        type: 'project',
    }
];

function CardShowCase() {
    const card1 = Cards.map((obj, index) => {
        const { icon, title, image, text, link, techs, codes, type } = obj;
        let cardTech = "";
        let cardCode = "";
        techs.forEach((tech) => {
            cardTech += `<li>${tech}</li>`
        });
        codes.forEach((code) => {
            cardCode += `<li>${code}</li>`
        });

        return $(".project-container").append(`
            <div class="project-card">
                <div class="card-info">
                    <div class="label">
                        <div><i class="card-icon fa-solid ${icon}"></i></div>
                        <div class="card-header"><h4>${title}</h4></div>
                    </div>
                    <div class="card-img overlay">
                        <img src="images/${image}"/>
                    </div>
                    <div class="card-details">
                        <ul>
                            ${cardTech}
                        </ul>
                        <ul>
                            ${cardCode}
                        </ul>
                    </div>
                </div>
                <a href="${link}" target="_blank">
                    <div class="card-link">
                        <p>view ${type}</p>
                    </div>
                </a>
            </div>
        `);
    })
}


//  <div class="card-p">                        
// <p>${text}</p>
// </div>