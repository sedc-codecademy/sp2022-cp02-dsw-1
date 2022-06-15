export default class OrderView {
    static render() {
        return `
        <div class="form-outline container my-5 form-floating mb-4">
            <section class="mb-10">
          <div class="row">
            <div class="col-md-9 col-lg-7 col-xl-5 mx-auto text-center">
       <div class="form-floating ">
       <input type="text" id="name" name="name" class="form-control" placeholder='Name' />
       <label class="form-label" for="name">Name</label> </div> <br>
       <div class="form-floating ">
       <input type="email" id="typeEmail" name='typeEmail'class="form-control" placeholder="Email"/>
       <label class="form-label" for="typeEmail">Email</label> </div>  <br>
       <div class="form-floating ">
       <input type="tel" id="typePhone" name='typePhone' class="form-control" placeholder="Phone Number" />
       <label class="form-label" for="typePhone">Phone Number</label> </div>  <br>
       <div class="form-floating ">
       <input type="text" id="form12" name="address" class="form-control" placeholder="Address" />
       <label class="form-label" for="address">Address</label> </div>  <br>
       </div>
         <br>
         <div class="btn-group">
         <input type="radio" class="btn-check" name="options" id="monday" autocomplete="off" checked />
         <label class="btn btn-secondary" for="monday">Monday</label>
       
         <input type="radio" class="btn-check" name="options" id="tuesday" autocomplete="off" />
         <label class="btn btn-secondary" for="tuesday">Tuesday</label>
       
         <input type="radio" class="btn-check" name="options" id="wednesday" autocomplete="off" />
         <label class="btn btn-secondary" for="wednesday">Wednesday</label>
         <input type="radio" class="btn-check" name="options" id="thursday" autocomplete="off" checked />
         <label class="btn btn-secondary" for="thursday">Thursday</label>
       
         <input type="radio" class="btn-check" name="options" id="friday" autocomplete="off" />
         <label class="btn btn-secondary" for="friday">Friday</label>       
        </div>
        <p>Preferred day of delivery</p>
        <input class="btn btn-primary" type="submit" value="Submit" />
        </div>
        </div>
        </div>

        `;
    }
}