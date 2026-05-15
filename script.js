/* CURSOR BALL */

let cursor = document.querySelector(".cursor")


document.addEventListener("mousemove", function(e){

    cursor.style.left = e.clientX + "px"

    cursor.style.top = e.clientY + "px"

    let trail = document.createElement("div")

    trail.classList.add("trail")

    document.body.appendChild(trail)


    trail.style.left = e.pageX + "px"

    trail.style.top = e.pageY + "px"


    setTimeout(function(){

          trail.remove()

    },500)

})



/* TYPING EFFECT */

let text = [

    "Frontend Developer",

    "Creative Designer",

    "JavaScript Learner"

]


let index = 0

let charIndex = 0

let typing = document.querySelector("#typing")


function typeEffect(){


    if(charIndex < text[index].length){

        typing.textContent += text[index].charAt(charIndex)

        charIndex++

        setTimeout(typeEffect,100)

    }

    else{

        setTimeout(eraseEffect,1500)

    }

}



function eraseEffect(){


    if(charIndex > 0){

        typing.textContent = text[index].substring(0,charIndex-1)

        charIndex--

        setTimeout(eraseEffect,50)

    }

    else{

        index++

        if(index >= text.length){

            index = 0

        }

        setTimeout(typeEffect,300)

    }

}


typeEffect()

let hiddenElements = document.querySelectorAll(".hidden")


window.addEventListener("scroll", function(){

    hiddenElements.forEach(function(element){

        let position = element.getBoundingClientRect().top

        let screenPosition = window.innerHeight / 1.3


        if(position < screenPosition){

            element.classList.add("show")

        }

    })

})