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
    image: "./Assets/Justin Beiber.png",
  },
  {
    id: 2,
    name: "Kendric Lamar",
    occupation: "Multi Grammy Award winner",
    description:
      "Award wining rapper born in Compton La and multplatinum selling artist.",
    image: "./Assets/Adam Levine.png",
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
<div class="singer-container" id="singer-${id}">
    <div class="singer-image">
        <img src="${image}"/>
    </div>
    <div class="singer-info">
        <h3 class="singer-name">${name}</h3>
        <hr class="singer-line">
        <p class="singer-occupation">${occupation}</p>
        <p class="singer-description">${description}</p>
    </div>
</div>
`;

singer.forEach((sing) => {
  const html = htmlStructure(
    sing.id,
    sing.name,
    sing.occupation,
    sing.description,
    sing.image
  );
  mainContainer.innerHTML += html;
});

// more singer button
const moreSingers = document.createElement("div");
performer.appendChild(moreSingers);
moreSingers.classList.add("moreSingerBtn-Container");
const moreSingersBtn = document.createElement("button");
moreSingersBtn.textContent = "More Singers";
moreSingersBtn.classList.add("moreSingerBtn");
moreSingers.appendChild(moreSingersBtn);
const moreSingersBtnIcon = document.createElement("img");
moreSingersBtnIcon.src = "./Assets/more-singers.png";
moreSingersBtnIcon.classList.add("moreSingerBtn-Icon");
moreSingersBtn.appendChild(moreSingersBtnIcon);

// event listener for more singer btn;
const moreBtn = document.querySelector(".moreSingerBtn");
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
const mobMenu = document.querySelector(".mob-menu");

ham.addEventListener("click", () => {
  mobMenu.style.display = "flex";
  mainContainer.style.filter = "blur(100px)";
});

closeBtn.addEventListener("click", () => {
  mobMenu.style.display = "block";
  mainContainer.style.filter = "blur(0)";
});

mobMenu.addEventListener("click", () => {
  mobMenu.style.display = "block";
  mainContainer.style.filter = "blur(0)";
});
