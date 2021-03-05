import domHelper from './domHelper.js';

const $loader = domHelper.getElement('id', 'loader');

export default {
    start() {
        $loader.classList.remove('hide');
    },
    stop() {
        $loader.classList.add('hide');
    }
}
