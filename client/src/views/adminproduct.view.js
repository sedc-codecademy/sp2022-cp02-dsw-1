import DashboardMenu from "../components/dashboardMenu";
export default class adminproduct {
    static render() {
        return `
   
        <div class="content">
        ${DashboardMenu.render()}
        <!-Button group->
    	
	 <div id="mainButton">

     <a href="/#/admin" class="btn btn-secondary">Recent orders</a>
     </div>
   </div>

   <div class="container">
  
    <section class="panel panel-default">
  <div class="panel-heading"> 
  <h3 class="panel-title">Add new product</h3> 
  </div> 
  <div class="panel-body">
    
  <form action="designer-finish.html" class="form-horizontal" role="form">
  
    </div> <!-- form-group // -->
    <div class="form-group">
        <label for="Brand" class="col-sm-3 control-label">Product name</label>
        <div class="col-sm-3">
       <input type="text" class="form-control" name="Brand" id="name" placeholder="Product name">
        </div>
            <div class="form-group">
                <label for="Brand" class="col-sm-3 control-label">Brand</label>
                <div class="col-sm-3">
               <input type="text" class="form-control" name="Brand" id="Brand" placeholder="Brand">
                </div>
    </div> <!-- form-group // -->
    <div class="form-group">
        <label for="Category" class="col-sm-3 control-label">Category</label>
        <div class="col-sm-3">
       <select class="form-control">
        <option value="">Select</option>
        <option value="Man">Man </option>
        <option value="Women">Women </option>
       </select>
        </div>
      </div>  <!-- form-group // -->
    <div class="form-group">
        <label for="qty" class="col-sm-3 control-label">Quantity</label>
        <div class="col-sm-3">
       <input type="number" class="form-control" number="qty" id="qty" placeholder="Quantity.">
        </div>
        <div class="form-group">
            <label for="price" class="col-sm-3 control-label">Price</label>
            <div class="col-sm-3">
           <input type="number" class="form-control" number="price" id="price" placeholder="$.">
            </div>
    </div> <!-- form-group // -->
    <div class="form-group">
      <label for="name" class="col-sm-3 control-label">Download</label>
      <div class="col-sm-3">
        <label class="control-label small" for="file_img">Picture (jpg/png):</label> <input type="file" name="file_img">
      </div>
    </div> <!-- form-group // -->
    <hr>
    <div class="form-group">
      <div class="col-sm-offset-3 col-sm-9">
        <button type="submit" class="btn btn-dark">Save</button>
      </div>
    </div> <!-- form-group // -->
  </form>
    
  </div><!-- panel-body // -->
  </section><!-- panel// -->
  
    
  </div> <!-- container// -->
  

        <script src="https://cdn.ckeditor.com/ckeditor5/34.1.0/classic/ckeditor.js"></script>
        <script src"index.js"</script>
        `;
    }
}
     
