let dayNight = document.querySelector('.dayNight')
let menu = document.querySelector('.menu')
let body = document.querySelector('body')
let nav =document.querySelector('.nav')

dayNight.onclick = function(){
    body.classList.toggle('dark')
    dayNight.classList.toggle('active')
}

menu.onclick = function(){
    menu.classList.toggle('active')
    nav.classList.toggle('active')
}
