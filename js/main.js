var menu = document.getElementById('menu')
var exit = document.getElementById('close')
var check = document.getElementById('check')
var mobile = document.getElementById('mobile')

menu.onclick = function () {
    mobile.setAttribute('class', 'list__mobile')
}

exit.onclick = function () {
    mobile.setAttribute('class', 'header__navigation')
}

check.onclick = function () {
    document.querySelector('.container').classList.toggle('active')
    document.querySelector('.sidebar').classList.toggle('active')
}