const glow = document.querySelector(".cursor-glow");

let mouseX = 0,
    mouseY = 0,
    x = 0,
    y = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    x += (mouseX - x) * 0.12;
    y += (mouseY - y) * 0.12;

    glow.style.left = x + "px";
    glow.style.top = y + "px";

    requestAnimationFrame(animate);
}

animate();
