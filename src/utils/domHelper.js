import validator from './validator.js';

export default {
    createElement(tagName, callback) {
        const $el = document.createElement(tagName);
        if (validator.isFunction(callback)) {
            callback($el);
        }
        return $el;
    },
    getElement(type, name) {
        switch (type) {
            case 'id':
                return document.getElementById(name);
                break;
            case 'tag':
                return document.getElementsByTagName(name)[0];
            case 'tags':
                return document.getElementsByTagName(name);
            default:
                break;
        }
    }
}
