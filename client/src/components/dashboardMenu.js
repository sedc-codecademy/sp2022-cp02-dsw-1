const DashboardMenu = {
    render:()=>{
        return `
  <ul>
    <li><a href="/#/admin">Home</a></li>
    <li><a href="/#/product">Product</a></li>
    <li><a href="/#/Profile">Profile</a></li>
    <li><a href="/#/">Log out</a></li>
  </ul>
  
   <scripts type="module" src="/src/js/index.js"></script>
        `;
    }
  }
  export default DashboardMenu;