const menu = document.querySelector('.header__menu__image')
const mobile = document.querySelector('.header__navigation')
const check = document.getElementById('check')
const exit = document.getElementById('close')

menu.onclick = function () {
    mobile.setAttribute('class', 'list__mobile')
}

exit.onclick = function () {
    mobile.setAttribute('class', 'header__navigation')
}

check.onclick = function () {
    document.querySelector('.container').classList.toggle('dark')
    document.querySelector('.sidebar').classList.toggle('dark')
}