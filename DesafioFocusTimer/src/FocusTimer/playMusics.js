import * as sounds from "./sounds.js";

const cafeteria = document.querySelector("#cafeteria");
const floresta = document.querySelector("#floresta");
const chuva = document.querySelector("#chuva");
const lareira = document.querySelector("#lareira");

cafeteria.addEventListener("click", (event) => {
  cafeteria.classList.toggle("select");
  floresta.classList.remove("select");
  chuva.classList.remove("select");
  lareira.classList.remove("select");
  pauseMusic();

  if (cafeteria.classList.contains("select")) {
    sounds.btnCafeteria.play();
  }
});

floresta.addEventListener("click", (event) => {
  cafeteria.classList.remove("select");
  floresta.classList.toggle("select");
  chuva.classList.remove("select");
  lareira.classList.remove("select");
  pauseMusic();

  if (floresta.classList.contains("select")) {
    sounds.btnFloresta.play();
  }
});

chuva.addEventListener("click", (event) => {
  cafeteria.classList.remove("select");
  floresta.classList.remove("select");
  chuva.classList.toggle("select");
  lareira.classList.remove("select");
  pauseMusic();

  if (chuva.classList.contains("select")) {
    sounds.btnChuva.play();
  }
});

lareira.addEventListener("click", (event) => {
  cafeteria.classList.remove("select");
  floresta.classList.remove("select");
  chuva.classList.remove("select");
  lareira.classList.toggle("select");
  pauseMusic();

  if (lareira.classList.contains("select")) {
    sounds.btnLareira.play();
  }
});

function pauseMusic() {
  sounds.btnCafeteria.pause();
  sounds.btnChuva.pause();
  sounds.btnFloresta.pause();
  sounds.btnLareira.pause();
}
