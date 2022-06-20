import ProductCard from "./product-card.component";

export default class RandomProductRendering {
    static async render({ request: { resource }, data }) {

      const count = 4;
      const products = await data;
      const randomSaleProducts = [];

      const min = 1;
      const max = products.length;
      const randomNumbers = [];

      for (let i = 0; i < count; i++) {
        let n =  Math.floor(Math.random() * max) + min;
        let check = randomNumbers.includes(n);
 
        if(!check) {
          randomNumbers.push(n);
        } else {
          while(check){
            n = Math.floor(Math.random() * max) + min;
            check = randomNumbers.includes(n);
              if(!check){
                randomNumbers.push(n);
              }
            }
          }
        }
 
        randomNumbers.forEach(n => randomSaleProducts.push(products[n]));

        const product1 = ProductCard.render(randomSaleProducts[0]);
        const product2 = ProductCard.render(randomSaleProducts[1]);
        const product3 = ProductCard.render(randomSaleProducts[2]);
        const product4 = ProductCard.render(randomSaleProducts[3]); 
        
        return [product1, product2, product3, product4];

    }

    
}