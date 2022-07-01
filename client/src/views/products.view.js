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
        })
        .join("");
      let filterCategory = new Set();
      let filteredButtons = products
        .filter((product) => {
          const isPresentInSet = filterCategory.has(product.category);
          filterCategory.add(product.category);
          return !isPresentInSet;
        })
        .map((product) => {
          return ProductCard.category(product);
        })
        .join("");

      $(document).ready(function () {
        $(".card-container").slice(0, 24).show();
        if ($(".card-container").length <= 24) {
          $("#loadMore").hide();
        }
        $("#loadMore").on("click", function (e) {
          e.preventDefault();
          $(".card-container:hidden").slice(0, 24).slideDown();
          if ($(".card-container:hidden").length === 0) {
            $("#loadMore").hide();
          }
        });
      });

      return `
          <div class="filtered_buttons_products mt-5">
          ${filteredButtons}
         
          </div>
              <section style="width: 100% ;" class="py-5">

                <div style="width: 100% justify-content: center ;" class='container px-4 px-lg-5 mt-5'>
                    <div class="row__products gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-5 justify-content-center">
                        ${filteredProducts}
                    </div>
                </div>
                <div class="container load-more-btn"><a href="#" id="loadMore"><button type="button" class="btn btn-outline-light btn-dark btn-create-new">Load More</button></a></div>
            </section>    
              
       `;
    } catch (error) {
      console.log(error);
      return ErrorView.render();
    }
  }
  static async after_render({ request: { resource } }) {
    let buttons = document.getElementsByClassName("btn-category-filter");
    [...buttons].forEach((btn) => {
      let btnValue = btn.innerHTML;
      btn.addEventListener("click", () => {
        document.location.hash = `/${resource}/${btnValue}`;
      });
    });
  }
}
