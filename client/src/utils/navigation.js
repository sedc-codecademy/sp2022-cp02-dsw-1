const togglerBtn = document.getElementsByClassName("toggler-btn");
const div = document.getElementById("navbarColor01");
const inputForm = document.getElementById("input-form");
const navForm = div.children[1];
const navFormTwo = div.children[2];
const nav3 = document.getElementById("black-header-div");
const btnCollapse = document.getElementById("btn-col");

togglerBtn[0].addEventListener("click", () => {
  if (window.innerWidth <= 991.2) {
    navForm.style.display = "flex";
    navForm.style.justifyContent = "center";
    navForm.style.paddingBottom = "10px";
    inputForm.style.width = "240px";
    inputForm.style.height = "33px";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 991.2) {
    btnCollapse.style.width = "35px";
    btnCollapse.style.height = "33px";
  } else {
    navForm.style.display = "none";
    navFormTwo.style.display = "none";
  }
});

window.addEventListener("load", () => {
  nav3.innerHTML += navBlack();
});
// window.addEventListener("scroll", () => {
//   if (window.scrollY > 100) {
//     nav3.style.position = "sticky";
//   }
// });

const navBlack = () => {
  return `<header class="black-header">
  <nav class="navbar first-navbar dark-nav">
    <div class="container black-container">
      <div class="nav navbar-nav1">
        <div class="women-div-black">
          <a class="nav-link nav-a" href="/#/women">WOMEN</a>         
        </div>
        <div class="text-div-black">
          <p>NEW HERE? Get 20% off everything*</p>
          <p>With code: ORYX20</p>
        </div>
        <div class="man-div-black">
          <a class="nav-link nav-a" href="/#/men">MEN</a>          
        </div>
      </div>
  </nav>
</header>`;
};
