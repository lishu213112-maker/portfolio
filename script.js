// /* CURSOR BALL */

// let cursor = document.querySelector(".cursor")


// document.addEventListener("mousemove", function(e){

//     cursor.style.left = e.clientX + "px"

//     cursor.style.top = e.clientY + "px"

//     let trail = document.createElement("div")

//     trail.classList.add("trail")

//     document.body.appendChild(trail)


//     trail.style.left = e.pageX + "px"

//     trail.style.top = e.pageY + "px"


//     setTimeout(function(){

//           trail.remove()

//     },500)

// })



// /* TYPING EFFECT */

// let text = [

//     "Frontend Developer",

//     "Creative Designer",

//     "JavaScript Learner"

// ]


// let index = 0

// let charIndex = 0

// let typing = document.querySelector("#typing")


// function typeEffect(){


//     if(charIndex < text[index].length){

//         typing.textContent += text[index].charAt(charIndex)

//         charIndex++

//         setTimeout(typeEffect,100)

//     }

//     else{

//         setTimeout(eraseEffect,1500)

//     }

// }



// function eraseEffect(){


//     if(charIndex > 0){

//         typing.textContent = text[index].substring(0,charIndex-1)

//         charIndex--

//         setTimeout(eraseEffect,50)

//     }

//     else{

//         index++

//         if(index >= text.length){

//             index = 0

//         }

//         setTimeout(typeEffect,300)

//     }

// }


// typeEffect()

// let hiddenElements = document.querySelectorAll(".hidden")


// window.addEventListener("scroll", function(){

//     hiddenElements.forEach(function(element){

//         let position = element.getBoundingClientRect().top

//         let screenPosition = window.innerHeight / 1.3


//         if(position < screenPosition){

//             element.classList.add("show")

//         }

//     })

// })




/* ===== CUSTOM CURSOR ===== */
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");
 
document.addEventListener("mousemove", function(e) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    setTimeout(() => {
        follower.style.left = e.clientX + "px";
        follower.style.top = e.clientY + "px";
    }, 80);
});
 
document.addEventListener("mousedown", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1.8)";
    follower.style.transform = "translate(-50%, -50%) scale(0.6)";
});
document.addEventListener("mouseup", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    follower.style.transform = "translate(-50%, -50%) scale(1)";
});
 
/* Cursor grows on hover over clickable elements */
document.querySelectorAll("a, button, .skill-card, .project-card").forEach(el => {
    el.addEventListener("mouseenter", () => {
        follower.style.transform = "translate(-50%, -50%) scale(1.8)";
        follower.style.opacity = "0.3";
    });
    el.addEventListener("mouseleave", () => {
        follower.style.transform = "translate(-50%, -50%) scale(1)";
        follower.style.opacity = "0.6";
    });
});
 
/* ===== TYPING EFFECT ===== */
const phrases = ["Frontend Developer", "Creative Designer", "JavaScript Learner"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.querySelector("#typing");
 
function type() {
    const current = phrases[phraseIndex];
    if (!isDeleting) {
        typingEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
            isDeleting = true;
            setTimeout(type, 1800);
            return;
        }
    } else {
        typingEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }
    }
    setTimeout(type, isDeleting ? 60 : 100);
}
type();
 
/* ===== SCROLL REVEAL ===== */
const hiddenEls = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.15 });
 
hiddenEls.forEach(el => observer.observe(el));
 
/* ===== ACTIVE NAV LINK ON SCROLL ===== */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");
 
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
 
    /* Navbar shrink on scroll */
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
 
/* ===== HAMBURGER MENU ===== */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-links");
 
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navMenu.classList.toggle("open");
});
 
/* Close menu when a link is clicked */
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        navMenu.classList.remove("open");
    });
});
 
/* ===== STAGGERED SKILL CARD ANIMATION ===== */
const skillCards = document.querySelectorAll(".skill-card");
skillCards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 80}ms`;
});