console.log("app is running!");
import DarkModeCheckBox from './DarkModeCheckBox.js';
import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';
import ImageInfo from './ImageInfo.js';

import domHelper from './utils/domHelper.js';
import storageHelper from './utils/storageHelper.js';

import api from './api.js';

export default class App {
    data = storageHelper.get('searchResults') || [];

    constructor($target) {
        this.$app = $target;
        this.$header = domHelper.getElement('tag', 'header');
        this.$main = domHelper.getElement('tag', 'main');

        this.darkModeCheckBox = new DarkModeCheckBox({
            $target: this.$header
        });

        this.searchInput = new SearchInput({
            $target: this.$header,
            onSearch: async keyword => {
                const result = await api.fetchCats(keyword);
                this.setState(result.data);
            }
        });

        this.searchResult = new SearchResult({
            $target: this.$main,
            initialData: this.data,
            onClick: image => {
                this.imageInfo.setState({
                    visible: true,
                    image
                });
            }
        });

        this.imageInfo = new ImageInfo({
            $target: this.$app,
            data: {
                visible: false,
                image: null
            }
        });
    }

    setState(nextData) {
        console.log(this);
        this.data = nextData;
        this.searchResult.setState(nextData);
    }
}
