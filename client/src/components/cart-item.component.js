export default class CartItem {
    static render({ id: itemId, name, brand, image, sale, price, discountPrice, stock, quantity }) {
        console.log("ItemId", itemId)
        return `
      <div class="row">
      <div class="row cart__main align-items-center">
          <div class="col-2"><a href="/#/product/${itemId}"><img class="img-fluid" src="${image}" alt="${name}"></a></div>
          <div class="col">
              <div class="row text-muted">${brand}</div>
              <div class="row">
                <a href="/#/product/${itemId}">
                    ${name}
                </a>
              </div>
          </div>
          <div class="col d-flex justify-content-start">
              <button class="page-link" onClick="decreaseNumber('counter')">
              <i class="fas fa-minus"></i></button>
              <input style="text-align:center;" type="text" name="" class="page-link" value=1 id="counter" >
              <button class="page-link counter__plus" onClick="increaseNumber('counter')">
              <i class="fas fa-plus"></i></button>
          </div>
          <div class="col">$${discountPrice ? discountPrice : price} <span class="cart__close-btn id="${itemId}">&#10005;</span></div>
      </div>
  </div>
    `;
    }
}
