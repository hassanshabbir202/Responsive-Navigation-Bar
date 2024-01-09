// target icon

const hamburger = document.getElementById("hamburger");
const crossIcon = document.getElementById("crossIcon");
const animationDiv = document.querySelector(".animation-div");


hamburger.addEventListener("click" , () => {
    animationDiv.style.top = '0%';
});


crossIcon.addEventListener("click" , () => {
    animationDiv.style.top = '-90%';
})