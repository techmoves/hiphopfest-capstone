
// mobile Menu

const hum = document.querySelector(".humburger");
const closeBtn = document.querySelector("#closebtn");

hum.addEventListener("click", (e) => {
  const header = document.querySelector("header");
  const mobMenu = document.querySelector(".option");
  header.style.display = "none";
  mobMenu.classList.toggle("show");
});

closeBtn.addEventListener("click", (e) => {
  const header = document.querySelector("header");
  const mobMenu = document.querySelector(".option");
  header.style.display = "block";
  mobMenu.classList.toggle("show");
});
