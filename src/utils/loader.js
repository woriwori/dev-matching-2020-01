import { getElement } from "./domHelper.js";

const $loader = getElement("id", "loader");

export default {
  start() {
    $loader.classList.remove("hide");
  },
  stop() {
    $loader.classList.add("hide");
  },
};
