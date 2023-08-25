import * as el from "./elements.js";
import * as timer from "./timer.js";
import state from "./state.js";

export function toggleRunning() {
  el.controls.classList.toggle("running");
  timer.countdown();
}

export function reset() {
  el.controls.classList.remove("running");
  toggleRunning();
  timer.updateDisplay();
}

export function increaseTime() {
  let min = Number(el.minutes.textContent) + 5;
  if (min > 60) {
    min = 60;
  }
  el.minutes.textContent = String(min).padStart(2, "0");
  el.seconds.textContent = "00";
}

export function decreaseTime() {
  let min = Number(el.minutes.textContent);
  if (min <= 1) {
    reset();
  } else {
    min--;
    el.minutes.textContent = String(min).padStart(2, "0");
    el.seconds.textContent = "00";
  }
}
