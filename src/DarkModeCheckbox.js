import { createElement } from "./utils/domHelper.js";

export default class DarkModeCheckBox {
  constructor({ $target }) {
    const $checkbox = createElement("input", ($el) => {
      $el.type = "checkbox";
      $el.id = "dark-mode-checkbox";
    });
    $checkbox.addEventListener("change", (e) => {
      if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
    });

    const $label = createElement("label", ($el) => {
      $el.for = "dark-mode-checkbox";
      $el.innerHTML = "다크 모드";
    });

    $target.appendChild($checkbox);
    $target.appendChild($label);
  }

  render() {}
}
