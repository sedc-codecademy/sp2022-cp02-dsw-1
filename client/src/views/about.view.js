export default class AboutView {
  static render() {
    return `
        <section class="container-fluid d-flex justify-content-center">
            <div class="row ">
                <div class="d-flex justify-content-center mt-5">
                    <h1 class="py-4 h_element"><strong>About</strong></h1>
                </div>
                <div class="row row-cols-lg-2">
                    <div class="d-flex justify-content-center flex-column ps-4">
                        <h2 class="align-self-center mb-4 h_element">
                        <strong>ORYX</strong> – Fashion
                        </h2>
                        <p>
                            <strong>ORYX</strong> is an online shopping destination for men and women’s clothing. 
                            Our edit makes it possible for you to choose from the finest 
                            selection of the world’s most sought-after designer brands such as Bottega Veneta, Givenchy, 
                            and Burberry. We pride ourselves on creating an easy-to-navigate online shopping platform while 
                            maintaining an elevated boutique-like feel.
                        </p> 
                        <p>
                            Our expert team of buyers scours the globe each season to bring you the most exquisite selection 
                            of fashion straight from the runways of New York, London, Paris and Milan. With our daily New Arrivals 
                            we make it effortless for you to stay up-to-date on all of the latest industry trends. Whether you’re 
                            looking to invest in a timeless piece from established labels like Gucci, Balenciaga, Christian Louboutin 
                            and&nbsp;Saint Laurent, or you want to be a fashion pioneer and set trends in Off-White, Acne Studios 
                            and Alanui, Mytheresa is the go-to fashion and designer website that can fulfill all your sartorial wishes. 
                            Our unique assortment of menswear and womenswear now makes it possible to shop for your loved 
                            ones all in one place.
                        </p>
                        <p>
                            ORYX has a long and rich fashion heritage that spans more than 10 years. What began in the heart of Munich 
                            as a contained local boutique offering creations from international designers has now grown to become one of the
                            most innovative e-commerce companies in the world. Whether you’re paying a visit to our ORYX Store, 
                            browsing from your computer at home, or shopping on-the-go via our mobile app, our goal always remains the same: 
                            to provide the perfect space that caters to all your shopping desires.
                        </p>
                    </div>
                    <div class="p-4">
                        <img src="./images/logo/full-logo.svg" alt="logo-svg">
                    </div>                    
                </div>
            </div>
        </section>

        `;
  }
}
