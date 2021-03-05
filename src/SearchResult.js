import domHelper from './utils/domHelper.js';
import storageHelper from './utils/storageHelper.js';

export default class SearchResult {
    $searchResult = null;
    onClick = null;
    NO_DATA_STRING = '검색 결과가 없습니다.';

    constructor({$target, initialData, onClick}) {
        this.$searchResult = document.createElement("div");
        this.$searchResult.className = "SearchResult";
        $target.appendChild(this.$searchResult);

        this.onClick = onClick;

        this.render(initialData);
    }

    setState(nextData) {
        this.render(nextData);
    }

    render(data) {
        storageHelper.set('searchResults', data);

        const hasData = !!data.length;

        if (!hasData) {
            this.$searchResult.innerHTML = this.NO_DATA_STRING;
        } else {
            this.$searchResult.innerHTML = this.getConvertedDataToHTML(data);
            this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
                $item.addEventListener("click", () => {
                    this.onClick(this.data[index]);
                });
            });
        }
    }

    getConvertedDataToHTML(data) {
        return data
            .map(
                cat => `
          <div class="item">
            <img src=${cat.url} alt=${cat.name} />
          </div>
        `
            )
            .join("");
    }
}
