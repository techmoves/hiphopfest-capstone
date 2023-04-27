const performer = document.getElementById("singer");
const performerContainer = document.createElement("div");
performerContainer.id = "performer";
performer.appendChild(performerContainer);
const featureTitle = document.createElement("h3");
featureTitle.innerHTML = "FEATURED PERFORMER";
featureTitle.classList = "featureTitle";
performerContainer.appendChild(featureTitle);

const mainContainer = document.createElement("div");
mainContainer.id = "main";
performerContainer.insertAdjacentElement("afterend", mainContainer);

const artist = [
  {
    id: 1,
    name: "J.cole",
    occupation: "Singer, songwriter",
    description:
      "J.cole has has sold out shows and mult platnum selling Albums,a success full home coming show called dreamville fest happening anually",
    image: "images/cole.png",
  },
  {
    id: 2,
    name: "Kendric Lamar",
    occupation: "Multi Grammy Award winner",
    description:
      "Award wining rapper born in Compton La and multplatinum selling artist.",
    image: "images/kdot.png"
  },
  {
    id: 3,
    name: "Sza",
    occupation: "A senstional RnB singer",
    description:
      "Sza is a multi platnum sellling artist who has made her self a name with hits like Love Galore and many more her last Albums rank No1 on billboard.",
    image: "images/sza.png",
  },
  {
    id: 4,
    name: "Blxst",
    occupation: "Rapper born in La",
    description:
      "A new kid on the block reviving the hip hop and urban culture to the next level,hes is best new comer and Grammy nominated.",
    image: "images/blst.png",
  },
  {
    id: 5,
    name: "MuMu  fresh",
    occupation: "A senstional singer and raps",
    description:
      " She is an indipendent rapper and sings with poetic tap style and a teacher.",
    image: "images/mumu.png",
  },
  {
    id: 6,
    name: "Lil Wayne",
    occupation: " Rapper, CEO of Yung money",
    description:
      "Lil wayne is one of the most influetial Rapper and the greatest of all times and records label owner and business man",
    image: "images/weeezy.png",
  },
];

const htmlStructure = (id, name, occupation, description, image) => ` 
<div class="artist" id="${id}">
    <img class="pic-sizing"src="${image}" alt="icon-guest">
    <div class="details">
    <h4 class="${name}">Kendric Lamar</h4>
    <h5 class="${occupation} color">Multi Grammy Award winner</h5>
    <hr class="line-speaker">
    <p class="${description}">
        Award wining rapper born in Compton La and multplatinum selling artist.
    </p>
    </div>
</div>
`;
// ---
{/* <div class="artist" id="${id}">
    <img class="pic-sizing"src="${image}" alt="icon-guest">
    <div class="details">
    <h4 class="${name}">Kendric Lamar</h4>
    <h5 class="{occupation} color">Multi Grammy Award winner</h5>
    <hr class="line-speaker">
    <p class="${description}">
        Award wining rapper born in Compton La and multplatinum selling artist.
    </p>
    </div>
</div> }*/
// ---
artist.forEach((sing) => {
  const html = htmlStructure(
    sing.id,
    sing.name,
    sing.occupation,
    sing.description,
    sing.image
  );
  artist-lineup.innerHTML += html;
});

// more singer button
const expandaBtn = document.createElement("div");
performer.appendChild(expandaBtn);
expandaBtn.classList.add("moreSingerBtn-Container");
const expandaBtnBtn = document.createElement("button");
expandaBtnBtn.textContent = "More Singers";
expandaBtnBtn.classList.add("moreSingerBtn");
expandaBtn.appendChild(expandaBtnBtn);
const expandaBtnBtnIcon = document.createElement("img");
expandaBtnBtnIcon.src = "./Assets/more-singers.png";
expandaBtnBtnIcon.classList.add("moreSingerBtn-Icon");
expandaBtnBtn.appendChild(expandaBtnBtnIcon);

// event listener for more singer btn;
const moreBtn = document.querySelector("images/arrow.png");
const hiddenSingers = [
  document.getElementById("singer-3"),
  document.getElementById("singer-4"),
  document.getElementById("singer-5"),
  document.getElementById("singer-6"),
];

moreBtn.addEventListener("click", () => {
  hiddenSingers.forEach((singer) => {
    singer.style.display = "flex";
  });
});

// Mobile menu

const ham = document.querySelector(".humburger");
const closeBtn = document.querySelector(".closeBtn");
const mobMenu = document.querySelector(".mobile-menu");

ham.addEventListener("click", () => {
  mobMenu.style.display = "flex";
  artist-lineup.style.filter = "blur(100px)";
});

closeBtn.addEventListener("click", () => {
  mobMenu.style.display = "block";
  artist-lineup.style.filter = "blur(0)";
});

mobMenu.addEventListener("click", () => {
  mobMenu.style.display = "block";
  artist-lineup.style.filter = "blur(0)";
});
