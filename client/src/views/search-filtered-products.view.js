import ProductCard from "../components/product-card.component";

export default class SearchFilteredProductsView {
  static async render({ request: { id, resource }, data }) {
    resource === "search" ? "search" : null;
    const products = await data;
    const filteredData = products
      .filter((product) => {
        if (
          product.name.toUpperCase().includes(id.toUpperCase()) ||
          product.brand.toUpperCase().includes(id.toUpperCase())
        )
          return product;
      })
      .map((product) => {
        return ProductCard.render(product);
      })
      .join("");

    $(document).ready(function () {
      $(".product-card").slice(0, 24).show();
      $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".product-card:hidden").slice(0, 24).slideDown();
        if ($(".product-card:hidden").length === 0) {
          $("#loadMore").hide();
        }
      });
    });

    if (filteredData) {
      return `
            <section style="width: 100% ;" class="py-5">

                <div style="width: 100% justify-content: center ;" class='container px-4 px-lg-5 mt-5'>
                    <div class="row__products gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-5 justify-content-center">
                        ${filteredData}
                    </div>
                </div>
                <div class="container load-more-btn"><a href="#" id="loadMore"><button type="button" class="btn btn-outline-light btn-dark btn-create-new">Load More</button></a></div>
               
            </section>    
              
       `;
    } else {
      return `<section style="width: 100% ; height: 500px" class="py-5">
        <div
          style="width: 100% justify-content: center ;"
          class="container px-4 px-lg-5 mt-5"
        >
          <div class="row__products gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-5 justify-content-center">
            <h1>No results :(</h1>
          </div>
        </div>
      </section>; `;
    }
  }
}
