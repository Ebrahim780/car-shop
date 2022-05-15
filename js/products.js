fetch('js/data.json')
  .then(Response => Response.json())
  .then(products => products.map(product => {
    document.querySelector('.products').innerHTML += `
    <div class='product'>
      <img src='${product.url}' class='product__image' />
      <div class='product__content'>
        <span>نام: </span>
        <span>${product.name}</span>
      </div>
      <div class='product__content'>
        <span>نوع: </span>
        <span>${product.category}</span>
      </div>
      <div class='product__content'>
        <span>وضعیت: </span>
        <span>${product.status}</span>
      </div>
      <div class='product__content'>
        <span>سال ساخت: </span>
        <span>${product.year}</span>
      </div>
      <div class='product__content'>
        <span>قیمت: </span>
        <span>${product.price}</span>
      </div>
      <div class='product__content'>
        <span>موجود: </span>
        <span>${product.available ? '✔' : '❌'}</span>
      </div>
      <button class='button'>سفارش</button>
    </div>
    `
  }))