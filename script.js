const artistArr = [
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
    image: "images/kdot.png",
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
const featureSection = document.getElementById("artist-lineup");
const globalContainer = document.createElement("div");
globalContainer.className = "global-act";
featureSection.appendChild(globalContainer);
const featureTitle = document.createElement("h3");
featureTitle.className = "inter-act";
featureTitle.innerText = "Featured International Act";
globalContainer.appendChild(featureTitle);
const hr = document.createElement("hr");
hr.className = "horizontal-main-line";
globalContainer.appendChild(hr);
const artiseLineUp = document.createElement("div");
artiseLineUp.className = "artist-line-up";
globalContainer.appendChild(artiseLineUp);
artistArr.map((artist) => {
  const artise = document.createElement("div");
  const imgDiv = document.createElement("div");
  imgDiv.classList.add(".images");
  artise.className = "artist";
  const artiseImg = document.createElement("img");
  artiseImg.className = "pic-sizing";
  artiseImg.src = artist.image;
  const checkImg = document.createElement("img");
  checkImg.className = "check-img";
  checkImg.src = "images/check.jpg";
  checkImg.alt = "icon-guest";
  imgDiv.appendChild(artiseImg);
  const artiseDetails = document.createElement("div");
  artiseDetails.className = "details";
  const artiseName = document.createElement("h4");
  artiseName.className = "art-name";
  artiseName.innerText = artist.name;
  const artisePosition = document.createElement("h5");
  artisePosition.className = "art-name color";
  artisePosition.innerText = artist.occupation;
  const speakerLine = document.createElement("hr");
  speakerLine.className = "line-speaker";
  const artiseBio = document.createElement("p");
  artiseBio.className = "artist-bio";
  artiseBio.innerText = artist.description;
  artiseLineUp.appendChild(artise);
  artise.appendChild(imgDiv);
  artise.appendChild(artiseDetails);
  artiseDetails.appendChild(artiseName);
  artiseDetails.appendChild(artisePosition);
  artiseDetails.appendChild(speakerLine);
  artiseDetails.appendChild(artiseBio);
});

const artiseButton = document.createElement("button");
artiseButton.className = "expandaBtn";
artiseButton.innerText = "More";
featureSection.appendChild(artiseButton);

// mobile Menu

const hum = document.querySelector(".humburger");
const closeBtn = document.querySelector("#closebtn");
const mobMenu = document.querySelector(".mobile-menu");

hum.addEventListener("click", (e) => {
  //   e.preventDefault();
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
