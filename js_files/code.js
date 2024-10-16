gsap.registerPlugin(ScrollSmoother, ScrollTrigger)


// Scroll Smooth main body

gsap.set(".mainbody", {
    zIndex: 0
})

ScrollSmoother.create({
    smooth: 1.5,
    effects: true,
    content: ".mainbody"
});

// Top Bar

const topbar = document.querySelector(".TopBar")
const guest = document.querySelector(".TopBar p:nth-child(3)")

guest.addEventListener("click", function(){
    window.location.href = "https://system.trendyqmarketing.com/"
})

const TopBarheight = gsap.getProperty(".TopBar", "height")
const TopBarbottom = gsap.getProperty(".TopBar", "bottom")
const mediafullpx = gsap.matchMedia()

mediafullpx.add("(min-width: 1000px)", function(){
    gsap.to(".TopBar", {
        scrollTrigger: {
            trigger: ".TopBar",
            pin: true,
            start: "top top",
            end : "+=1700",
            toggleActions: "play none none none",
            onLeave: function(){
                gsap.to(".laptopnavbar", {
                    top: `${-(TopBarbottom - (TopBarbottom - TopBarheight))}`,
                })
            },
            onEnterBack: function(){
                gsap.to(".laptopnavbar", {
                    top: `${(TopBarbottom - (TopBarbottom - TopBarheight))-TopBarheight}`,
                })
            }
        }
    })
})

const media1000px = gsap.matchMedia()

media1000px.add("(min-width: 550px) and (max-width: 1000px)", function(){
    gsap.to(".TopBar", {
        scrollTrigger: {
            trigger: ".TopBar",
            pin: true,
            start: "top top",
            end : "+=1500",
            toggleActions: "play none none none",
            onLeave: function(){
                gsap.to(".mobilenavbar", {
                    top: `${-(TopBarbottom - (TopBarbottom - TopBarheight))}`,
                })
            },
            onEnterBack: function(){
                gsap.to(".mobilenavbar", {
                    top: `${(TopBarbottom - (TopBarbottom - TopBarheight))-TopBarheight}`,
                })
            }
        }
    })
})

const media550px = gsap.matchMedia()

media550px.add("(max-width: 550px)", function(){
    gsap.to(".TopBar", {
        scrollTrigger: {
            trigger: ".TopBar",
            pin: true,
            start: "top top",
            end : "+=2100",
            toggleActions: "play none none none",
            onLeave: function(){
                gsap.to(".mobilenavbar", {
                    top: `${-(TopBarbottom - (TopBarbottom - TopBarheight))}`,
                })
            },
            onEnterBack: function(){
                gsap.to(".mobilenavbar", {
                    top: `${(TopBarbottom - (TopBarbottom - TopBarheight))-TopBarheight}`,
                })
            }
        }
    })
})

topbar.addEventListener("mouseover", function(){
    gsap.set(topbar, {
        zIndex: 10
    })
})

topbar.addEventListener("mouseleave", function(){
    gsap.set(topbar, {
        zIndex: 3
    })
})


// Navigation Bars

const openmenu = document.querySelector(".openmenu")
const dropdownnavbar = document.querySelector(".dropdownnavbar")
const closemenu = document.querySelector(".closemenu")
const wordlogodiv = document.querySelector(".wordlogodiv")
const mobilenavfirst = document.querySelector(".mobilenavbar p:first-child")
const body = document.querySelector("body")
const laptopnavbar = document.querySelector(".laptopnavbar")
const mobilenavbar = document.querySelector(".mobilenavbar")

const mediamax1000px = window.matchMedia('(min-width: 550px) and (max-width: 1000px)')

