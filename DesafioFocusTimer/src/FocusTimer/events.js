import * as actions from "./action.js";
import { controls } from "./elements.js";

export function registerControl() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    actions[action]();
  });
}
