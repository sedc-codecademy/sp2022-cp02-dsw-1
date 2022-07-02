import Error404View from "./error404.view";
import { getCartItems, setCartItems } from "../local-storage";

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
        let productNumber = document.getElementById(`counter${id}`).innerHTML;
        memory.count = parseInt(productNumber);
        let cartItems = getCartItems();
        let existenceCheck = cartItems.find(
          (locStorItems) => locStorItems._id === foundProduct._id
        );
        if (!existenceCheck) {
          foundProduct.size = memory.size || "Not choosen";
          foundProduct.quantity = memory.count || 1;
          console.log(foundProduct);
          cartItems = [...cartItems, foundProduct];
          setCartItems(cartItems);
        } else {
          let filtered = cartItems.filter(
            (item) => item._id !== foundProduct._id
          );
          foundProduct.size = memory.size || "Not choosen";
          foundProduct.quantity = memory.count || 1;
          setCartItems((cartItems = [...filtered, foundProduct]));
        }

        document.location.hash = `/cart/${id}`;
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

      // addToCart({
      //   _id: foundProduct._id,
      //   name: foundProduct.name,
      //   brand: foundProduct.brand,
      //   image: foundProduct.image,
      //   sale: foundProduct.sale,
      //   price: foundProduct.price,
      //   discountPrice: foundProduct.discountPrice,
      //   stock: foundProduct.stock,
      //   sale: foundProduct.sale || "",
      //   quantity: 1,
      // });
    }
  }

  static async render({ request: { id }, data }) {
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
      sale,
      size,
      quantity
    } = foundProduct;

    const cartItems = getCartItems();
    const existItem = cartItems.find(
      (locStorItems) => locStorItems._id === foundProduct._id
    );
    if (existItem) {
      quantity = existItem.quantity;
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
            <div class="col-md-6">
              <h5 class="fw-bolder fs-2">
              ${brand}
              </h5>
              <h1 class="display-5 fw-bolder singleProduct__name">
              ${name}
              </h1>
              <div class="fs-1 mb-3">
                $${discountPrice ? `${discountPrice} 
                <span class="text-muted text-decoration-line-through">
                  <small>$${price}</small>
                </span>` : price}
              </div>
              <p class="lead singleProduct__description">
                ${description}
              </p>
              <br />
              <div class="d-flex">
                <button class="page-link">
                  <i onClick="decrement(${id})" class="fas fa-minus"></i>
                </button>
                <div style="display:flex; align-items: center; justify-content: center;" class="page-link" id="counter${id}" > ${quantity ? quantity : 1} </div>
                <button class="page-link counter__plus">
                  <i onClick="increment(${id})" class="fas fa-plus"></i>
                </button>
                <select style="width: 5rem" class="form-select__singleProduct me-3 " required>
                  <option value="" disabled selected>Size</option>
                  ${size.map((s) => `<option value="${s}">${s}</option>`)}
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