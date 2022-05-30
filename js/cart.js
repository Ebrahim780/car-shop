const div = document.createElement('div')
div.classList.add('cart')
document.querySelector('.content').append(div)

let orderList = JSON.parse(localStorage.getItem('items'))

if (orderList == null)
  orderList = []

const showCart = () => {
  fetch('js/data.json')
    .then(res => res.json())
    .then(products => {
      div.innerHTML = ''
      if (orderList.length)
        products.map(product => {
          if (orderList.includes(Number(product.id)))
            div.innerHTML += `
      <div class='card'>
        <img src='${product.url}' class='card__image' />
        <div class='card__content'>
          <span>نام: </span>
          <span>${product.name}</span>
        </div>
        <div class='card__content'>
          <span>نوع: </span>
          <span>${product.category}</span>
        </div>
        <div class='card__content'>
          <span>وضعیت: </span>
          <span>${product.status}</span>
        </div>
        <div class='card__content'>
          <span>سال ساخت: </span>
          <span>${product.year}</span>
        </div>
        <div class='card__content'>
          <span>قیمت: </span>
          <span>${product.price}</span>
        </div>
        <div class='card__content'>
          <span>موجود: </span>
          <span>${product.available ? '✅' : '❌'}</span>
        </div>
        <div class='card__box__button'>
          <button class='button button__danger' onclick='removeItem(${product.id})'>حذف</button>
          <button class='button button__success'>پرداخت</button>
        </div>
      </div>
      `})

      else div.innerHTML += `<div class='cart__empty'>
      <img class='empty__image' src='icon/public/empty.svg' />
      <h2 class='empty__content'>سبد خرید شما خالی است</h2>
      </div>`
    })
}

showCart()

const removeItem = id => {
  orderList = orderList.filter(item => item !== id)
  localStorage.setItem('items', JSON.stringify(orderList))
  showCart()
}