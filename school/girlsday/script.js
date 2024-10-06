function drag(ev) {
    ev.preventDefault();
    if (ev.buttons == 1) {
        this.style.left = parseInt(this.style.left.slice(0,-2) || 0) + ev.movementX + "px";
        this.style.top = parseInt(this.style.top.slice(0,-2) || 0) + ev.movementY + "px";
        
           
    }
}

function scale() {
    this.classList.toggle("zoomed");
}

document.querySelectorAll(".draggable").forEach(elem => elem.addEventListener("mousemove",drag));
document.querySelectorAll(".zoomable").forEach(elem => elem.addEventListener("click",scale));