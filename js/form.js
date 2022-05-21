const login = document.querySelector('.login')
const signup = document.querySelector('.signup')
const form = document.querySelector('.login__form')
const inputs = form.querySelectorAll('input')

const switchForm = (show, hide) => {
    let boxes = document.querySelectorAll('.form__box')
    for (let i = 2; i < boxes.length - 1; i++) {
        boxes[i].classList.toggle('hidden')
    }
    show.classList.toggle('active')
    hide.classList.toggle('active')
}

const formValidator = element => {
    if (element.value.trim() == '')
        element.classList.add('danger')
    else
        element.classList.remove('danger')
}

login.addEventListener('click', () => switchForm(login, signup))
signup.addEventListener('click', () => switchForm(signup, login))

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('blur', () => formValidator(inputs[i]))
}