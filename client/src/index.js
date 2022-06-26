import { parseRequestUrl, getAllProducts } from "./utils/utils.js";
import HomepageView from "./views/homepage.view.js";
import ContactView from "./views/contact.view.js";
import CartView from "./views/cart.view.js";
import SigninView from "./views/signin.view.js";
import OrderView from "./views/order.view.js";
import ProductsView from "./views/products.view.js";
import SingleProductView from "./views/product-details.view.js";
import PrivacyPolicyView from "./views/privacy-policy.view.js";
import AboutView from "./views/about.view.js";
import Error404View from "./views/error404.view.js";
import ProductDetailsView from "./views/product-details.view.js";
import AdminView from "./views/admin.view.js";
import adminproductView from "./views/adminproduct.view.js";

const routes = {
    "/": HomepageView,
    "/men": ProductsView,
    "/women": ProductsView,
    "/product/:id": ProductDetailsView,
    "/sale": ProductsView,
    "/contact": ContactView,
    "/product": SingleProductView, //temporary
    "/cart": CartView,
    "/signin": SigninView,
    "/order": OrderView,
    "/privacy-policy": PrivacyPolicyView,
    "/about": AboutView,
    // "/product-details": ProductDetailsView
    "/admin": AdminView,
    "/admin-product": adminproductView
}

class App {
    static async router() {
        const request = parseRequestUrl();
        const parseUrl =
            (request.resource ? `/${request.resource}` : "/") +
            (request.id ? `/:id` : "") +
            (request.verb ? `/${request.verb}` : "");
        console.log(parseUrl)
        const view = routes[parseUrl] ? routes[parseUrl] : Error404View;
        const main = document.getElementById('main-container');
        const options = {
            request: request,
            data: getAllProducts()
        }
        main.innerHTML = await view.render(options);

    }
    static init() {
        window.addEventListener('load', this.router);
        window.addEventListener('hashchange', this.router);
    }
}

App.init();