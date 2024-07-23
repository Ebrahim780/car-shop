const menu = document.querySelector('.header__menu__image')
const mobile = document.querySelector('.header__navigation')
const check = document.getElementById('check')
const fade = document.querySelector('.header__fade')

let mode = 'light'
let modeStatus = JSON.parse(localStorage.getItem('mode'))

const changeMode = () => {
  let lights = document.querySelectorAll('.light')
  let lightens = document.querySelectorAll('.lighten')

  for (let light of lights) light.classList.toggle('dark')

  for (let lighten of lightens) lighten.classList.toggle('darken')

  mode === 'light' ? (mode = 'dark') : (mode = 'light')

  document.querySelector(':root').style.colorScheme = mode

  localStorage.setItem('mode', JSON.stringify(mode))
}

if (modeStatus === 'dark') {
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
