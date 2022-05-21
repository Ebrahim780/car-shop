let slideIndex = 1
showSlides(slideIndex)

const plusSlides = index => showSlides(slideIndex += index)

const currentSlide = index => showSlides(slideIndex = index)

function showSlides(index) {
  let slides = document.getElementsByClassName('slide')
  let dots = document.getElementsByClassName('dot')

  if (index > slides.length) slideIndex = 1

  if (index < 1) slideIndex = slides.length

  for (let slide of slides)
    slide.style.display = 'none'

  for(let dot of dots)
    dot.className = dot.className.replace(' active', '')
  
  slides[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].className += ' active'
}