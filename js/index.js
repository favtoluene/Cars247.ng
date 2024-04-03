const navBtn = document.getElementById("navBtn");
navBtn.style.cursor = "pointer";
let navBar = document.getElementById("navBar");
navBar.style.display = "none";

navBtn.addEventListener(
  "click",
  () => {
    let navBar = document.getElementById("navBar");
    if (navBar.style.display === "none") {
      navBar.style.display = "block";
      navBtn.src = "images/xMark.png";
      navBtn.style.height = "25px";
    } else {
      navBar.style.display = "none";
      navBtn.src = "images/List.png";
      navBtn.style.height = "32px";
    }
  },
  { passive: true }
);