const menu = document.querySelector('.header__menu__image')
const mobile = document.querySelector('.header__navigation')
const check = document.getElementById('check')
const fade = document.querySelector('.header__fade')

mode = false
modeStatus = JSON.parse(localStorage.getItem('mode'))

const changeMode = () => {
    let lights = document.querySelectorAll('.light')
    let lightens = document.querySelectorAll('.lighten')

    for (i = 0; i < lights.length; i++)
        lights[i].classList.toggle('dark')

    for (i = 0; i < lightens.length; i++)
        lightens[i].classList.toggle('darken')

    mode = !mode
    localStorage.setItem('mode', JSON.stringify(mode))
}

if (modeStatus) {
    check.click()
    changeMode()
}

check.onclick = changeMode


// show menu
menu.onclick = () => {
    mobile.setAttribute('class', 'list__mobile')
    fade.classList.add('back__drop')
}


// hide menu
fade.onclick = () => {
    mobile.setAttribute('class', 'header__navigation')
    fade.classList.remove('back__drop')
}