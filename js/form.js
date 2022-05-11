const login = document.querySelector('.login')
const signup = document.querySelector('.signup')

const disableBox = (show, hide) => {
    let boxes = document.querySelectorAll('.form__box')
    for (let i = 2; i < boxes.length - 1; i++) {
        boxes[i].classList.toggle('hidden')
    }
    show.classList.toggle('active')
    hide.classList.toggle('active')
}

login.addEventListener('click',() => disableBox(login, signup))
signup.addEventListener('click', () => disableBox(signup, login))