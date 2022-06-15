export default class CardComponent {
  static render() {
    return `
  <div class="col mb-5">
    <div class="product-card h-100">
      <!-- Sale badge-->
      <div
        class="product-card__badge text-white position-absolute"
        style="top: 0.5rem; right: 0rem"
      >
        Sale
      </div>
    
      <img
        class="card-img-top"
        src="${product.image}"
        alt="Product pictue"
      />
      <!-- Product details-->
      <div class="card-body p-4">
        <div class="text-center">
          <!-- Product name-->
          <h5 class="fw-bolder">${product.name}</h5>
          <!-- Product brand-->
          <h6>${product.brand}</h6>
          <!-- Product price-->
  
          $${product.discountPrice}
          <span class="text-muted text-decoration-line-through">$${product.price}</span>
        </div>
      </div>
      <!-- Product actions-->
      <div
        class="card-body d-flex justify-content-around p-4 pt-0 border-top-0 bg-transparent"
      >
        <div class="text-center data-id=${product._id}">
          <a class="btn btn-outline-dark d-flex mt-auto" href="#"
            ><div class="me-1 product-card__button--text-dissapear">View</div>
            <i class="bi bi-search"></i
          ></a>
        </div>
        <div class="text-center data-id=${product._id}">
          <a class="btn btn-outline-dark d-flex mt-auto" href="#"
            ><div class="me-1 product-card__button--text-dissapear">Add to</div>
            <i class="bi-cart-fill me-1"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
  `;
  }
}
