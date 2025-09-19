document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const header = document.querySelector(".intro");
    const pfp = document.querySelector(".profile");

    window.addEventListener("scroll", () => {
        if (window.scrollY > header.offsetHeight + 100) {
            navbar.classList.add("show");
        } 
        else {
            navbar.classList.remove("show");
        }
    });
});


const abtbtn = document.getElementById("abt");
const skillbtn = document.getElementById("skill");
const educbtn = document.getElementById("educ");
const hobbtn = document.getElementById("hob");
const projbtn = document.getElementById("proj");


function about(){
    abtbtn.classList.add("active");
    skillbtn.classList.remove("active");
    educbtn.classList.remove("active");
    hobbtn.classList.remove("active");
    projbtn.classList.remove("active");
}


function skills(){
    abtbtn.classList.remove("active");
    skillbtn.classList.add("active");
    educbtn.classList.remove("active");
    hobbtn.classList.remove("active");
    projbtn.classList.remove("active");
}

function education(){
    abtbtn.classList.remove("active");
    skillbtn.classList.remove("active");
    educbtn.classList.add("active");
    hobbtn.classList.remove("active");
    projbtn.classList.remove("active");
}
function projects(){
    abtbtn.classList.remove("active");
    skillbtn.classList.remove("active");
    educbtn.classList.remove("active");
    hobbtn.classList.remove("active");
    projbtn.classList.add("active");
}
function hobbies(){
    abtbtn.classList.remove("active");
    skillbtn.classList.remove("active");
    educbtn.classList.remove("active");
    hobbtn.classList.add("active");
    projbtn.classList.remove("active");
}