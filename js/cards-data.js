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
                        <div class="card-header"><h4>${title}</h4></div>
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
                <div class="link-style">
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
        title: 'TryHackMe - Journal',
        image: '../projects/images/cyber.png',
        text: 'Detailed journal and process of a light hacking process.',
        link: 'https://docs.google.com/document/d/1_KFK5MBgRjcuTHKx4FbNpfHijGtx2_zNtWJjlsq1aqk/edit?usp=sharing',
        techs: ['Google Docs'],
        codes: ['SQL', 'Python'],
        type: 'project',
    },
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
    {
        svg: 'game.svg',
        title: 'HarNess',
        image: 'HarNess (1).png',
        text: 'A standard strategy game with a little twist that involves solar power. Dive into the wonders of solar energy and many different planets. Learn something new with tips or fun facts about the vast universe. Welcome to HarNess',
        link: 'projects/solar-clicker.html',
        techs: ['Unity', 'Aesprite'],
        codes: ['C#'],
        type: 'project',
    },
    {
        svg: 'project.svg',
        title: 'Card Transition',
        image: 'card-transition.png',
        text: 'Focusing on perspective 3D, this projects works with cards set on a surface to be picked up.',
        link: 'https://codepen.io/HotSoz/pen/LYggbZq',
        techs: ['CodePen'],
        codes: ['HTML', 'CSS'],
        type: 'project',
    },
];




{/* 
    <div class="card-img overlay">
        <img src="images/${image}"/>
    </div>
*/}