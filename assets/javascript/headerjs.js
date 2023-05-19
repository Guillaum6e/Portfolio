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

// const flippingSpan = document.getElementsByClassName("flippingSpan");
// let timestamp = null;
// let lastMouseX = null;
// let lastMouseY = null;

// header.onmousemove = function mouseSpeed(e) {
//     if (timestamp === null) {
//         timestamp = Date.now();
//         lastMouseX = e.clientX;
//         lastMouseY = e.clientY;
//     }

//     let now = Date.now();
//     let dt = now - timestamp;
//     let dx = e.clientX - lastMouseX;
//     let dy = e.clientY - lastMouseY;
//     let speedX = Math.abs(dx / dt * 100);
//     let speedY = Math.abs(dy / dt * 100);
//     let speed = Math.round(speedX + speedY / 2);

//     flippingSpan.onmouseover = function () {
//         console.log(yousk2);
//         flippingSpan.style.transform = "rotateX(" + speed * 360 + "deg)";
//     };

//     timestamp = now;
//     lastMouseX = e.clientX;
//     lastMouseY = e.clientY;
// };