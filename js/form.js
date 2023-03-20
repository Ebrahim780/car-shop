const login = document.querySelector('.login')
const signup = document.querySelector('.signup')
const form = document.querySelector('.login__form')
const inputs = form.querySelectorAll('input')
const button = document.querySelector('button')

const switchForm = textButton => {
	let boxes = document.querySelectorAll('.form__box')

	for (let i = 2; i < boxes.length - 1; i++) boxes[i].classList.toggle('hidden')

	login.classList.toggle('active')
	signup.classList.toggle('active')
	button.innerHTML = textButton
}

const formValidator = element => {
	if (element.value.trim() == '') element.classList.add('danger')
	else element.classList.remove('danger')
}

login.addEventListener('click', () => switchForm('ورود'))
signup.addEventListener('click', () => switchForm('ثبت نام'))

for (let input of inputs)
	input.addEventListener('blur', () => formValidator(input))
