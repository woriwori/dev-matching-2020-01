import loader from "./utils/loader.js";

const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";
const ERROR_MESSAGE = {
  404: "404 에러입니다.",
  500: "500 에러입니다.",
};
const doFetch = async (url) => {
  try {
    loader.start();

    const result = await fetch(url);

    if (!result.ok) throw Error(ERROR_MESSAGE[result.status]);

    loader.stop();

    return await result.json();
  } catch (e) {
    console.error(e);
  }
};

export default {
  fetchCats: (keyword) => {
    return doFetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
  },
  fetchGif: (keyword) => {
    return doFetch(`${API_ENDPOINT}/api/gif/search?q=${keyword}`);
  },
  fetchGifAll: () => {
    return doFetch(`${API_ENDPOINT}/api/gif/all`);
  },
};
