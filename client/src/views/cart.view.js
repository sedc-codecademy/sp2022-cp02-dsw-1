import CartItem from "../components/cart-item.component";
import { getCartItems, setCartItems } from "../local-storage";
import Error404View from "./error404.view";

const addToCart = (item, forceUpdate = false) => {
  let cartItems = getCartItems();
  const existItem = cartItems.find((cartItem) => cartItem.id === item.id);
  if (existItem) {
    cartItems = cartItems.map((cartItem) =>
      cartItem.id === existItem.id ? item : cartItem
    );
  } else {
    cartItems = [...cartItems, item];
  }
  setCartItems(cartItems);
};
export default class CartView {
  static async after_render() {}
  static async render({ request: { id }, data }) {
    console.log("Cart ID ", id);
    const products = await data;
    console.log(products);
    if (id) {
      const foundProduct = products.find((product) => product._id === +id);
      if (!foundProduct) return Error404View.render(); //PAZI NA + -ot za bekend
      console.log("FOUND PRODUCT", foundProduct);
      addToCart({
        id: foundProduct._id,
        name: foundProduct.name,
        brand: foundProduct.brand,
        image: foundProduct.image,
        sale: foundProduct.sale,
        price: foundProduct.price,
        discountPrice: foundProduct.discountPrice,
        stock: foundProduct.stock,
        quantity: 1,
      });
    }
    console.log("Number of Cart items", getCartItems().length);
    const cartItems = getCartItems();
    const filteredPrice = cartItems.map((x) => {
      if (x.discountPrice == null) {
        return x.price;
      } else {
        return x.discountPrice;
      }
    });
    console.log(filteredPrice);
    console.log("Cart Items", cartItems);
    return /*html*/ `
        <div class="shopping-cart__card container">
        <div class="row">
            <div class="col-md-8 cart">
                <div class="cart__title">
                    <div class="row">
                        <div class="col"><h4><b>Shopping Cart</b></h4></div>
                        <div class="col align-self-center text-right text-muted">
                            ${
                              cartItems.length > 0
                                ? `${cartItems.reduce(
                                    (a, c) => a + c.quantity,
                                    0
                                  )} items`
                                : "Empty"
                            } 
                        </div>
                    </div >
                </div >
    ${cartItems.map((cartItem) => `${CartItem.render(cartItem)}`).join("")}

<div class="cart__back-to-shop-link"><a href="/# ">&leftarrow;<span class="text-muted">Back to shop</span></a></div>
            </div >
    <div class="col-md-4 cart__summary">
        <div><h5><b>Summary</b></h5></div>
        <hr>
            <div class="row">
                <div class="col" style="padding-left:0;">ITEMS ${cartItems.reduce(
                  (a, c) => a + c.quantity,
                  0
                )}</div>
                <div class="col text-right">$${filteredPrice.reduce(
                  (a, c) => a + c,
                  0
                )}</div>
            </div>
            <form class="cart__summary__form">
                <p>SHIPPING</p>
                <select><option class="text-muted">Standard-Delivery- $5.00</option></select>
                <p>GIVE CODE</p>
                <input class="cart__summary__form__code" placeholder="Enter your code">
            </form>
            <div class="row" style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;">
                <div class="col">TOTAL PRICE</div>
                <div class="col text-right">$ 
                ${filteredPrice.reduce((a, c) => a + c, 0)}</div>
            </div>
            <button class="cart__summary__form__btn">ORDER NOW</button>
    </div>
        </div >
        
    </div >
    `;
  }
}
