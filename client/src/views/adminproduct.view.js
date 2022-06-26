import DashboardMenu from "../components/dashboardMenu";
export default class adminproduct {
  static render() {
    return `
    ${DashboardMenu.render()}
    <div id="mainButton">

        <a href="/#/admin" class="btn btn-dark">Recent orders</a>
        </div>
    <section class="h-100 gradient-form">
    <div class="container py-5 h-100 shadow-lg p-3 mb-5 bg-body rounded">
      <div class="row d-flex justify-content-center align-items-center h-100 ">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="card-body p-md-5 mx-md-4">
  
                  <div class="text-center">
                  <h4 class="mb-4">Please add product</h4>
                  </div>
                  <form class="form-admin-product">
  
                  <div class="form-floating mb-4">
                  <input type="name" id="name" class="form-control" />
                  <label class="form-label" for="name">Porduct name</label>
                </div>

                <div class="form-floating mb-4">
                <input type="brand" id="brand" class="form-control"/>
                <label class="form-label" for="brand">Brand</label>
              </div>
  
              <div class="form-floating mb-4">
                      <label class="form-label" for="Category"></label>
          <select class="form-control">
                  <option>Category</option>
                  <option value="">Man </option>
                  <option value="Women">Women </option>
          </select>
           </div>


           <div class="form-floating mb-4">
           <input type="number" id="qty" class="form-control" />
             <label class="form-label" for="qty">Quantity</label>
           </div>

           <div class="form-floating mb-4">
           <input type="number" id="qty" class="form-control"/>
             <label class="form-label" for="price">Price $</label>
           </div>
           <div class="form-floating mb-4">
           <label class="control-label small" for="file_img"><br>
           Picture (jpg/png):</label> <input type="file" >
                 <label class="form-label" for="name"></label>
               </div>
               <hr>
                  <br>
  
                    <div class="d-flex align-items-center justify-content-center pb-4 buttons-save-cancel">
                    <button type="button" class="btn btn-outline-light btn-dark btn-save">Save</button>
                      <button type="button" class="btn btn-outline-light btn-dark btn-cancel">Cancel</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center card-logo-admin">
              <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                <object data="images/logo/white-logo.svg" width="100em" height="200em"> </object> <br>
                <h4 class="bb-4"Welcome to the product add page</h4>
                  <p class="small mb-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
