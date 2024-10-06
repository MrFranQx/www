function footerMargin() {
    const f = document.querySelector("body > footer");
    if (media.matches) {
        f.style.marginBottom = window.getComputedStyle(f).marginLeft;
    }
    else {
        f.style.marginBottom = 0;
    }
}
function onScroll() {
    const scroll = window.scrollY;
    const button = document.querySelector("#scrollup");
    if (scroll > 100)
        button.style.opacity = 1;
    else
        button.style.opacity = 0;
}
function scrollToTop() {
    window.scrollTo(0,0);
}
function setSublistWidth() {
    const menus = document.querySelectorAll("body > nav > ul > li > ul");
        for (const menu of menus) {
            if (media.matches) {
                menu.style.width = window.getComputedStyle(menu.parentElement).width;
            }
            else {
                menu.style.width = "";
            }
        }
}
function showNavi() {
    document.querySelector("body > nav").classList.toggle("active");
    document.querySelector("div.hide").classList.toggle("active");
}

function toggleMenu() {
    this.parentElement.classList.toggle("active");
    const i = this.querySelector("i");
    i.classList.toggle("fa-chevron-up");
    i.classList.toggle("fa-chevron-down");
}

let media = window.matchMedia("screen and (width >= 768px)");

footerMargin();
setSublistWidth();

window.addEventListener("resize",footerMargin);
window.addEventListener("resize",setSublistWidth);
window.addEventListener("scroll",onScroll);

document.querySelector("#scrollup").addEventListener("click",scrollToTop)

document.querySelector("#navi").addEventListener("click", showNavi);
document.querySelector("div.hide").addEventListener("click", showNavi);

document.querySelectorAll("body > nav > ul > li > button").forEach(
    elem => elem.addEventListener("click",toggleMenu)
);