import DashboardMenu from "../components/dashboardMenu";

export default class AdminView {
    static render() {
        return `
        <div class="dashboard">
            ${DashboardMenu.render()}
            <div class="cardBox">
            <div class="card">
                <div>
                    <div class="numbers">1.504</div>
                    <div class="cardName">Daily views</div>
                </div>
                <div class="iconBx">
                    <ion-icon name="eye-outline"></ion-icon>
                </div>
            </div>
            <div class="card">
                <div>
                    <div class="numbers">88</div>
                    <div class="cardName">Sales</div>
                </div>
                <div class="iconBx">
                    <ion-icon name="cart-outline"></ion-icon>
                </div>
            </div>
            <div class="card">
                <div>
                    <div class="numbers">288</div>
                    <div class="cardName">Comments</div>
                </div>
                <div class="iconBx">
                    <ion-icon name="chatbubbles-outline"></ion-icon>
                </div>
            </div>
            <div class="card">
                <div>
                    <div class="numbers">$5.000</div>
                    <div class="cardName">Earming</div>
                </div>
                <div class="iconBx">
                    <ion-icon name="card-outline"></ion-icon>
                </div>
            </div>
            </div>
            
            <div class="details">
                <div class="recentOrders">
                    <div class="cardHeader">
                        <h2>Recent Orders</h2>
                        <a href="#" class="btn btn-dark">View All</a>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Customer</td>
                                <td>Phone</td>
                                <td>Price</td>
                                <td>Payment</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2</td>
                                <td>shakira</td>
                                <td>070556677</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span class="status delivered">Delivered</span></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                 <td>adriana lima</td>
                                 <td>070556677</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td><span class="status pending">Pending</span></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>angelina joli</td>
                                <td>070556677</td>
                                <td>$620</td>
                                <td>Paid</td>
                                <td><span class="status inprogress">In progress</span></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>gokan alp</td>
                                <td>070556677</td>
                                <td>$620</td>
                                <td>Paid</td>
                                <td><span class="status pending">Pending</span></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Elena</td>
                                <td>070556677</td>
                                <td>$200</td>
                                <td>Paid</td>
                                <td><span class="status inprogress">In progress</span></td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Bekim</td>
                                <td>070556677</td>
                                <td>$150</td>
                                <td>Paid</td>
                                <td><span class="status delivered">Delivered</span></td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>jovan</td>
                                <td>070556677</td>
                                <td>$620</td>
                                <td>Paid</td>
                                <td><span class="status return">Return</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
           
        `;
    }
}