// No rotate

if (screen.orientation) {
    screen.orientation.lock('portrait').catch(function(error) {
        console.log('Orientation lock failed: ', error);
    });
}

// Navigation Bars

const openmenu = document.querySelector(".openmenu")
const dropdownnavbar = document.querySelector(".dropdownnavbar")
const closemenu = document.querySelector(".closemenu")
const wordlogodiv = document.querySelector(".wordlogodiv")
const mobilenavfirst = document.querySelector(".mobilenavbar p:first-child")
const body = document.querySelector("body")
const topbar = document.querySelector(".TopBar")
const mobilenavbar = document.querySelector(".mobilenavbar")

const mediamax800px = window.matchMedia('(min-width: 550px) and (max-width: 1000px)')

if (mediamax800px.matches){
    openmenu.addEventListener("click", function(){
        openmenu.style.visibility = "hidden"
        dropdownnavbar.style.display = "flex"
        body.style.overflow = "hidden"
    })

    closemenu.addEventListener("click", function(){
        openmenu.style.visibility = "visible"
        dropdownnavbar.style.display = "none"
        body.style.overflowY = "auto"
        body.style.overflowX = "hidden"
    })
}

const mediamax400px = window.matchMedia('(max-width: 550px)')

if(mediamax400px.matches){
    openmenu.addEventListener("click", function(){
        openmenu.style.visibility = "hidden"
        dropdownnavbar.style.display = "flex"
        body.style.overflow = "hidden"
    })
    
    closemenu.addEventListener("click", function(){
        openmenu.style.visibility = "visible"
        dropdownnavbar.style.display = "none"
        body.style.overflowY = "auto"
        body.style.overflowX = "hidden"
    })
}

// Slide Show

const slideshow = document.querySelector(".slideshow")
const slideframe = document.querySelector(".slideframe")
const numbering = document.querySelector(".numbering")
let slideindex = 1

setInterval(function(){

    numbering.textContent = `${parseInt(numbering.textContent) + 1}`

    if(numbering.textContent == "5"){
        numbering.textContent = `${parseInt(numbering.textContent) - 4}`
    }

    ++slideindex

    slideshow.style.transition = "left 1s"

    slideshow.style.left = `${(parseFloat(slideshow.style.left) || 0) - 100}%`

    if(slideindex == 5){

        slideindex = 1

        slideshow.style.left = `${(parseFloat(slideshow.style.left) || 0) + 400}%`

    }

}, 10000)

const rightarrow = document.querySelector(".rightarrow")
const leftarrow = document.querySelector(".leftarrow")
const rightarrowdisguise = document.querySelector(".rightarrowdisguise")
const leftarrowdisguise = document.querySelector(".leftarrowdisguise")
const rightarrowsvg = document.querySelector(".rightarrowsvg")
const leftarrowsvg = document.querySelector(".leftarrowsvg")
const rightarrowsvgdisguise = document.querySelector(".rightarrowsvgdisguise")
const leftarrowsvgdisguise = document.querySelector(".leftarrowsvgdisguise")

rightarrow.addEventListener("click", function(){

    slideshow.style.transition = "left 1s"

    rightarrowsvg.style.display = "none"
    rightarrowsvgdisguise.style.display = "flex"
    rightarrowdisguise.style.animation = "arrowanimate 1s linear"

    setTimeout(function(){
        rightarrowsvg.style.display = "flex"
        rightarrowsvgdisguise.style.display = "none"
    }, 1000)

    ++slideindex

    numbering.textContent = `${parseInt(numbering.textContent) + 1}`

    if(numbering.textContent == "5"){
        slideindex = 1

        numbering.textContent = `${parseInt(numbering.textContent) - 4}`

        slideshow.style.left = `${(parseFloat(slideshow.style.left) || 0) + 400}%`
    }

    slideshow.style.left = `${(parseFloat(slideshow.style.left) || 0) - 100}%`

    rightarrowdisguise.addEventListener("animationend", function(){
        rightarrowdisguise.style.animation = ""
    }, {once:true})

})

leftarrow.addEventListener("click", function(){


    slideshow.style.transition = "left 1s"

    leftarrowsvg.style.display = "none"
    leftarrowsvgdisguise.style.display = "flex"
    leftarrowdisguise.style.animation = "arrowanimate 1s linear"

    setTimeout(function(){
        leftarrowsvg.style.display = "flex"
        leftarrowsvgdisguise.style.display = "none"
    }, 1000)

    --slideindex

    numbering.textContent = `${parseInt(numbering.textContent) - 1}`

    if(numbering.textContent == "0"){
        slideindex = 4

        numbering.textContent = `${parseInt(numbering.textContent) + 4}`

        slideshow.style.left = `${(parseFloat(slideshow.style.left) || 0) - 400}%`
    }

    slideshow.style.left = `${(parseFloat(slideshow.style.left) || 0) + 100}%`

    leftarrowdisguise.addEventListener("animationend", function(){
        leftarrowdisguise.style.animation = ""
    }, {once:true})

})

const togglearrow = document.querySelector(".togglearrow")
const arrows = document.querySelector(".arrows")

