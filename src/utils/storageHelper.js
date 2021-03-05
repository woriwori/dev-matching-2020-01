export default {
    get(key) {
        const value = sessionStorage.getItem(key);
        if (value === 'undefined' || value === 'null') return null;
        else return JSON.parse(value);
    },
    set(key, data) {
        sessionStorage.setItem(key, JSON.stringify(data));
    }
}
