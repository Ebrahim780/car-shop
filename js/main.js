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
    document.querySelector('.container').classList.toggle('dark')
    document.querySelector('.sidebar').classList.toggle('dark')
}