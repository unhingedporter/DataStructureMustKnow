var Emitter = function () {
    this.events = {};
};

var Subscription = function (event, callback, event_listeners, key) {
    this.event = event;
    this.callback = callback;
    this.event_listeners = event_listeners;
    this.key = key;
};

Subscription.prototype.release = function () {
    var ret = false;
    if (this.event_listeners[this.key]) {
        delete this.event_listeners[this.key];
        ret = true;
    }
    return ret;
};

Emitter.prototype.subscribe = function (event_name, callback) {
    if (!this.events.hasOwnProperty(event_name)) {
        this.events[event_name] = [];
    }
    var subscription = new Subscription(event_name, callback, this.events[event_name], this.events[event_name].length);
    this.events[event_name].push(subscription);
    return subscription;
};

Emitter.prototype.emit = function (event_name, param1, param2) {
    var subs = this.events[event_name];
    return subs.forEach(function (sub) {
        return sub.callback.call(sub, param1, param2);
    });
}