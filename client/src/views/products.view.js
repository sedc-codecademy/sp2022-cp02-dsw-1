import ProductCard from "../components/product-card.component";

export default class ProductsView {
    static async render(resource) {
        const mainCategory = resource === "men" ? "male" : resource === "women" ? "female" : "sale";
        console.log(mainCategory)
        const data = await this.getProducts();
        const products = data
            .filter(product => mainCategory === "sale" ? product.sale : product.gender === mainCategory)
            .map(product => {
                console.log(product)
                return ProductCard.render(product)
            });
        return `
            <section style="width: 100% ;" class="py-5">
                <div class='container px-4 px-lg-5 mt-5'>
                    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        ${products}
                    </div>
                </div>
            </section>       
       `
    }
    static async getProducts() {
        try {
            const response = await fetch('../../data/clothes.json');
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
            // To do something with the error
        }
    }
}