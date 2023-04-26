// const menuBtn = document.querySelector(".humburger");

// const menuDisplay = () => {
//   const modal = document.createElement("section");
//   modal.id = "custom-modal";

//   const deleteBtn = document.createElement("div");
//   deleteBtn.textContent = "X";
//   deleteBtn.id = "modal-delete";
//   modal.appendChild(deleteBtn);

//   const menuList = document.createElement("ul");
//   menuList.id = "menu-list";

//   const item1 = document.createElement("li");
//   const portfolio = document.createElement("a");
//   portfolio.href = "#about-sec";
//   portfolio.className = "menu-content";
//   portfolio.textContent = "About";
//   item1.appendChild(About);
//   portfolio.addEventListener("click", () => {
//     modal.style.visibility = "hidden";
//   });

//   const item2 = document.createElement("li");
//   const about = document.createElement("a");
//   about.href = "#about-sec";
//   about.className = "menu-content";
//   about.textContent = "About";
//   item2.appendChild(about);
//   about.addEventListener("click", () => {
//     modal.style.visibility = "hidden";
//   });

//   menuList.appendChild(item1);
//   menuList.appendChild(item2);
//   menuList.appendChild(item3);
//   modal.appendChild(menuList);
//   document.body.appendChild(modal);

//   const removeModal = () => {
//     modal.style.visibility = "hidden";
//   };

//   deleteBtn.addEventListener("click", removeModal);
// };
// menuBtn.addEventListener("click", menuDisplay);


// Mobile menu

const ham = document.querySelector(".humburger");
const closeBtn = document.querySelector('.closeBtn');
const mobMenu = document.querySelector('.mob-menu');

ham.addEventListener('click', () => {
  mobMenu.style.display = 'flex';
  mainContainer.style.filter = 'blur(100px)';
});

closeBtn.addEventListener('click', () => {
  mobMenu.style.display = 'none';
  mainContainer.style.filter = 'blur(0)';
});

mobMenu.addEventListener('click', () => {
  mobMenu.style.display = 'none';
  mainContainer.style.filter = 'blur(0)';
});