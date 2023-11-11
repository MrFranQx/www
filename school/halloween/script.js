function footerMargin() {
    let f = document.getElementsByTagName("footer")[0];
    f.style.marginBottom = window.getComputedStyle(f).marginLeft;

}
function onScroll() {
    let scroll = window.scrollY;
    let button = document.getElementById("scrollup");
    if (scroll > 100)
        button.style.opacity = 1;
    else
        button.style.opacity = 0;
}
function scrollToTop() {
    window.scrollTo(0,0);
}

footerMargin();

window.addEventListener("resize",footerMargin);
window.addEventListener("scroll",onScroll);
document.getElementById("scrollup").addEventListener("click",scrollToTop)