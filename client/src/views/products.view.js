import ProductCard from "../components/product-card.component";
import ErrorView from "./error.view";

export default class ProductsView {
    static async render({ request: { resource }, data }) {
        try {
            const mainCategory = resource === "men" ? "male" : resource === "women" ? "female" : "sale";
            const products = await data;
            const filteredProducts = products
                .filter(product => mainCategory === "sale" ? product.sale : product.gender === mainCategory)
                .map(product => {
                    console.log(product);
                    return ProductCard.render(product);
                });
            return `
            <section style="width: 100% ;" class="py-5">
                <div class='container px-4 px-lg-5 mt-5'>
                    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        ${filteredProducts}
                    </div>
                </div>
            </section>       
       `
        } catch (error) {
            console.log(error);
            return ErrorView.render();
        }
    }
}