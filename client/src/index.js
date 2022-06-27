import { parseRequestUrl, getAllProducts } from "./utils/utils.js";
import { getCartItems } from "./local-storage"
import HomepageView from "./views/homepage.view.js";
import ContactView from "./views/contact.view.js";
import CartView from "./views/cart.view.js";
import SigninView from "./views/signin.view.js";
import OrderView from "./views/order.view.js";
import ProductsView from "./views/products.view.js";
import PrivacyPolicyView from "./views/privacy-policy.view.js";
import AboutView from "./views/about.view.js";
import Error404View from "./views/error404.view.js";
import ProductDetailsView from "./views/product-details.view.js";
import FaqView from "./views/faq.view.js";
import FilteredProductsView from "./views/filtered-products.view.js";
import SearchFilteredProductsView from "./views/search-filtered-products.view.js";
import RegisterView from "./views/register.view.js";

const routes = {
  "/": HomepageView,
  "/search/:id": SearchFilteredProductsView,
  "/men/:id": FilteredProductsView,
  "/men": ProductsView,
  "/women/:id": FilteredProductsView,
  "/women": ProductsView,
  "/product/:id": ProductDetailsView,
  "/sale/:id": FilteredProductsView,
  "/sale": ProductsView,
  "/contact": ContactView,
  "/cart/:id": CartView,
  "/cart": CartView,
  "/signin": SigninView,
  "/order": OrderView,
  "/privacy-policy": PrivacyPolicyView,
  "/about": AboutView,
  // "/product-details": ProductDetailsView
  "/faq": FaqView,
  "/register": RegisterView,
};

export default class App {
  static async router() {
    const request = parseRequestUrl();
    const parseUrl =
      (request.resource ? `/${request.resource}` : "/") +
      (request.id ? `/:id` : "") +
      (request.verb ? `/${request.verb}` : "");
    console.log("REQUEST", request);
    console.log("parseURL", parseUrl);
    const view = routes[parseUrl] ? routes[parseUrl] : Error404View;
    console.log("VIEW", view);
    const main = document.getElementById("main-container");
    const options = {
      request: request,
      data: getAllProducts(),
    };
    console.log("OPTIONS", options);
    main.innerHTML = await view.render(options);
    await ProductDetailsView.after_render(options);
    await CartView.after_render(options);
    await ProductsView.after_render(options);
  }
  static init() {
    document
      .getElementById("search-bar")
      .addEventListener("submit", async (e) => {
        e.preventDefault();
        let searchKeyword = document.getElementById("q").value;
        document.location.hash = `/search/${searchKeyword}`;
        console.log(searchKeyword);
        document.getElementById("q").value = "";
      });

    window.addEventListener("load", this.router);
    window.addEventListener("hashchange", this.router);
    this.counterLoader();
  }
  static counterLoader() {
    const counters = [...document.getElementsByClassName("shopping-cart-navbar-items")];
    const cartItems = getCartItems();
    // if (!cartItems) return;
    cartItems.length > 0 ? cartItems.reduce((a, c) => a + c.quantity, 0) : 0;
    counters.forEach(counter => {
      counter.innerHTML = cartItems.length;
      cartItems.length < 1 ? counter.style.visibility = "hidden" : counter.style.visibility = "visible";
    });
  }
}

App.init();