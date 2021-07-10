var navMenu       = document.querySelector('.nav-menu')
var linkConainer1 = document.querySelector('.link-container-1')
var linkConainer2 = document.querySelector('.link-container-2')
var linkConainer3 = document.querySelector('.link-container-3')
var arrow1         = document.querySelector('.arrow-1')
var arrow2         = document.querySelector('.arrow-2')
var arrow3         = document.querySelector('.arrow-3')


function menushow() {
    navMenu.classList.toggle('nav-menu-toggle')
    console.log("hello")
}

function productDropdown() {

    linkConainer1.classList.toggle('link-container-1-toggle')
    arrow1.classList.toggle('arrow-toggle-1')
    
}
function companyDropdown() {

    linkConainer2.classList.toggle('link-container-2-toggle')
    arrow2.classList.toggle('arrow-toggle-2')
}

function connectDropdown() {

    linkConainer3.classList.toggle('link-container-3-toggle')
    arrow3.classList.toggle('arrow-toggle-3')
    
}

