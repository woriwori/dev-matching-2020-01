import { isFunction } from "./validator.js";

export function createElement(tagName, callback) {
  const $el = document.createElement(tagName);
  if (isFunction(callback)) {
    callback($el);
  }
  return $el;
}
export function getElement(type, name) {
  switch (type) {
    case "id":
      return document.getElementById(name);
    case "tag":
      return document.getElementsByTagName(name)[0];
    case "tags":
      return document.getElementsByTagName(name);
    default:
  }
}
