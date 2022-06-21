import ProductCard from "../components/product-card.component";
import ErrorView from "./error.view";

export default class ProductsView {
  static async render({ request: { resource }, data }) {
    try {
      const mainCategory =
        resource === "men" ? "male" : resource === "women" ? "female" : "sale";
      const products = await data;
      console.log(products);
      const filteredProducts = products
        .filter((product) =>
          mainCategory === "sale"
            ? product.sale
            : product.gender === mainCategory
        )
        .map((product) => {
          return ProductCard.render(product);
        });
      let filterCategory = new Set();
      let filterArr = products
        .filter((product) => {
          const isPresentInSet = filterCategory.has(product.category);
          filterCategory.add(product.category);
          return !isPresentInSet;
        })
        .map((product) => {
          return ProductCard.category(product);
        });

      return `
      <div class="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column" id="sidebar">
      <ul class="nav flex-column text-white w-100">
        <a href="#" class="nav-link h3 text-white my-2">
          Products
        </a>
        ${filterArr}
        
      </ul>

      <span href="#" class="nav-link h4 w-100 mb-5">
        <a href=""><i class="bx bxl-instagram-alt text-white"></i></a>
        <a href=""><i class="bx bxl-twitter px-2 text-white"></i></a>
        <a href=""><i class="bx bxl-facebook text-white"></i></a>
      </span>
    </div>
    </div>
            <section style="width: 100% ;" class="py-5">
                <div style="width: 100% justify-content: center ;" class='container px-4 px-lg-5 mt-5'>
                    <div class="row__products gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-5 justify-content-center">
                        ${filteredProducts}
                    </div>
                </div>
            </section>       
       `;
    } catch (error) {
      console.log(error);
      return ErrorView.render();
    }
  }
}
