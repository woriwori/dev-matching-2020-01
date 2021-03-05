import domHelper from './utils/domHelper.js';

export default class SearchInput {
    constructor({$target, onSearch}) {
        const $searchInput = domHelper.createElement('input', $el => {
            $el.placeholder = "고양이를 검색해보세요.|";
            $el.className = "SearchInput";
        });

        this.$searchInput = $searchInput;
        $target.appendChild($searchInput);

        $searchInput.focus();

        $searchInput.addEventListener("keyup", e => {
            if (e.keyCode === 13) {
                onSearch(e.target.value);
            }
        });
        $searchInput.addEventListener("click", e => {
            e.target.value = '';
        });

        console.log("SearchInput created.", this);
    }

    render() {
    }
}
