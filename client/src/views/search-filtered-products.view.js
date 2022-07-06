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
          class="container px-4 px-lg-5  div-no-products-found"
        >
          <div class="first-line"></div>
          <div class="first-line-children">
          <i class='fas fa-exclamation-circle' style='font-size:48px;'></i>
          <h3>Sorry, we couldn't find any results matching "${id}"</h3>
          </div>
          <div class="second-line"></div>
          <div class="second-line-children">
            <h2>Search tips</h2>
            <ul>
              <li>Check your spelling and try again.</li>
              <li>Try a more generic search term or try other search terms.</li>
              <li>Try different search term, like shirt, blouses, jackets, trousers, shorts, jeans.</li>
              <li>Or by brand name like Yahwen Yiren, Bershka, Zadig & Voltaire, Vince, Vogue, Polo Ralph Lauren, Everlane, Lyra, C&A, Bonobos, ArmyWear, Nike, Salvatore Piccolo, Sunspel, Wahts, Levi's, Braun Johns, Stephen Rays, H&M, Calvin Klein, Madewell, Goldschmied, Rag & Bone, Wrangler.</li>
              <li>Keep your search term simple as our search facility works best with shorter description.</li>
            </ul>
          </div>
        </div>
      </section>; `;
    }
  }
}
