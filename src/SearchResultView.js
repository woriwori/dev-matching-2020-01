import { createElement } from "./utils/domHelper.js";
import storage from "./utils/storage.js";

export default class SearchResultView {
  $searchResult = null;
  onClick = null;
  NO_DATA_STRING = "검색 결과가 없습니다.";

  constructor({ $target, initialData, onClick }) {
    this.$searchResult = createElement("div", ($el) => {
      $el.className = "SearchResultView";
    });
    $target.appendChild(this.$searchResult);

    this.onClick = onClick;

    this.render(initialData);
  }

  setState(nextData) {
    this.render(nextData);
  }

  render(data) {
    storage.set("searchResults", data);

    const hasData = !!data.length;

    if (!hasData) {
      this.$searchResult.innerHTML = this.NO_DATA_STRING;
    } else {
      this.$searchResult.innerHTML = this.getConvertedDataToHTML(data);
      this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
        $item.addEventListener("click", () => {
          this.onClick(data[index]);
        });
      });
    }
  }

  getConvertedDataToHTML(data) {
    return data
      .map(
        (cat) => `
          <div class="item">
            <img src=${cat.url} alt=${cat.name} />
          </div>
        `
      )
      .join("");
  }
}