arrows.style.transition = "opacity 0.5s"

togglearrow.addEventListener("mouseover", function(){
    arrows.style.opacity = "0.7"
})

togglearrow.addEventListener("mouseleave", function(){
    arrows.style.opacity = "0"
})

arrows.addEventListener("mouseover", function(){
    arrows.style.opacity = "0.7"
})

arrows.addEventListener("mouseleave", function(){
    arrows.style.opacity = "0"
})

// Discover More

const discoverbtn1 = document.querySelector(".discoverbtn1")
const discoverbtn2 = document.querySelector(".discoverbtn2")
const discoverbtn3 = document.querySelector(".discoverbtn3")
const discoverbtn4 = document.querySelector(".discoverbtn4")

const discoverspan1 = document.querySelector(".discoverspan1")
const discoverspan2 = document.querySelector(".discoverspan2")
const discoverspan3 = document.querySelector(".discoverspan3")
const discoverspan4 = document.querySelector(".discoverspan4")

discoverbtn1.appendChild(discoverspan1)
discoverbtn2.appendChild(discoverspan2)
discoverbtn3.appendChild(discoverspan3)
discoverbtn4.appendChild(discoverspan4)


discoverbtn1.addEventListener("mouseover", function(cursor){

    const x1 = cursor.clientX
    const y1 = cursor.clientY

    const x2 = discoverbtn1.getBoundingClientRect().left
    const y2 = discoverbtn1.getBoundingClientRect().top
    
    discoverspan1.style.top = `${y1 - y2}px`
    discoverspan1.style.left = `${x1 - x2}px`
    
    discoverspan1.style.animation = "startdiscoverspan 1s ease-out forwards"

})

discoverbtn1.addEventListener("mouseleave", function(cursor){

    const x1 = cursor.clientX
    const y1 = cursor.clientY

    const x2 = discoverbtn1.getBoundingClientRect().left
    const y2 = discoverbtn1.getBoundingClientRect().top
    
    discoverspan1.style.top = `${y1 - y2}px`
    discoverspan1.style.left = `${x1 - x2}px`
    
    discoverspan1.style.animation = "enddiscoverspan 1s ease-in forwards"

})

discoverbtn2.addEventListener("mouseover", function(cursor){

    const x1 = cursor.clientX
    const y1 = cursor.clientY

    const x2 = discoverbtn2.getBoundingClientRect().left
    const y2 = discoverbtn2.getBoundingClientRect().top
    
    discoverspan2.style.top = `${y1 - y2}px`
    discoverspan2.style.left = `${x1 - x2}px`
    
    discoverspan2.style.animation = "startdiscoverspan 1s ease-out forwards"

})

discoverbtn2.addEventListener("mouseleave", function(cursor){

    const x1 = cursor.clientX
    const y1 = cursor.clientY

    const x2 = discoverbtn2.getBoundingClientRect().left
    const y2 = discoverbtn2.getBoundingClientRect().top
    
    discoverspan2.style.top = `${y1 - y2}px`
    discoverspan2.style.left = `${x1 - x2}px`
    
    discoverspan2.style.animation = "enddiscoverspan 1s ease-in forwards"

})

discoverbtn3.addEventListener("mouseover", function(cursor){

    const x1 = cursor.clientX
    const y1 = cursor.clientY

    const x2 = discoverbtn3.getBoundingClientRect().left
    const y2 = discoverbtn3.getBoundingClientRect().top
    
    discoverspan3.style.top = `${y1 - y2}px`
    discoverspan3.style.left = `${x1 - x2}px`
    
    discoverspan3.style.animation = "startdiscoverspan 1s ease-out forwards"

})

discoverbtn3.addEventListener("mouseleave", function(cursor){

    const x1 = cursor.clientX
    const y1 = cursor.clientY

    const x2 = discoverbtn3.getBoundingClientRect().left
    const y2 = discoverbtn3.getBoundingClientRect().top
    
    discoverspan3.style.top = `${y1 - y2}px`
    discoverspan3.style.left = `${x1 - x2}px`
    
    discoverspan3.style.animation = "enddiscoverspan 1s ease-in forwards"

})

discoverbtn4.addEventListener("mouseover", function(cursor){

    const x1 = cursor.clientX
    const y1 = cursor.clientY

    const x2 = discoverbtn4.getBoundingClientRect().left
    const y2 = discoverbtn4.getBoundingClientRect().top
    
    discoverspan4.style.top = `${y1 - y2}px`
    discoverspan4.style.left = `${x1 - x2}px`
    
    discoverspan4.style.animation = "startdiscoverspan 1s ease-out forwards"

})

discoverbtn4.addEventListener("mouseleave", function(cursor){

    const x1 = cursor.clientX
    const y1 = cursor.clientY

    const x2 = discoverbtn4.getBoundingClientRect().left
    const y2 = discoverbtn4.getBoundingClientRect().top
    
    discoverspan4.style.top = `${y1 - y2}px`
    discoverspan4.style.left = `${x1 - x2}px`
    
    discoverspan4.style.animation = "enddiscoverspan 1s ease-in forwards"

})

