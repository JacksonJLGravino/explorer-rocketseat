import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { calculateIMC, notANumber } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = function (event) {
  event.preventDefault();
  const weigth = inputWeight.value;
  const height = inputHeight.value;

  const weigthOrHeightIsNotANumber = notANumber(weigth) || notANumber(height);

  if (weigthOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }

  AlertError.close();

  const result = calculateIMC(weigth, height);
  displayResultMessage(result);
};

function displayResultMessage(result) {
  const message = `Seu IMG é de ${result}`;
  Modal.open();
  Modal.message.innerText = message;
}

inputHeight.oninput = () => AlertError.close();
inputWeight.oninput = () => AlertError.close();
