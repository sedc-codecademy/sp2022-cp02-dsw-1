export default class ContactView {
  static render() {
    return `
            <div class="contact">
                <div class="container my-5">
                <section class="mb-10">
                  <div class="row">
                    <div class="col-md-9 col-lg-7 col-xl-5 mx-auto text-center">
                    <object data="images/logo/full-logo.svg" width="100em" height="100em"> </object> <br> <br>
                      <h4 class="mb-4">Contact us</h4>
                      <p>We're happy to answer questions or help you with returns.
                      Please fill out the form below if you need assistance.</p>   
                      <form>
                        <div class="row">
                          <div class="col-md-6">
                          <div class="form-floating mb-4">
                              <input type="text" id="contactBlockName1" class="form-control" placeholder="Enter Name" />
                              <label class="form-label" for="contactBlockName1">Name</label>
                            </div>
                          </div>
                          <div class="col-md-6">
                          <div class="form-floating mb-4">
                              <input type="email" id="contactBlockEmail2" class="form-control" placeholder="Enter Email" />
                              <label class="form-label" for="contactBlockEmail2">Email</label>
                            </div>
                          </div>
                        </div>
                        <div class="form-floating mb-4">
                          <input type="tel" id="contactBlockPhone3" class="form-control" placeholder="Enter Phone Number"" />
                          <label class="form-label" for="contactBlockPhone3">Phone (optional)</label>
                        </div>
                        <div class="form-floating mb-4">
                          <textarea class="form-control" id="contactBlockMessage4" rows="4" placeholder="Enter Message"></textarea>
                          <label class="form-label" for="contactBlockMessage4">Message</label>
                        </div>
                        <button type="button" class="btn btn-dark btn-block">Send message</button>
                      </form>
                    </div>
                  </div>
                </section>
              
                
              </div>
            </div>
        `;
  }
}
