const openmenu = document.querySelector(".openmenu")
const closemenu = document.querySelector(".closemenu")
const dropdownnavbar = document.querySelector(".dropdownnavbar")

openmenu.addEventListener("click", function(){

    dropdownnavbar.style.display = "flex"
    openmenu.style.opacity = "0"

})

closemenu.addEventListener("click", function(){

    dropdownnavbar.style.display = "none"
    openmenu.style.opacity = "1"

})