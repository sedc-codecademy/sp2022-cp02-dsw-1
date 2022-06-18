import { parseRequestUrl, getAllProducts } from "./utils/utils.js";
import HomepageView from "./views/homepage.view.js";
import ContactView from "./views/contact.view.js";
import CartView from "./views/cart.view.js";
import SigninView from "./views/signin.view.js";
import OrderView from "./views/order.view.js";
import ProductsView from "./views/products.view.js";
import SingleProductView from "./views/singleproduct.view.js";
import PrivacyPolicyView from "./views/privacy-policy.view.js";
import AboutView from "./views/about.view.js";
import Error404View from "./views/error404.view.js";

const routes = {
    "/": HomepageView,
    "/men": ProductsView,
    "/women": ProductsView,
    // "/product/:id": ProductView,
    "/sale": ProductsView,
    "/contact": ContactView,
    "/product": SingleProductView, //temporary
    "/cart": CartView,
    "/signin": SigninView,
    "/order": OrderView,
    "/privacy-policy": PrivacyPolicyView,
    "/about": AboutView
}

class App {
    static async router() {
        const request = parseRequestUrl();
        const parseUrl =
            (request.resource ? `/${request.resource}` : "/") +
            (request.id ? `/:id` : "") +
            (request.verb ? `/${request.verb}` : "");
        const view = routes[parseUrl] ? routes[parseUrl] : Error404View;
        const main = document.getElementById('main-container');
        const options = {
            resource: request.resource,
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