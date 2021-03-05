import domHelper from './utils/domHelper.js';
import loaderHelper from './utils/loaderHelper.js';

const API_ENDPOINT =
    "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";
const ERROR_MESSAGE = {
    404: '404 에러입니다.',
    500: '500 에러입니다.'
}
const request = async (url) => {
    try {
        loaderHelper.start();

        const result = await fetch(url);

        if (!result.ok) throw Error(ERROR_MESSAGE[result.status]);

        loaderHelper.stop();

        return await result.json();
    } catch (e) {
        console.error(e);
    }
}

export default {
    fetchCats: keyword => {
        return request(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
    },
    fetchGif: keyword => {
        return request(`${API_ENDPOINT}/api/gif/search?q=${keyword}`);
    },
    fetchGifAll: () => {
        return request(`${API_ENDPOINT}/api/gif/all`);
    }
};
