/*
<body>
    <div id="rootA">
        <div>
            <div></div>
        </div>

        <div></div>


        <div>
            <div>
                <div id="nodeA"></div>
                <div></div>
            </div>
        </div>
    </div>

    <div id="rootB">
        <div>
            <div></div>
        </div>

        <div></div>

        <div>
            <div>
                <div id="nodeB"></div>
                <div></div>
            </div>
        </div>
    </div>
</body>
</html >

*/



var node = document.getElementById('nodeA');

var parentNode = node.parentElement;
var rootA = document.getElementById('rootA')
var elemATraversal = [];
var child = node;
while (parentNode != rootA || !parentNode) {

    var children = Array.from(parentNode.children);
    elemATraversal.push(children.indexOf(child))
    child = parentNode;
    parentNode = parentNode.parentElement;
}

var rootBNode = document.getElementById('rootB');
var searchedNode;
while (elemATraversal.length) {

    var nextElemIndex = elemATraversal.shift();
    searchedNode = rootBNode.children(nextElemIndex);

}





function Emitter() {
    this.emitter = {};
}
var subscription = function(eventName, callback, eventlisteners, key) {
    this.event = eventName;
    this.callback = callback;
    this.eventlisteners = eventlisteners;
    this.key = key;
}

Emitter.prototype.subscribe(eventName, callback) {

    if (!this.emitter[eventName]) {
        this.emitter[eventName] = [];
    }
    this.subscription(eventName, callback, this.emitter, this.emitter[eventName], this.emitter[eventName].length);
    this.emitter.push(subscription);
    return subscription;
}

Emitter.prototype.emit(eventName, ...args) {

    if (this.emitter[eventName]) {

        this.emitter[eventName].forEach(function(value) {
            this.emitter[eventName].callback.apply(this, args);
        });
    }
    return false;

}

Emitter.prototype.release(eventName) {

}

var obj = new Emitter();
obj.subscribe('event_name', function() {})

var sayHello = function(msg) {
    console.log(msg);
}

const amy = {
    name: 'Saraswati',
    speak: debounce(sayHello, 2000),
}

for (var i = 0; i < 10; i++) {
    amy.speak('some random garbled text' + i);
}

var debounce = function(func, wait) {
    let timeout;
    return function(msg) {
        var context = this;
        clearInterval(timeout);
        timeout = setTimeout(function() {
            func.call(context, msg);
        }, wait);
    }
}