if (mediamax1000px.matches){
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

const mediamax550px = window.matchMedia('(max-width: 550px)')

if(mediamax550px.matches){
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


gsap.set(".laptopnavbar", {
    top: gsap.getProperty(".TopBar", "height")
})

gsap.to(".laptopnavbar", {
    scrollTrigger: {
        trigger: ".laptopnavbar",
        pin: true,
        start: `top top+=${TopBarheight}`,
        end: "+=10000",
        toggleActions: "play none none none",
    }
})

gsap.set(".mobilenavbar", {
    top: gsap.getProperty(".TopBar", "height")
})

gsap.to(".mobilenavbar", {
    scrollTrigger: {
        trigger: ".mobilenavbar",
        pin: true,
        start: `top top+=${TopBarheight}`,
        end: "+=10000",
        toggleActions: "play none none none",
    }
})

gsap.to(".laptopnavbar", {
    zIndex: 3
})

gsap.to(".mobilenavbar", {
    zIndex: 3
})

laptopnavbar.addEventListener("mouseover", function(){
    gsap.to(laptopnavbar, {
        zIndex: 10
    })
})

laptopnavbar.addEventListener("mouseleave", function(){
    gsap.to(laptopnavbar, {
        zIndex: 3
    })
})

mobilenavbar.addEventListener("mouseover", function(){
    gsap.to(mobilenavbar, {
        zIndex: 10
    })
})

mobilenavbar.addEventListener("mouseleave", function(){
    gsap.to(mobilenavbar, {
        zIndex: 3
    })
})

// Mission

const missiontopspacing1 = document.querySelector(".missiontopspacing1")
const missiontopspacing2 = document.querySelector(".missiontopspacing2")

const height1 = getComputedStyle(topbar).height
const height2 = getComputedStyle(laptopnavbar).height

missiontopspacing1.style.height = `${height1}`
missiontopspacing2.style.height = `${height2}`

if(mediamax1000px.matches){
    missiontopspacing2.style.height = `${mobilenavbar.style.height}`
}

if(mediamax550px.matches){
    missiontopspacing2.style.height = `${mobilenavbar.style.height}`
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

const togglearrow = document.querySelector(".togglearrow");
const arrows = document.querySelector(".arrows");

gsap.set(arrows, {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
    opacity: 0, 
});

gsap.set(togglearrow, {
    position:"absolute",
    width: "100%",
    height: "100%",
    zIndex: 4
})

togglearrow.addEventListener("mouseover", function() {
    gsap.to(arrows, { opacity: 0.7, duration: 0.5, zIndex: 4 });
});

togglearrow.addEventListener("mouseleave", function() {
    gsap.to(arrows, { opacity: 0, duration: 0.5,  zIndex: 0 });
});

arrows.addEventListener("mouseover", function() {
    gsap.to(arrows, { opacity: 0.7, duration: 0.5,  zIndex: 4  });
});

arrows.addEventListener("mouseleave", function() {
    gsap.to(arrows, { opacity: 0, duration: 0.5,  zIndex: 0 });
});


/*
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
*/


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

    gsap.to(discoverspan1, {
        duration: 1,
        scale: 300
    })
    
})

discoverbtn1.addEventListener("mouseleave", function(cursor){

    const x1 = cursor.clientX
    const y1 = cursor.clientY

    const x2 = discoverbtn1.getBoundingClientRect().left
    const y2 = discoverbtn1.getBoundingClientRect().top
    
    discoverspan1.style.top = `${y1 - y2}px`
    discoverspan1.style.left = `${x1 - x2}px`
    
    gsap.to(discoverspan1, {
        duration: 1,
        scale: 1
    })
})

discoverbtn2.addEventListener("mouseover", function(cursor){

    const x1 = cursor.clientX
    const y1 = cursor.clientY

    const x2 = discoverbtn2.getBoundingClientRect().left
    const y2 = discoverbtn2.getBoundingClientRect().top
    
    discoverspan2.style.top = `${y1 - y2}px`
    discoverspan2.style.left = `${x1 - x2}px`
    
    gsap.to(discoverspan2, {
        duration: 1,
        scale: 300
    })
})

discoverbtn2.addEventListener("mouseleave", function(cursor){

    const x1 = cursor.clientX
    const y1 = cursor.clientY

    const x2 = discoverbtn2.getBoundingClientRect().left
    const y2 = discoverbtn2.getBoundingClientRect().top
    
    discoverspan2.style.top = `${y1 - y2}px`
    discoverspan2.style.left = `${x1 - x2}px`
    
    gsap.to(discoverspan2, {
        duration: 1,
        scale: 1
    })
})

discoverbtn3.addEventListener("mouseover", function(cursor){

    const x1 = cursor.clientX
    const y1 = cursor.clientY

    const x2 = discoverbtn3.getBoundingClientRect().left
    const y2 = discoverbtn3.getBoundingClientRect().top
    
    discoverspan3.style.top = `${y1 - y2}px`
    discoverspan3.style.left = `${x1 - x2}px`
    
    gsap.to(discoverspan3, {
        duration: 1,
        scale: 300
    })
})

discoverbtn3.addEventListener("mouseleave", function(cursor){

    const x1 = cursor.clientX
    const y1 = cursor.clientY

    const x2 = discoverbtn3.getBoundingClientRect().left
    const y2 = discoverbtn3.getBoundingClientRect().top
    
    discoverspan3.style.top = `${y1 - y2}px`
    discoverspan3.style.left = `${x1 - x2}px`
    
    gsap.to(discoverspan3, {
        duration: 1,
        scale: 1
    })
})

discoverbtn4.addEventListener("mouseover", function(cursor){

    const x1 = cursor.clientX
    const y1 = cursor.clientY

    const x2 = discoverbtn4.getBoundingClientRect().left
    const y2 = discoverbtn4.getBoundingClientRect().top
    
    discoverspan4.style.top = `${y1 - y2}px`
    discoverspan4.style.left = `${x1 - x2}px`
    
    gsap.to(discoverspan4, {
        duration: 1,
        scale: 300
    })
})

discoverbtn4.addEventListener("mouseleave", function(cursor){

    const x1 = cursor.clientX
    const y1 = cursor.clientY

    const x2 = discoverbtn4.getBoundingClientRect().left
    const y2 = discoverbtn4.getBoundingClientRect().top
    
    discoverspan4.style.top = `${y1 - y2}px`
    discoverspan4.style.left = `${x1 - x2}px`
    
    gsap.to(discoverspan4, {
        duration: 1,
        scale: 1
    })
})

const discoverbtn = document.getElementsByClassName("discoverbtn")
const discoverindex = document.getElementsByClassName("discoverindex")

for(let i = 0; i < 4; i++){
    discoverindex[i].addEventListener("mouseover", function(){
        gsap.set(discoverbtn[i], {
            zIndex: 6
        })
    })
    
    discoverbtn[i].addEventListener("mouseover", function(){
        gsap.set(discoverbtn[i], {
            zIndex: 6
        })
    })

    discoverindex[i].addEventListener("mouseleave", function(){
        gsap.set(discoverbtn[i], {
            zIndex: 0
        })
    })
    
    discoverbtn[i].addEventListener("mouseleave", function(){
        gsap.set(discoverbtn[i], {
            zIndex: 0
        })
    })
}

// Top Pick

const bottomshopnow = document.querySelector(".bottomshopnow")
const bottomshopnow2 = document.querySelector(".bottomshopnowdiv p:nth-child(2)")
const bottomshopnow3 = document.querySelector(".bottomshopnowdiv p:nth-child(3)")

bottomshopnow3.addEventListener("mouseover", function(){
    gsap.set(bottomshopnow, {
        zIndex: 5
    })
})

bottomshopnow3.addEventListener("mouseleave", function(){
    gsap.set(bottomshopnow, {
        zIndex: 0
    })
})

bottomshopnow.addEventListener("mouseover", function(){
    gsap.set(bottomshopnow, {
        zIndex: 5
    })
})

bottomshopnow.addEventListener("mouseleave", function(){
    gsap.set(bottomshopnow, {
        zIndex: 0
    })
})
