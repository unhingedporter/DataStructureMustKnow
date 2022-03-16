function debounce(callback, delay, immediate = false) {
    let timerId;
    return function (...args) {

        clearTimeout(timerId);

        const shouldCallImmediately = immediate && timerId == null;

        if (shouldCallImmediately) {
            callback.apply(this, args)
        }

        timerId = setTimeout(() => {
            if (!immediate) {
                callback.apply(this, args)
            } else {
                timerId = null;
            }
        }, delay)
    }

}
