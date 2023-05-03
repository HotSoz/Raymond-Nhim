$(document).ready(function(){
    primaryCardShowCase();
    secondaryCardShowCase();
});

// Only three top showcase
let primaryCards = [
    {
        title: 'Death Stranding Landing Page',
        image: 'death-stranding-img.png',
        text: 'This project involves building a website from scratch for studying and project development purposes, with a focus on hands-on learning in HTML, CSS, JavaScript, project management, and collaboration. The project aims to develop skills for future web development projects and showcase abilities to potential employers or clients. This project also features Death Stranding. All rights go to Kojima Productions.',
        link: 'https://deconile.github.io/death-stranding/',
        icon: 'fa-window-maximize',
        techs: ['VSCode'],
        codes: ['HTML', 'CSS', 'JavaScript', 'JQuery']
    },
    {
        icon: 'fa-gamepad',
        title: 'Solar Clicker',
        image: 'solar-clicker-img.png',
        text: 'A standard cookie clicker like game with a little twist that involves solar power instead of just cookies. Dive into the wonders of solar energy and many different planets to click. Learn something new with tips or fun facts about the vast universe. Welcome to Solar Clicker',
        link: '',
        techs: ['Unity', "Aesprite"],
        codes: ['C#']
    }
];

let secondaryCards = [

];

function primaryCardShowCase() {
    const primary1 = primaryCards.map((obj, index) => {
        const { icon, title, image, text, link, techs, codes } = obj;
        let cardTech = "";
        let cardCode = "";
        techs.forEach((tech) => {
            cardTech += `<li>${tech}</li>`
        });
        codes.forEach((code) => {
            cardCode += `<li>${code}</li>`
        });

        return $(".project-container").append(`
            <a class="card-a card-animation" href="${link}" target="_blank">
                <div class="project-card">
                    <div class="card-icon"><i class="fa-solid ${icon}"></i></div>
                    <div class="card-header"><h4>${title}</h4></div>
                    <div class="card-img"><img src="images/${image}"/></div>
                    <div class="card-p">                        
                        <p>${text}</p>
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
            </a>
        `);
    })
}
