const pages = [
    "index.html",
    "about.html",
    "hobbies.html",
    "diary.html",
    "contact.html"
];

const currentPage = window.location.pathname.split("/").pop();
const currentIndex = pages.indexOf(currentPage);

const prevPage = pages[(currentIndex - 1 + pages.length) % pages.length];
const nextPage = pages[(currentIndex + 1) % pages.length];

document.querySelector(".nav-arrow.left").href = prevPage;
document.querySelector(".nav-arrow.right").href = nextPage;
