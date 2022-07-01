export default class CartItem {
    static render({ id: itemId, name, brand, image, sale, price, discountPrice, stock, quantity, gender, size }) {
        return `
      <div class="row">
      <div class="row cart__main align-items-center">
          <div class="col-2"><a href="/#/product/${itemId}" class="shopping-cart__first-link"><img class="shopping-cart__img" src="${image}" alt="${name}"></a></div>
          <div class="col">
              <div class="row text-muted">${brand}</div>
              <div class="row">
                <a href="/#/product/${itemId}" class="shopping-cart__link">
                    ${name}
                </a>
              </div>
              <div class="row text-muted">Size: ${size} </div>
          </div>
          <div class="col d-flex justify-content-start">
              <button class="page-link" onClick="decreaseNumber('counter')">
              <i class="fas fa-minus"></i></button>
              <input style="text-align:center;" type="text" name="" class="page-link" value=1 id="counter" >
              <button class="page-link counter__plus" onClick="increaseNumber('counter')">
              <i class="fas fa-plus"></i></button>
          </div>
          <div class="col d-flex">$${discountPrice ? discountPrice : price}<i class="bi bi-trash cart__close-btn" id="${itemId}"></i></div>
      </div>
  </div>
    `;
    }
}