export default class CategoriesView {
    static render() {
        return `
            <div class="categories">
            <div class="categoryContainer">
            <div class="card">
                
                <img src="images/mainCategoryPics/pexels-wesley-carvalho-3622614 (1).jpg" class="card-img-top" alt="man dressed in yellow blouse">
                <div class="card-body">
                    <div class="dropdown">
                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                          Man
                        </a>
                      
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Shirts</a></li>
                            <li><a class="dropdown-item" href="#">Blouses</a></li>
                            <li><a class="dropdown-item" href="#">Jeans</a></li>
                            <li><a class="dropdown-item" href="#">Shorts</a></li>
                        </ul>
                      </div>
                 
              </div>
              </div>
              <div class="card">
                <img src="images/mainCategoryPics/dom-hill-nimElTcTNyY-unsplash.jpg"  class="card-img-top" alt="woman dressed in yellow trousers">
              
                <div class="card-body">
                    <div class="dropdown">
                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                          Woman
                        </a>
                      
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Shirts</a></li>
                            <li><a class="dropdown-item" href="#">Blouses</a></li>
                            <li><a class="dropdown-item" href="#">Jeans</a></li>
                            <li><a class="dropdown-item" href="#">Shorts</a></li>
                        </ul>
                      </div>
              </div>
        </div>
              
        `;
    }
}