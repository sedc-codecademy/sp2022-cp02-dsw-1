export default class CartView {
    static render() {
        return /*html*/`
        <div class="shopping-cart__card container">
        <div class="row">
            <div class="col-md-8 cart">
                <div class="cart__title">
                    <div class="row">
                        <div class="col"><h4><b>Shopping Cart</b></h4></div>
                        <div class="col align-self-center text-right text-muted">3 items</div>
                    </div>
                </div>    
                <div class="row border-top border-bottom">
                    <div class="row cart__main align-items-center">
                        <div class="col-2"><img class="img-fluid" src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></div>
                        <div class="col">
                            <div class="row text-muted">Yahwen Yiren</div>
                            <div class="row">Black T-Shirt</div>
                        </div>
                        <div class="col">
                            <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
                        </div>
                        <div class="col">&euro; 44.00 <span class="cart__close-btn">&#10005;</span></div>
                    </div>
                </div>
                <div class="row">
                    <div class="row cart__main align-items-center">
                        <div class="col-2"><img class="img-fluid" src="https://images.unsplash.com/photo-1533399710066-c33de66fe6bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></div>
                        <div class="col">
                            <div class="row text-muted">Vince</div>
                            <div class="row">Long sleeve satin shirt</div>
                        </div>
                        <div class="col">
                            <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
                        </div>
                        <div class="col">&euro; 44.00 <span class="cart__close-btn">&#10005;</span></div>
                    </div>
                </div>
                <div class="row border-top border-bottom">
                    <div class="row cart__main align-items-center">
                        <div class="col-2"><img class="img-fluid" src="https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></div>
                        <div class="col">
                            <div class="row text-muted">Bershka</div>
                            <div class="row">ong sleeved oversized shirt</div>
                        </div>
                        <div class="col">
                            <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
                        </div>
                        <div class="col">&euro; 44.00 <span class="cart__close-btn">&#10005;</span></div>
                    </div>
                </div>
                <div class="cart__back-to-shop-link"><a href="#">&leftarrow;</a><span class="text-muted">Back to shop</span></div>
            </div>
            <div class="col-md-4 cart__summary">
                <div><h5><b>Summary</b></h5></div>
                <hr>
                <div class="row">
                    <div class="col" style="padding-left:0;">ITEMS 3</div>
                    <div class="col text-right">&euro; 132.00</div>
                </div>
                <form class="cart__summary__form">
                    <p>SHIPPING</p>
                    <select><option class="text-muted">Standard-Delivery- &euro;5.00</option></select>
                    <p>GIVE CODE</p>
                    <input class="cart__summary__form__code" placeholder="Enter your code">
                </form>
                <div class="row" style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;">
                    <div class="col">TOTAL PRICE</div>
                    <div class="col text-right">&euro; 137.00</div>
                </div>
                <button class="cart__summary__form__btn">ORDER NOW</button>
            </div>
        </div>
        
    </div>
        `;
    }
}