export default class HomepageView {
    static render() {
        return `
        <!-- Homepage Top Section -->
        <section class="homepage-top-section">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-6 homepage-top-section__link position-relative">
                <a href="/#/women">
                  <img src="../images/main-woman-medium.jpg" alt="female model">
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
                  <img src="../images/main-man-medium.jpg" alt="male model">
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
        `;
    }
}