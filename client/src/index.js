import { parseRequestUrl } from "./utils/utils.js";
import HomepageView from "./views/homepage.view.js";
import SaleView from "./views/sale.view.js";
import ContactView from "./views/contact.view.js";
import CartView from "./views/cart.view.js";
import SigninView from "./views/signin.view.js";
import ErrorView from "./views/error.view.js";
import OrderView  from "./views/order.view.js";
import ProductsView from "./views/products.view.js";

const routes = {
    "/": HomepageView,
    "/men": ProductsView,
    "/women": ProductsView,
    // "/product/:id": ProductView,
    "/sale": SaleView,
    "/contact": ContactView,
    "/cart": CartView,
    "/signin": SigninView,
    "/order" : OrderView
}

class App {
    static async router() {
        const request = parseRequestUrl();
        const parseUrl =
            (request.resource ? `/${request.resource}` : "/") +
            (request.id ? `/:id` : "") +
            (request.verb ? `/${request.verb}` : "");
        const view = routes[parseUrl] ? routes[parseUrl] : ErrorView;
        const main = document.getElementById('main-container');
        main.innerHTML = await view.render();

    }
    static init() {
        window.addEventListener('load', this.router);
        window.addEventListener('hashchange', this.router);
    }
}

App.init();