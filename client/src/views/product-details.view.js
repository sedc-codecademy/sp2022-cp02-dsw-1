import Error404View from "./error404.view";
import { getCartItems, setCartItems } from "../local-storage"

const addToCart = (item) => {
  let cartItems = getCartItems();
  const existItem = cartItems.find((cartItem) => cartItem._id === item._id);
  if (existItem) {
    cartItems = cartItems.map((cartItem) =>
      cartItem._id === existItem._id ? item : cartItem
    );
  } else {
    cartItems = [...cartItems, item];
  }
  setCartItems(cartItems);
};

export default class ProductDetailsView {
  static async after_render({ request: { id }, data }) {
    window.scrollTo({
      top: 0,
    });

    const products = await data;
    const foundProduct = products.find((product) => product._id === +id);
    if (!foundProduct) return Error404View.render(); //PAZI NA + -ot za bekend

    const selectSize = document.querySelector(".form-select__singleProduct");
    if (!selectSize) return;
    selectSize.addEventListener("change", (e) => {

      foundProduct.size = e.target.value;
      console.log("foundproduct.size", foundProduct.size)

      if (!foundProduct.size) return;
    })

    const addToCartBtn = document.querySelector(".cart__btn-add-to-cart");
    if (!addToCartBtn) return;
    addToCartBtn.addEventListener("click", (e) => {
      e.preventDefault();
      addToCart({
        _id: foundProduct._id,
        name: foundProduct.name,
        brand: foundProduct.brand,
        image: foundProduct.image,
        sale: foundProduct.sale,
        price: foundProduct.price,
        discountPrice: foundProduct.discountPrice,
        stock: foundProduct.stock,
        size: foundProduct.size,
        sale: foundProduct.sale || "",
        quantity: 1,
      });
      document.location.hash = `/cart/${id}`;
    });

  }

  static async render({ request: { id }, data }) {
    const products = await data;
    const foundProduct = products.find((product) => product._id === +id); //PAZI NA + -ot za bekend
    if (!foundProduct) return Error404View.render();
    const { image, name, brand, description, discountPrice, price, sale, size } =
      foundProduct;

    return `
      <section class="py-5">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 align-items-center">
            <div style="text-align: center;" class="col-md-6 img-fluid">
              <img 
                class="mb-5 mb-md-0 singleProduct__custom_img"
                src="${image}"
                alt="${name}"
              />
            </div>
            <div class="col-md-6">
              <h5 class="fw-bolder fs-2">
              ${brand}
              </h5>
              <h1 class="display-5 fw-bolder singleProduct__name">
              ${name}
              </h1>
              <div class="fs-1 mb-3">
              $${discountPrice ? `${discountPrice} 
              <span class="text-muted text-decoration-line-through"><small>$${price}</small></span>` : price}
              </div>
              <p class="lead singleProduct__description">
                ${description}
              </p>
              <br />
              <div class="d-flex">
              <button class="page-link" onClick="decreaseNumber('counter')">
              <i class="fas fa-minus"></i></button>
              <input style="text-align:center;" type="text" name="" class="page-link" value=1 id="counter" >
              <button class="page-link counter__plus" onClick="increaseNumber('counter')">
              <i class="fas fa-plus"></i></button>
              <select style="width: 5rem" class="form-select__singleProduct me-3 " required>
                <option value="" disabled selected>Size</option>
                ${size.map(s => `<option value="${s}">${s}</option>`)}
              </select>
              <button class="btn btn-outline-dark flex-shrink-0 cart__btn-add-to-cart" type="button">
              <i class="bi-cart-fill me-1"></i>
              Add to cart
              </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}