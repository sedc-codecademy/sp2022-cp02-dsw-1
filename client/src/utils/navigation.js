const togglerBtn = document.getElementsByClassName("toggler-btn");
const div = document.getElementById("navbarColor01");
const loginAndCart = document.getElementById("right-side-second");
const inputForm = document.getElementById("input-form");
const navForm = div.children[1];
const navFormTwo = div.children[2];
const span1 = navFormTwo.children[0];
const span2 = navFormTwo.children[2];
const nav3 = document.getElementById("black-header-div");
const btnCollapse = document.getElementById("btn-col");

togglerBtn[0].addEventListener("click", () => {
  if (window.innerWidth <= 990) {
    navForm.style.display = "block";
    inputForm.style.width = "50%";
    inputForm.style.height = "auto";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 1060) {
    loginAndCart.style.display = "none";
    navFormTwo.style.display = "contents";
    span1.style.color = "#f9f9f9";
    span2.style.color = "#f9f9f9";
  } else {
    loginAndCart.style.display = "inherit";
    navFormTwo.style.display = "none";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 991.2) {
    navFormTwo.style.display = "flex";
    navFormTwo.style.justifyContent = "space-between";
    span1.style.color = "#f9f9f9";
    span2.style.color = "#f9f9f9";
    btnCollapse.style.width = "35px";
    btnCollapse.style.height = "33px";
  } else {
    navForm.style.display = "none";
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
    <div class="container-fluid black-container">
      <div class="nav navbar-nav1">
        <div class="women-div-black">
          <a class="nav-link nav-a" href="/#/women">WOMEN</a>         
        </div>
        <div class="text-div-black">
          <p>NEW HERE? Get 20% off everything*</p>
          <p>With code: ORYX20</p>
        </div>
<<<<<<< HEAD:client/src/utils/navigation.js
        <div class="man-div-black">
          <a class="nav-link nav-a" href="/#/men">MEN</a>          
=======
        <div class="man-div-black dropdown" style="float:right;">
          <a class="nav-link dropbtn" href="/#/men">MEN</a>
          <div class="dropdown-content" style="right:0;">
            <a href="#">Shirts</a>
            <a href="#">Blouses</a>
            <a href="#">Sweatshirt</a>
            <a href="#">Jackets</a>
            <a href="#">Trousers</a>
            <a href="#">Shorts</a>
            <a href="#">Jeans</a>
          </div>
>>>>>>> develop:client/src/navigation.js
        </div>
      </div>
  </nav>
</header>`;
};
