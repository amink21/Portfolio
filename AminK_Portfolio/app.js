//For section scrolling
let sections = document.querySelectorAll('section');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        }
    )}

//for cursor
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove",function(e){
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
})

//for home parallax movement
document.addEventListener("mousemove", parallax);

function parallax(e){
    this.querySelectorAll(".layer").forEach(function(move) {

        var speed = move.getAttribute("data-speed");

        var x = (e.clientX * speed) /500
        var y = (e.clientY * speed) /500

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    })
}
