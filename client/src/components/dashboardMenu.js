const DashboardMenu = {
    render:()=>{
        return `
        
        <ul class="admin__row">
          <li class="admin-navbar">
            <a href="/#/admin" class="admin-navbar_nav-item-active">Home</a>
          </li>
          
          <li class="admin-navbar">
            <a href="/#/admin-product" class="admin-navbar_nav-item-active">Product</a>
          </li>
          
          <li class="admin-navbar">
            <a href="/#/profil" class="admin-navbar_nav-item-active">Profil</a>
          </li>
          <li class="admin-navbar">
          <a href="/#/" class="admin-navbar_nav-item-active">Log out</a>
        </li>
        </ul>
   <scripts type="module" src="/src/js/index.js"></script>
        `;
    }
  }
  export default DashboardMenu;