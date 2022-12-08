const welcome = () => {
  console.log("Witaj!");
};

const toggleBackground = () => {
  const body = document.body;
  const sienaText = document.querySelector(".js-siena-text");
  const NewBackground = body.classList.contains("new-background");
  body.classList.toggle("new-background");
};

/*
const image = document.querySelector(".header__image");
image.classList.toggle = "/assets/S.Polo.jpg";
*/

const toggleImage = () => {
  const image = document.querySelector(".js-image");
  const imageButton = document.querySelector(".js-image-button");
  const imageIsActive = image.classList.contains("section__image--invisible");

  image.classList.toggle("section__image--invisible");
  imageButton.innerText = !imageIsActive
    ? "Ukryj moje zdjęcie z wakacji w Sienie"
    : "Pokaż moje zdjęcie z wakacji w Sienie";
};

const init = () => {
  const themeNameButton = document.querySelector(".js-theme-name-button");
  const imageButton = document.querySelector(".js-image-button");

  themeNameButton.addEventListener("click", toggleBackground);

  imageButton.addEventListener("click", toggleImage);

  welcome();
};
init();