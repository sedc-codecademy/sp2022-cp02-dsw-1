export default class RegisterView {
    static render() {
        return `<section class="h-100 gradient-form">
    <div class="container py-5 h-100 shadow-lg p-3 mb-5 bg-body rounded">
      <div class="row d-flex justify-content-center align-items-center h-100 ">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="card-body p-md-5 mx-md-4">
  
                  <div class="text-center">
                  <h4 class="mb-4">Create your account</h4>
                  </div>
                  <form class="form-sign-in">
                  <div class="form-floating mb-4">
                  <input type="text" id="fullName" class="form-control"
                    placeholder="Phone number or email address" />
                  <label class="form-label" for="fullName">Full Name</label>
                </div>

                    <div class="form-floating mb-4">
                      <input type="email" id="email" class="form-control"
                        placeholder="Phone number or email address" />
                      <label class="form-label" for="email">Email</label>
                    </div>
  
                  
                    <div class="form-floating mb-4">
                    <input type="password" id="password" class="form-control" 
                        placeholder="Input password" />
                      <label class="form-label" for="password">Password</label>
                    </div>
  
                    <div class="text-center pt-1 mb-5 pb-1 log-in-button">
                      <button class="btn btn-block fa-lg mb-3 btn-lg btn btn-outline-dark" type="button">Sign Up</button>
                     </div>
  
                    <div class="d-flex align-items-center justify-content-center pb-4 buttons-create-new">
                      <p class="mb-0 me-2">Already have an account?</p>
                      <a href="/#/signin" class="btn btn-outline-light btn-dark btn-create-new">Sign in</a>
                     
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center card-logo">
                <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                <div class="text-company">
                <object data="images/logo/white-logo.svg" width="100em" height="100em"> </object>
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