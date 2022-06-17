export default class SaleView {
  static render() {
    return `
        <section style="width: 100%;" class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div
            class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
          >
            <div class="col mb-5">
              <div class="product-card h-100">
                <!-- Sale badge-->
                <div
                  class="product-card__badge text-white position-absolute"
                  style="top: 0.5rem; right: 0rem"
                >
                  Sale
                </div>
                <!-- Product image-->
                <img
                  class="card-img-top"
                  src="https://images.unsplash.com/photo-1574722772581-f4a4e07e147b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=653&q=80"
                  alt="..."
                />
                <!-- Product details-->
                <div class="card-body p-4">
                  <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">Fancy Product</h5>
                    <!-- Product brand-->
                    <h6>Calvin Klein</h6>
                    <!-- Product price-->
    
                    $40.99
                    <span class="text-muted text-decoration-line-through"
                      >$20.00</span
                    >
                  </div>
                </div>
                <!-- Product actions-->
                <div
                  class="card-body d-flex justify-content-around p-4 pt-0 border-top-0 bg-transparent"
                >
                  <div class="text-center">
                    <a class="btn btn-outline-dark d-flex mt-auto" href="#"
                      ><div class="me-1 product-card__button--text-dissapear">View</div>
                      <i class="bi bi-search"></i
                    ></a>
                  </div>
                  <div class="text-center">
                    <a class="btn btn-outline-dark d-flex mt-auto" href="#"
                      ><div class="me-1 product-card__button--text-dissapear">Add to</div>
                      <i class="bi-cart-fill me-1"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            </div>
           
        </section>
        `;
  }
}
