import DashboardMenu from "../components/dashboardMenu";
export default class DasboardView {
    static render() {
        return `
            <div class="dashboard">
             ${DashboardMenu.render({selected: 'dashboard'})}
             <div class="dashboard-content">
             <h1>Dashboard</h1>
            </div>
            Info and charts will be added here 
            </div>
            </div>
            </div>
        `;
    }
}