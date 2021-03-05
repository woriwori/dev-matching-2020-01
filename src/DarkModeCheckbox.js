import domHelper from './utils/domHelper.js';

export default class DarkModeCheckBox {
    constructor({$target}) {
        const $checkbox = domHelper.createElement('input', $el => {
            $el.type = 'checkbox';
            $el.id = 'dark-mode-checkbox';
        });

        const $label = domHelper.createElement('label', $el => {
            $el.for = 'dark-mode-checkbox';
            $el.innerHTML = '다크 모드';
        });

        $target.appendChild($checkbox);
        $target.appendChild($label);

        // $searchInput.className = "SearchInput";

        $checkbox.addEventListener("change", e => {
            console.log(e);
            if (e.target.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
            }
        });
    }

    render() {
    }
}
