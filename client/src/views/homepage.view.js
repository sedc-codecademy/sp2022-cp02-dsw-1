import ProductCard from "../components/product-card.component";
export default class HomepageView {
  static async render({ request, data }) {
    const products = await data;
    const random12Products = [...Array(products.length).keys()]
      .sort(() => 0.5 - Math.random())
      .slice(0, 12)
      .map(index => products[index]);
    const random12ProductCards = random12Products.map((product) => {
      return ProductCard.render(product);
    }).join("");

    $(document).ready(function () {
      $(".card-container").slice(0, 24).show();
      if ($(".card-container").length < 24) {
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
        <!-- Homepage Top Section -->
        <section class="homepage-top-section mb-4">
            <div class="container">
            <div class="row">
              <div class="col-12 col-md-6 homepage-top-section__link position-relative">
                <a href="/#/women">
                  <img src="../images/main-woman-medium.jpg" alt="female model" width="1000" height="1500">
                </a>
                <div class="homepage-top-section__button-container">
                  <div class="homepage-top-section__button">
                    <div class="homepage-top-section__button__slide"></div>
                    <a href="/#/women" class='homepage-top-section__link'>Women's Collection</a>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 homepage-top-section__link position-relative">
                <a href="/#/men">
                  <img src="../images/main-man-medium.jpg" alt="male model" width="1000" height="1500">
                </a>
                <div class="homepage-top-section__button-container">
                  <div class="homepage-top-section__button">
                    <div class="homepage-top-section__button__slide"></div>
                    <a href="/#/men" class='homepage-top-section__link'>Men's Collection</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- End of Homepage Top Section -->
        <!-- Homepage Middle Section -->
        <section class="homepage-middle-section container py-3">
          <div class="container">
            <div class="row  justify-content-center reveal">
              <div class="col">
                <h2 class="text-center homepage__offers_H2 mt-4 mb-2">BUY NOW OR CRY LATER</h2>
                <p class="text-center fs-5 mt-2 mb-5">Sneak peek to some of our TREND products</p>
              </div>
            </div>
            <div class= "mt-3">
              <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center reveal">
              ${random12ProductCards}
              </div>
            </div>
          </div>
        </section>
        <!--End of Homepage Middle Section -->
        <!-- Homepage About  -->
        <section>
          <div class="container homepage__about pb-5 d-flex gap-3 reveal">
              <div class="row justify-content-around">
                <div class="container col-12 col-lg-6 justify-content-center" >
                    <h3 class="text-center my-4">WHAT WE ARE ALL ABOUT</h3>
                    <div class="text-center pl-5">
                    <p>
                      ORYX caters to thoughtful shoppers who appreciate unique designs and top quality pieces
                      you just can’t find anywhere else. We are constantly curating fresh new collections
                      and looking for the next big thing our customers will love. Founded in Skopje, Macedonia in 2016, 
                      we are proud to be your Online Clothing Shop that you can rely on for our expert service
                      and care.
                    </p>
                    <p>
                      Our Mission is to make a difference through our branding by staying ahead of the fashion
                      trends, defining style and giving customers what they want.
                    </p>
                    <p>                    
                      Our Vision is to change the way our society connects with the fashion industry by 
                      providing our customers with products that are ethically and responsibly sourced.
                    </p> 
                    </div>                  
                  </div>
                  <div class="homepage__about__img__div col-12 col-lg-6 d-flex justify-content-center pt-4">
                    <img class="rounded-1 shadow-lg mb-5 bg-body homepage__about__img" src=https://images.unsplash.com/photo-1531629685690-9137e85a4c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80 alt="WHAT WE ARE ALL ABOUT" >
                  </div>  
              </div>
          </div>
        </section>
        <!--End of Homepage About -->
        `;
  }
}
