const cookieResult = document.querySelector(".cookieResult");
const btnNew = document.querySelector(".btnNew");
const screenOne = document.querySelector("#screenOne");
const screenTwo = document.querySelector("#screenTwo");
const text = document.querySelector(".text");

const results = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Procure acender uma vela em vez de amaldiçoar a escuridão",
];

cookieResult.addEventListener("click", handleOpenCookie);
btnNew.addEventListener("click", handleOpenCookie);

function handleOpenCookie() {
  let randomValue = Math.round(Math.random() * (results.length - 1));
  let randomMessage = results[randomValue];

  text.innerHTML = randomMessage;

  if (screenTwo.classList.contains("hide")) {
    screenTwo.classList.remove("hide");
    screenOne.classList.add("hide");
  }
}
