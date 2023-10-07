const root = document.documentElement;
const btn = document.querySelector(".algolia-btn");

btn.addEventListener("mouseover", () => {
    root.style.setProperty("--size", "250px");
    root.style.setProperty("--shineColor", "rgba(255, 255, 255, 0.3)");
});

btn.addEventListener("mouseleave", () => {
    root.style.setProperty("--size", "0px");
    root.style.setProperty("--shineColor", "rgba(255, 255, 255, 0.0)");
});

btn.addEventListener("mousemove", (e) => {
    root.style.setProperty("--x", e.offsetX + "px");
    root.style.setProperty("--y", e.offsetY + "px");
});