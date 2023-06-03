$(document).ready(function(){
    CardShowCase();
});

function CardShowCase() {
    const card1 = Cards.map((obj, index) => {
        const { svg, title, image, text, link, techs, codes, type } = obj;
        let cardTech = "";
        let cardCode = "";
        techs.forEach((tech) => {
            cardTech += `<li class="card-tech">${tech}</li>`
        });
        codes.forEach((code) => {
            cardCode += `<li class="card-code">${code}</li>`
        });

        return $(".project-container").append(`
            <div class="project-card rel">
                <div class="card-info">
                    <div class="svg-container"><img src="svg/${svg}" class="svg-style" /></div>
                    <div class="label">
                        <div class="card-header"><h3>${title}</h3></div>
                    </div>
                    <div class="card-details">
                        <ul>
                            ${cardTech}
                            ${cardCode}
                        </ul>
                    </div>
                    <div class="card-description">                        
                        <p>${text}</p>
                    </div>
                </div>
                <div class="link-size">
                    <a href="${link}" target="_blank">
                        <div class="card-link">
                            <p>view project</p>
                        </div>
                    </a>
                </div>
                <div class="back-color prime"></div>
            </div>
        `);
    })
}

// Only three top showcase
let Cards = [
    {
        svg: 'web.svg',
        title: 'Death Stranding',
        image: 'death-stranding-img.png',
        text: 'This project involves building a website from scratch for studying and project development purposes, with a focus on hands-on learning in HTML, CSS, JavaScript, project management, and collaboration. The project aims to develop skills for future web development projects and showcase abilities to potential employers or clients. This project also features Death Stranding. All rights go to Kojima Productions.',
        link: 'https://deconile.github.io/death-stranding/',
        techs: ['VSCode'],
        codes: ['HTML', 'CSS', 'JQuery'],
        type: 'website',
    },
    // {
    //     svg: 'game.svg',
    //     title: 'Solar Clicker',
    //     image: 'solar-clicker-img.png',
    //     text: 'A standard cookie clicker like game with a little twist that involves solar power instead of just cookies. Dive into the wonders of solar energy and many different planets to click. Learn something new with tips or fun facts about the vast universe. Welcome to Solar Clicker',
    //     link: '',
    //     techs: ['Unity', 'Aesprite'],
    //     codes: ['C#'],
    //     type: 'blog',
    // },
    {
        svg: 'project.svg',
        title: 'Card Transition',
        image: 'card-transition.png',
        text: 'Focusing on perspective 3D, this projects works with cards set on a surface to be picked up.',
        link: 'https://codepen.io/HotSoz/pen/LYggbZq',
        techs: ['CodePen'],
        codes: ['HTML', 'CSS'],
        type: 'project',
    }
];




{/* 
    <div class="card-img overlay">
        <img src="images/${image}"/>
    </div>
*/}