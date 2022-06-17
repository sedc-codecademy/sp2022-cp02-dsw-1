export default class SingleProductView {
  static render() {
    return `
      <section class="py-5">
      <div class="container px-4 px-lg-5 my-5">
        <div class="row gx-4 gx-lg-5 align-items-center">
          <div class="col-md-6">
            <img
              class="card-img-top mb-5 mb-md-0 singleProduct__custom_img"
              src="https://images.unsplash.com/photo-1473966968600-fa801b869a1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
              alt="..."
            />
          </div>
          <div class="col-md-6">
            <h1 class="display-5 fw-bolder singleProduct__name">
              Fancy Product
            </h1>
            <div class="fs-5 mb-5">
              <span class="text-decoration-line-through">$45.00</span>
              <span>$40.00</span>
            </div>
            <p class="lead singleProduct__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium at dolorem quidem modi. Nam sequi consequatur
              obcaecati excepturi alias magni, accusamus eius blanditiis
              delectus ipsam minima ea iste laborum vero?
            </p>
            <br />
            <div class="d-flex">
              <input
                class="form-control text-center me-3"
                id="inputQuantity"
                type="num"
                value="1"
                style="max-width: 3rem"
              />
              <select style="width: 5rem" class="form-select me-3">
                <option value="" disabled selected>Size</option>
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
              </select>
              <button class="btn btn-outline-dark flex-shrink-0" type="button">
                <i class="bi-cart-fill me-1"></i>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
          `;
  }
}
