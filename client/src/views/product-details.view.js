import Error404View from "./error404.view";
import { getCartItems, setCartItems } from "../local-storage";
import { shoppingCartBackRoute } from "../utils/utils";

export default class ProductDetailsView {
  static async after_render({ request: { id }, data }) {
    window.scrollTo({
      top: 0,
    });

    const products = await data;

    if (id) {
      const foundProduct = products.find((product) => product._id === +id);
      if (!foundProduct) return Error404View.render(); //PAZI NA + -ot za bekend

      const selectSize = document.querySelector(".form-select__singleProduct");
      if (!selectSize) return;

      // local Memory
      let memory = {
        size: "",
        count: foundProduct.quantity || 1,
      };

      const addToCartBtn = document.querySelector(".cart__btn-add-to-cart");
      if (!addToCartBtn) return;

      // addToCart LISTENER
      addToCartBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const sizeErrorMessage = document.querySelector(".size__error-message");
        if (sizeErrorMessage) {
          console.log(sizeErrorMessage);
          sizeErrorMessage.style.display = "none";
        }
        let productNumber = document.getElementById(`counter${id}`).innerHTML;
        memory.count = parseInt(productNumber);
        let cartItems = getCartItems();
        let existenceCheck = cartItems.find(
          (locStorItems) => locStorItems._id === foundProduct._id
        );
        if (!existenceCheck) {
          foundProduct.size = memory.size;
          if (!foundProduct.size) {
            sizeErrorMessage.style.display = "block";

            // alert("Please select your size");
            return;
          }
          foundProduct.quantity = memory.count || 1;
          console.log(foundProduct);
          cartItems = [...cartItems, foundProduct];
          setCartItems(cartItems);
        }
        if (existenceCheck) {
          let filtered = cartItems.filter(
            (item) => item._id !== foundProduct._id
          );
          foundProduct.size = memory.size;
          if (!foundProduct.size) {
            sizeErrorMessage.style.display = "block";

            // alert("Please select your size");
            return;
          }
          foundProduct.quantity = memory.count || 1;
          setCartItems((cartItems = [...filtered, foundProduct]));
        }
        console.log(foundProduct.size);
        document.location.hash = `/cart/${id}`;
      });

      // counterPlus
      const plusButton = document.getElementsByClassName(`fa-plus${id}`);
      const indexOfProduct = products.findIndex(
        (product) => product._id === +id
      );
      const numberInStock = products[indexOfProduct].stock;

      plusButton[0].addEventListener("click", () => {
        let numberFromProduct = parseInt(
          document.getElementById(`counter${id}`).innerHTML
        );
        if (numberFromProduct < numberInStock) {
          let incremented = (numberFromProduct += 1);
          document.getElementById(`counter${id}`).innerHTML =
            incremented.toString();
        } else {
          alert("No more available in store :(");
          return;
        }
      });

      // counterMinus
      const minusButton = document.getElementsByClassName(`fa-minus${id}`);

      minusButton[0].addEventListener("click", () => {
        let numberFromProduct = parseInt(
          document.getElementById(`counter${id}`).innerHTML
        );
        if (numberFromProduct > 1) {
          let incremented = (numberFromProduct -= 1);
          console.log("ulazi u ovu svakako");
          console.log(incremented, typeof incremented);
          document.getElementById(`counter${id}`).innerHTML =
            incremented.toString();
        } else {
          return;
        }
      });

      // Sizes LISTENER
      selectSize.addEventListener("change", (e) => {
        foundProduct.size = e.target.value;
        if (!foundProduct.size) {
          return;
        } else {
          memory.size = e.target.value;
        }
      });
    }
  }

  static async render({ request: { id }, data }) {
    window.scrollTo({
      top: 0,
    });
    const products = await data;
    const foundProduct = products.find((product) => product._id === +id); //PAZI NA + -ot za bekend
    if (!foundProduct) return Error404View.render();

    let {
      image,
      name,
      brand,
      description,
      discountPrice,
      price,
      gender,
      sale,
      size,
      quantity,
      stock,
      choosenSize,
    } = foundProduct;

    const cartItems = getCartItems();
    const existItem = cartItems.find(
      (locStorItems) => locStorItems._id === foundProduct._id
    );
    if (existItem) {
      quantity = existItem.quantity;
      choosenSize = existItem.size;
    }

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
            <div class="col-md-6 single-product-info">
              <h5 class="fw-bolder fs-2">
              ${brand}
              </h5>
              <h1 class="display-5 fw-bolder singleProduct__name">
              ${name}
              </h1>
              <div class="fs-1 mb-3">
                ${
                  !stock
                    ? `<span class="text-muted text-decoration-line-through">
                <small>$${price}</small>
              </span>`
                    : discountPrice
                    ? `$${discountPrice} 
                <span class="text-muted text-decoration-line-through">
                  <small>$${price}</small>
                </span>`
                    : `$${price}`
                }
              </div>
              <p class="lead singleProduct__description">
                ${description}
              </p>
              <br/>
              <div class="d-flex"> 
              ${
                !stock
                  ? `<div class="out-of-stock"><h2>Out of Stock</h2><a href="/#/${
                      gender === "male" ? "men" : "women" || ""
                    }" 
                        class="cart__back-to-shop-link nav-link">Back to shop</a></div>`
                  : ` 
                <button class="page-link">
                  <i class="fas fa-minus fa-minus${id}"></i>
                </button>
                <div style="display:flex; align-items: center; justify-content: center;" class="page-link" id="counter${id}" > ${
                      quantity ? quantity : 1
                    }</div>
                <button class="page-link counter__plus">
                  <i" class="fas fa-plus fa-plus${id}"></i>
                </button>
                <select style="width: 5rem" class="form-select__singleProduct me-3 " required>
                  <option value="" disabled selected>${
                    choosenSize || "Size"
                  }</option>
                  ${size.map((s) => `<option value="${s}">${s}</option>`)}
                </select>
                <button class="btn btn-outline-dark flex-shrink-0 cart__btn-add-to-cart" type="button">
                  <i class="bi-cart-fill me-1"></i>
                  Add to cart
                </button>`
              }
                </div>
                <div class="size__error-message mt-3 mb-3 fs-5 px-3 py-2">Please choose size!</div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
