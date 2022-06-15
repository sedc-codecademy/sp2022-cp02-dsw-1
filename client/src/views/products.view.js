import CardComponent from "../components/card.component";

let counter = 0;
let loadMoreBtn = document.querySelector('.loadMoreBtn');
let contentWrapper = document.querySelector('.py-5');

export default class ProductsView {
    static async render() {
       let data = await this.getProducts()
      let products = data.map(product => {
         return CardComponent.render(product)      
        })
      
       return `
       <section style="width: 100% ;" class="py-5">
       <div class='container px-4 px-lg-5 mt-5'>
       <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
       ${products}
       </div>
       </div>
       </section>
       <button class="loadMoreBtn">Load More</button>
       
       `
      }
    static async getProducts(){
        let response = await fetch('../../data/clothes.json');
        let data = await response.json();
        return data;
    }
}



