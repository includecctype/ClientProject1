gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const openmenu = document.querySelector(".openmenu")
const closemenu = document.querySelector(".closemenu")
const dropdownnavbar = document.querySelector(".dropdownnavbar")
const scrolldetect = document.querySelector(".scrolldetect")
const scrolldetectheight = getComputedStyle(scrolldetect).height

openmenu.addEventListener("click", function(){

    dropdownnavbar.style.display = "flex"
    openmenu.style.opacity = "0"

})

closemenu.addEventListener("click", function(){

    dropdownnavbar.style.display = "none"
    openmenu.style.opacity = "1"

})

/*
gsap.to(, {

    scrollTrigger:{
        trigger: termscroll,
        pin: true,
        start: "top top",
        end: `+=${scrolldetectheight}`,
        toggleActions: "play none none none",
        markers: true
    }

})

*/