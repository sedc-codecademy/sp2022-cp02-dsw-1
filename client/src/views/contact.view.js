export default class ContactView {
  static render() {
    return `
    <section class="h-100 gradient-form">
    <div class="container py-5 h-100 shadow-lg p-3 mb-5 bg-body rounded">
      <div class="row d-flex justify-content-center align-items-center h-100 ">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="card-body p-md-5 mx-md-4">
  
                  <div class="text-center">
                  
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
                      <button type="button" class="btn btn-outline-light btn-dark btn-lg btn-create-new">Send message</button>
                    </form>
                </div>
                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center card-logo">
                <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                <div class="text-company">
                <object id="image-logo" data="images/logo/white-logo.svg" width="100em" height="100em"> </object>
                  <h4 class="mb-4">We are more than just a company</h4>
                  <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
  }
}
