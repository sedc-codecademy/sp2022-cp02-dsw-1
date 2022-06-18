import { parseRequestUrl, getAllProducts } from "./utils/utils.js";
import HomepageView from "./views/homepage.view.js";
import ContactView from "./views/contact.view.js";
import CartView from "./views/cart.view.js";
import SigninView from "./views/signin.view.js";
import ErrorView from "./views/error.view.js";
import OrderView from "./views/order.view.js";
import ProductsView from "./views/products.view.js";
import SingleProductView from "./views/singleproduct.view.js";

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
    "/order": OrderView
}

class App {
    static async router() {
        const request = parseRequestUrl();
        const parseUrl =
            (request.resource ? `/${request.resource}` : "/") +
            (request.id ? `/:id` : "") +
            (request.verb ? `/${request.verb}` : "");
        const view = routes[parseUrl] ? routes[parseUrl] : ErrorView;
        const resource = request.resource
        const main = document.getElementById('main-container');
        main.innerHTML = await view.render(resource, getAllProducts());

    }
    static init() {
        window.addEventListener('load', this.router);
        window.addEventListener('hashchange', this.router);
    }
}

App.init();