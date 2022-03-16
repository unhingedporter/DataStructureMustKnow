class EventTarget {

    constructor() {
        this.listeners = {};
    }

    addEventListner(name, callback) {
        if (!this.listeners.hasOwnProperty(name)) {
            this.listeners = new Set([callback])
        } else {
            this.listeners[name].add(callback);
        }
    }

    removeEventListener(name, callback) {
        this.listeners[name]?.remove(callback);
    }

    dispatchEvent(name) {
        this.listeners[name]?.forEach(callback) => {
            callback();
        });
    }


}