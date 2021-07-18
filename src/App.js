// utils
import { getElement } from "./utils/domHelper.js";
import storage from "./utils/storage.js";
import api from "./api.js";

// component
import DarkModeCheckBox from "./DarkModeCheckBox.js";
import SearchInput from "./SearchInput.js";
import SearchResultView from "./SearchResultView.js";
import ImageInfo from "./ImageInfo.js";

export default class App {
  searchResults = storage.get("searchResults") || [];

  constructor($target) {
    this.$app = $target;
    this.$header = getElement("tag", "header");
    this.$main = getElement("tag", "main");

    this.darkModeCheckBox = new DarkModeCheckBox({
      $target: this.$header,
    });

    this.searchInput = new SearchInput({
      $target: this.$header,
      onSearch: async (keyword) => {
        const response = await api.fetchCats(keyword);
        this.searchResults = response.data;
        this.searchResultView.setState(response.data);
      },
    });

    this.searchResultView = new SearchResultView({
      $target: this.$main,
      initialData: this.searchResults,
      onClick: (image) => {
        this.imageInfo.setState({
          visible: true,
          image,
        });
      },
    });

    this.imageInfo = new ImageInfo({
      $target: this.$app,
      data: {
        visible: false,
        image: null,
      },
    });
  }
}
