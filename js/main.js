const menu = document.querySelector('.header__menu__image')
const mobile = document.querySelector('.header__navigation')
const check = document.getElementById('check')
const fade = document.querySelector('.header__fade')

menu.onclick = () => {
    mobile.setAttribute('class', 'list__mobile')
    fade.classList.add('back__drop')
}

fade.onclick = () => {
    mobile.setAttribute('class', 'header__navigation')
    fade.classList.remove('back__drop')
}

check.onclick = () => {
    let lights = document.querySelectorAll('.light')
    let lightens = document.querySelectorAll('.lighten')

    for (i = 0; i < lights.length; i++)
        lights[i].classList.toggle('dark')

    for (i = 0; i < lightens.length; i++)
        lightens[i].classList.toggle('darken')
}