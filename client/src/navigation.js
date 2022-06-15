// let btn = document.getElementsByClassName("navbar-toggler");
const togglerBtn = document.getElementsByClassName("toggler-btn");
const div = document.getElementById("navbarColor01");
const loginAndCart = document.getElementById("right-side-second");
const inputForm = document.getElementById("input-form");
const navForm = div.children[1];
const navFormTwo = div.children[2];
const span1 = navFormTwo.children[0];
const span2 = navFormTwo.children[2];

togglerBtn[0].addEventListener("click", () => {
  if (window.innerWidth <= 990) {
    navForm.style.display = "block";
    inputForm.style.width = "50%";
    inputForm.style.height = "auto";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 990) {
    navForm.style.display = "none";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 1478.4) {
    navFormTwo.style.display = "contents";
    span1.style.color = "#f9f9f9";
    span2.style.color = "#f9f9f9";
  } else {
    navFormTwo.style.display = "none";
  }
});

const nav3 = document.getElementById("black-header-div");

window.addEventListener("load", () => {
  nav3.innerHTML += navBlack();
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav3.style.position = "sticky";
  }
});

const navBlack = () => {
  return `<header class="black-header">
  <nav class="navbar first-navbar">
    <div class="container-fluid black-container">
      <div class="nav navbar-nav1">
        <div class="women-div-black dropdown" style="float:left;">
          <a class="nav-link dropbtn" href="/#/women">WOMEN</a>
          <div class="dropdown-content" style="left:0;">
            <a href="#">Shirts</a>
            <a href="#">Blouses</a>
            <a href="#">Sweatshirt</a>
            <a href="#">Jackets</a>
            <a href="#">Trousers</a>
            <a href="#">Shorts</a>
            <a href="#">Jeans</a>
          </div>
        </div>
        <div class="text-div-black">
          <p>NEW HERE? Get 20% off everything*</p>
          <p>With code: ORYX20</p>
        </div>
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
        </div>
      </div>
  </nav>
</header>`;
};
