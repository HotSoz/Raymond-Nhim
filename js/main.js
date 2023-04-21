//RUN ON DOCUMENT READY
$(document).ready(function(){
    projectCardAppend()
    console.log("hello");
});

//RUN ON PAGE LOADED
$(window).on('load',function(){

});

//RUN WHEN WINDOW IS RESIZED
$(window).on('resize',function(){

});

//RUN WHEN PAGE IS SCROLLED
//THIS INCLUDES SCROLLING OF ANY KIND (NOT JUST USER CONTROLLED)
$(window).on('scroll',function(){
    
});

function projectCardAppend() {

    let icons = ['fa-window-maximize', 'fa-gamepad'];
    let titles = ['Death Stranding Landing Page', 'Solar Clicker', 'React'];
    let images = ['death-stranding-img.png', 'solar-clicker-img.png', 'death-stranding-img.png']
    let texts = [
                    'This project involves building a website from scratch for studying and project development purposes, with a focus on hands-on learning in HTML, CSS, JavaScript, project management, and collaboration. The project aims to develop skills for future web development projects and showcase abilities to potential employers or clients. This project also features Death Stranding. All rights go to Kojima Productions.',
                    'A standard cookie clicker like game with a little twist that involves solar power instead of just cookies. Dive into the wonders of solar energy and many different planets to click. Learn something new with tips or fun facts about the vast universe. Welcome to Solar Clicker',
                ]
    let techs = [['HTML', 'CSS', 'JavaScript', 'JQuery'], ['C#', 'Unity'], ['React', 'JavaScript']];

    for(i = 0; i < icons.length; i++){
        let techSec = "";
        techs[i].forEach((tech) => {
            techSec += `<li>${tech}</li>`
        });

        let temp = `
        <div class="project-card">
            <div class="card-icon"><i class="fa-solid ${icons[i]}"></i></div>
            <div class="card-header"><h4>${titles[i]}</h4></div>
            <div class="card-img"><img src="images/${images[i]}"/></div>
            <div class="card-p">                        
                <p>${texts[i]}</p>
            </div>
            <div class="card-code">
                <ul>
                    ${techSec}
                </ul>
            </div>
        </div>`
        $(".project-container").append(temp);
    }

}