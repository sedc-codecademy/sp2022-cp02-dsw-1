import RandomProductRendering from "../components/random.product_rendering.component";

export default class HomepageView {
  static async render(resource, data) {
    const randomProduct = await RandomProductRendering.render(resource, data);

    $(document).ready(function () {
      $(".product-card").slice(0, 4).show();
    });

    return `
        <!-- Homepage Top Section -->
        <section class="homepage-top-section">
            <div class="container">
            <div class="row">
              <div class="col-12 col-md-6 homepage-top-section__link position-relative">
                <a href="/#/women">
                  <img src="../images/main-woman-medium.jpg" alt="female model" width="1000" height="1200">
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
                  <img src="../images/main-man-medium.jpg" alt="male model" width="1000" height="1200">
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

        <!-- Homepage Offers -->
        <section class="container py-5">
        <div class="row  justify-content-center">
            <div class="col">
            <p class="text-center mt-5">Sneak peek to some of our SALE products</p>
            <h2 class="text-center homepage__offers_H2">FUTURE TREND</h2>
          </div>
          </div>
          <div class= "mt-3">
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            ${randomProduct[0]}
            ${randomProduct[1]}
            ${randomProduct[2]}
            ${randomProduct[3]}
            </div>
          </div>
        </section>
        <!--End of Homepage Offers -->

        <!-- Homepage About  -->
        <section>
          <div class="container homepage__about">
              <div class="row justify-content-around">
                  <div class="container col-12 col-lg-6 justify-content-center" >
                    <h3 class="text-center my-4">WHAT WE ARE ALL ABOUT</h3>
                    <p class="text-center px-4">
                    Pellentesque vulputate porttitor malesuada. Nulla ut pharetra neque. 
                    Phasellus quis dui est. Etiam mattis dui ullamcorper sapien sollicitudin accumsan. 
                    Etiam vehicula nibh purus, vel lobortis tellus congue consequat. In hendrerit augue 
                    ipsum, at scelerisque lorem tincidunt at. Vivamus tempus risus ac condimentum ullamcorper. 
                    Ut id ipsum efficitur, dignissim metus ac, imperdiet enim. In maximus elementum porta. 
                    Ut libero dolor, eleifend quis odio eget, luctus tempor nulla. Duis consectetur arcu sit 
                    amet placerat auctor. Sed in tortor justo. Nunc feugiat ligula ut lacinia sollicitudin.
                    Sed ut interdum nisl.
                    Morbi commodo semper faucibus. Donec blandit nibh dolor, sed ornare metus hendrerit eu. 
                    Sed vitae posuere ante. Mauris ac dictum purus. Curabitur ac ligula vel sapien gravida 
                    facilisis sit amet a nibh. Morbi lobortis erat in malesuada iaculis. Nullam dictum lectus 
                    ac facilisis convallis. Fusce varius ante tempus nisl scelerisque, sed ultrices ipsum 
                    fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed ornare augue. 
                    Nulla quis ante sem. Morbi nec est risus. Aliquam porttitor imperdiet velit, sed mattis mauris 
                    porttitor id. Maecenas laoreet felis mattis venenatis porta. Vestibulum sapien neque, imperdiet 
                    at sem sit amet, efficitur ultricies magna.
                    </p>                   
                  </div>

                  <div class="homepage__about__img__div col-12 col-lg-6 d-flex justify-content-center pt-5">
                    <img class="rounded-3  shadow-lg mb-5 bg-body rounded" src=https://images.unsplash.com/photo-1531629685690-9137e85a4c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80 alt="WHAT WE ARE ALL ABOUT" >
                  </div>
              </div>
          </div>
        </section>
        <!--End of Homepage About -->
        
        `;
  }
}
