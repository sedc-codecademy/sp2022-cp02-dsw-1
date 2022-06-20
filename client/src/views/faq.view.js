export default class FaqView {
  static render() {
    return `
        <section class="faq bg-primary">
        <img src="https://img.wallpapic.com/i2899-027-531/medium/chanel-black-suit-fashion-wallpaper.jpg" alt="img-fashion">
        <div class="container">
          <div class="faq-title">
            <h2>F.A.Q</h2>
            <p>Frequently asked questions about ORYX eCommerce website</p>
          </div>
          <ul class="faq-list">
            <li data-aos="fade-up" data-aos-delay="100" class="aos-init aos-animate">
              <a data-toggle="collapse" class="collapsed" href="#faq1" aria-expanded="false">How does the fashion connector work? <i class="fas fa-arrow-up"></i></a>
              <div id="faq1" class="collapse" data-parent=".faq-list" >
                <p>
                The Fashion Connector, as the name indicates, is a fashion website that enables customers to buy beautiful & unique, limited edition jewellery, handbag and clothing products sourced by us and created by independent designers. All our designers are vetted, before they can use our platform thus any product you buy, using our website, should be of the highest quality. When purchasing jewellery products from The Fashion Connector you are buying directly from the corresponding designer (Seller). We therefore act as a link between you, the customer (buyer) and the designer – handling the payment on behalf of both the buyer and designer. We also have a dedicated customer care team, on hand 12 hours a day, to help in assisting you if you have any queries regarding the use of the site.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="200" class="aos-init aos-animate">
              <a data-toggle="collapse" href="#faq2" class="collapsed">Can i change or cance my order? <i class="fas fa-arrow-up"></i></a>
              <div id="faq2" class="collapse" data-parent=".faq-list">
                <p>
                    Sure! You can cancel, or change your order within 12 hours of confirmation. Please contact us with your name and order number at: info@oryxbynoworcrylater.com
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="300" class="aos-init aos-animate">
              <a data-toggle="collapse" href="#faq3" class="collapsed">Is my personal information kept private? <i class="fas fa-arrow-up"></i></a>
              <div id="faq3" class="collapse" data-parent=".faq-list">
                <p>
                Yes, we do not share any information given by you to a third party. Please read our privacy policy for more information concerning this matter.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="400" class="aos-init aos-animate">
              <a data-toggle="collapse" href="#faq4" class="collapsed">How long does delivery take and how much does it cost? <i class="fas fa-arrow-up"></i></a>
              <div id="faq4" class="collapse" data-parent=".faq-list">
                <p>
                The cost for delivery and the estimated delivery times, provided by each designer, will be clearly indicated at checkout and alongside the individual product descriptions. As a general rule any items that the designer has in stock will be dispatched within 48 hours of you placing your order. With items that are made to order, delivery times will vary and will therefore be specific to the product. Shipping times are indicated on each product page underneath the "Delivery & Returns" tab.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="500" class="aos-init aos-animate">
              <a data-toggle="collapse" href="#faq5" class="collapsed">Is this the latest version of an item? <i class="fas fa-arrow-up"></i></a>
              <div id="faq5" class="collapse" data-parent=".faq-list">
                <p>
                Each item in Oryx is maintained to its latest version.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="600" class="aos-init aos-animate">
              <a data-toggle="collapse" href="#faq6" class="collapsed">Do you ship to my country? <i class="fas fa-arrow-up"></i></a>
              <div id="faq6" class="collapse" data-parent=".faq-list">
                <p>
                  We proudly ship wordwide! Better yet, out tracked shipping is always 100% free of charge, with no minimum purchase!
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="400" class="aos-init aos-animate">
              <a data-toggle="collapse" href="#faq7" class="collapsed">What methods of payment do you take? <i class="fas fa-arrow-up"></i></a>
              <div id="faq7" class="collapse" data-parent=".faq-list">
                <p>
                  We accept all major credit cards, PayPay, and Apple Pay.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
            `;
  }
}
