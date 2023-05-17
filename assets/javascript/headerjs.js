const header = document.getElementById("header");
header.style.position = "absolute";
window.onscroll = function () { headerScroll() };

function headerScroll() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        header.style.transform = "translate(0, -100vh)";
    } else {
        header.style.transform = "translate(0, 0vh)";
    }
}