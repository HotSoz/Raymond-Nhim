$(document).ready(function () {
  BlogShowCase();
});

function BlogShowCase() {
  const blog1 = Blogs.map((obj, index) => {
    const { subject, date, title, page } = obj;

    return $(".blog-container").append(`
            <a href="${page}">
                <div class="blog-card rel">
                    <div class="line"></div>
                    <div class="blog-card-container">
                        <h5 class="card-subject">${subject}</h5>
                        <p class="card-date">${date}</p>
                        <span class="card-title"><h3>${title}</h3></span>
                    </div>
                    <div class="back-color prime"></div>
                </div>
            </a>
        `);
  });
}

let Blogs = [
  {
    subject: "My Journey",
    date: "May 05, 2023",
    title: "The Start of My Developer Journey!",
    page: "",
  },
  {
    subject: "My Journey",
    date: "May 05, 2023",
    title: "The Start of My Developer Journey!",
    page: "",
  },
];
