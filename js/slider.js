// Local Storage
let orderList = JSON.parse(localStorage.getItem('items'))
if (orderList == null) 
	orderList = []
localStorage.setItem('items', JSON.stringify(orderList))

const order = id => {
	if (!orderList.includes(id))
		orderList.push(id)
	localStorage.setItem('items', JSON.stringify(orderList))
}

const sliderCreator = (index, start, end) => {
	const slideshow = document.querySelectorAll('.slideshow')
	fetch('server/data.json')
		.then(res => res.json())
		.then(products => {
			products.slice(start, end).map(product => {
				slideshow[index].innerHTML += `
          <div class="slide">
            <img src="${product.url}" alt="car" class="slide__image">
            <div class="slide__overlay">
              <span class="slide__title">${product.name}</span>
              <span class="slide__title">سال ساخت: ${product.year}</span>
              <span class="slide__title">قیمت: ${product.price}</span>
              <button class='button button__success' onclick="order(${product.id})">سفارش</button>
            </div>
          </div>`
			})
		})
}

sliderCreator(0, 12, 17)
sliderCreator(1, 18, 23)
sliderCreator(2, 24, 29)
