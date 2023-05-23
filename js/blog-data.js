$(document).ready(function(){
    BlogShowCase();
});

function BlogShowCase() {
    const blog1 = Blogs.map((obj, index) => {
        const { subject, date, title } = obj;

        return $(".blog-container").append(`
            <a href="">
                <div class="blog-card rel">
                    <div class="line"></div>
                        <div class="blog-card-container">
                            <h5 class="card-subject">${subject}</h5>
                            <h6 class="card-date">${date}</h6>
                            <span class="card-title"><h1>${title}</h1></span>
                        </div>
                    <div class="back-color prime"></div>
                </div>
            </a>
        `);
    })
}

let Blogs = [
    {
        subject: "My Journey",
        date: "May 05, 2023",
        title: "The Start of My Developer Journey!",
    },
];