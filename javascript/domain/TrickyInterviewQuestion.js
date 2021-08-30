//-----------------------------------------------------------------------------------------
var sum = function (num1) {
    return function (num2) {
        return function (num3) {
            return num1 + num2 + num3;
        }
    }
}

sum(3)(4)(5)
//-----------------------------------------------------------------------------------------
How would you implement integer division if your language  did not offer it.
Integer division:
var num = 49 / 5
parseInt(num)
9
parseInt(num + 0.5)
10
49 % 5
4
    (49 - 4) / 5

//-----------------------------------------------------------------------------------------
How would you make this markup more accessible for a visually impaired person ?
    semantics - the branch of linguistics and logic concerned with meaning.

//-----------------------------------------------------------------------------------------
Tell me about the factors that determine which technologies you'll use on a project.
//-----------------------------------------------------------------------------------------
My algorithm questions were presented as DOM traversals.Using CS concepts here is the key.Casually refer to an array as a stack or queue depending on how you're using it, mention why you're using breadth first instead of depth, etc.

    //-----------------------------------------------------------------------------------------

    // alternative to AJAX etc


    //-----------------------------------------------------------------------------------------
    //    Given a JSON object, build a page of items from that JSON that meets specific design parameters (4 items per row, the color of title, border, margins, padding all according to spec).
    //    Describe the box model. Create a drop down menu using jQuery.
    //    What does an HTTP request look like?
    //    When it is a good time not use "use strict" in JavaScript
    //    Implement a function that takes in a list of asynchronous functions and executes the async functions in series. One at a time.


    //-----------------------------------------------------------------------------------------


    access - control - allow - origin:  *


        //-----------------------------------------------------------------------------------------
        polyfill, event - delegation, async - defer, how http look like
polyfill
event population
async



//-----------------------------------------------------------------------------------------

var x = {
    y: 10
};
console.log(x.hasOwnProperty("y")); //true
console.log(x.hasOwnProperty("z")); //false

However, it does not look at the prototype chain of the object.

//-----------------------------------------------------------------------------------------

/*

JavaScript is always synchronous and single - threaded.If you're executing a JavaScript block of code on a page then no other JavaScript on that page will currently be executed.

JavaScript is only asynchronous in the sense that it can make, for example, Ajax calls.The Ajax call will stop executing and other code will be able to execute until the call returns(successfully or otherwise), at which point the callback will run synchronously.No other code will be running at this point.It won't interrupt any other code that's currently running.

JavaScript timers operate with this same kind of callback.

Describing JavaScript as asynchronous is perhaps misleading.It's more accurate to say that JavaScript is synchronous and single-threaded with various callback mechanisms.

jQuery has an option on Ajax calls to make them synchronously(with the async: false option).Beginners might be tempted to use this incorrectly because it allows a more traditional programming model that one might be more used to.The reason it's problematic is that this option will block all JavaScript on the page until it finishes, including all event handlers and timers.

*/

//-----------------------------------------------------------------------------------------

var Y = 1;
if (function F() { }) {
    y += Typeof F;</span >
}
console.log(y);

The output would be 1undefined.The if condition statement evaluates using eval, so eval(function f() { }) returns function f() { } (which is true).Therefore, inside the if statement, executing typeof f returns undefined because the if statement code executes at run time, and the statement inside the if condition is evaluated during run time.

//-----------------------------------------------------------------------------------------

What is the difference between Call & Apply ?

    The call() method calls a function with a given this value and arguments provided individually.

        Syntax -

        fun.call(thisArg[, arg1[, arg2[, ...]]])

The apply() method calls a function with a given this value, and arguments provided as an array.

    Syntax -

    fun.apply(thisArg, [argsArray])

//-----------------------------------------------------------------------------------------

//Will the output be same for the following functions ?

function foo1() {
    return {
        bar: "hello"
    };
};

function foo2() {
    return
    {
        bar: "hello"
    };
}

// No, the output would be different

//-----------------------------------------------------------------------------------------

(function () {
    var p = new Promise((resolve, reject) => {
        resolve(5)
    })
    console.log(1);
    setTimeout(function () { console.log(2) }, 1000);
    p.then((response) => {
        console.log(response)
    });
    setTimeout(function () { console.log(3) }, 0);
    console.log(4);
})();

//1,4,5,3,2




//-----------------------------------------------------------------------------------------

/*

Refer https://stackoverflow.com/questions/38752620/promise-vs-settimeout

I've observed that in the following code:

setTimeout(function(){console.log('setTimeout')});
Promise.resolve(1).then(function(){console.log('promise resolve')})

No matter how many times I execute this, the promise callback always logs before the setTimeout.

My understanding is that both callbacks are scheduled to be executed to the next tick, and I don't really understand what is going on that makes the promise always take precendence over the timeout.

*/

//Short answer Promises have better priority than setTimeout callback function in event loop stack
//Promise.resolve schedules a microtask and the setTimeout schedules a macrotask. And the microtasks are executed before running the next macrotask.

console.log('script start');

setTimeout(function () {
    console.log('setTimeout');
}, 0);

Promise.resolve().then(function () {
    console.log('promise1');
}).then(function () {
    console.log('promise2');
});

console.log('script end');
/*
script start
script end
promise1
promise2
setTimeout
*/

// Microtasks are usually scheduled for things that should happen straight after the currently executing script, such as reacting to a batch of actions, or to make something async without taking the penalty of a whole new task.The microtask queue is processed after callbacks as long as no other JavaScript is mid - execution, and at the end of each task.Any additional microtasks queued during microtasks are added to the end of the queue and also processed.Microtasks include mutation observer callbacks, and as in the above example, promise callbacks.

// Once a promise settles, or if it has already settled, it queues a microtask for its reactionary callbacks.This ensures promise callbacks are async even if the promise has already settled.So calling.then(yey, nay) against a settled promise immediately queues a microtask.This is why promise1 and promise2 are logged after script end, as the currently running script must finish before microtasks are handled.promise1 and promise2 are logged before setTimeout, as microtasks always happen before the next task.




//-----------------------------------------------------------------------------------------
// The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?

var list = readHugeList();

var nextListItem = function () {
    var item = list.pop();

    if (item) {
        // process the list item...
        nextListItem();
    }
};

// The potential stack overflow can be avoided by modifying the nextListItem function as follows:

var list = readHugeList();

var nextListItem = function () {
    var item = list.pop();

    if (item) {
        // process the list item...
        setTimeout(nextListItem, 0);
    }
};

// The stack overflow is eliminated because the event loop handles the recursion, not the call stack. When nextListItem runs, if item is not null, the timeout function (nextListItem) is pushed to the event queue and the function exits, thereby leaving the call stack clear. When the event queue runs its timed-out event, the next item is processed and a timer is set to again invoke nextListItem. Accordingly, the method is processed from start to finish without a direct recursive call, so the call stack remains clear, regardless of the number of iterations.
// question badge


//-----------------------------------------------------------------------------------------


// What if you want to create your worker script on the fly, or create a self-contained page without having to create separate worker files? With Blob(), you can "inline" your worker in the same HTML file as your main logic by creating a URL handle to the worker code as a string

// http://www.html5rocks.com/en/tutorials/workers/basics/#toc-inlineworkers

// Full example of BLOB inline worker:

< !DOCTYPE html >
    <script id="worker1" type="javascript/worker">
  // This script won't be parsed by JS engines because its type is javascript/worker.
        self.onmessage = function(e) {
            self.postMessage('msg from worker');
  };
  // Rest of your worker code goes here.
</script>
    <script>
        var blob = new Blob([
        document.querySelector('#worker1').textContent
  ], {type: "text/javascript" })

  // Note: window.webkitURL.createObjectURL() in Chrome 10+.
  var worker = new Worker(window.URL.createObjectURL(blob));
  worker.onmessage = function(e) {
            console.log("Received: " + e.data);
  }
  worker.postMessage("hello"); // Start the worker.
</script>

// Need more info about web worker

// Better approach

var newWorker = function (funcObj) {
    // Build a worker from an anonymous function body
    var blobURL = URL.createObjectURL(new Blob(['(',

        funcObj.toString(),

        ')()'], {
        type: 'application/javascript'
    })),

        worker = new Worker(blobURL);

    // Won't be needing this anymore
    URL.revokeObjectURL(blobURL);

    return worker;
}

var w = newWorker(function () {
    var i = 0;

    function timedCount() {
        i = i + 1;
        postMessage(i);
        setTimeout(timedCount, 500);
    }

    timedCount();
});

w.onmessage = function (event) {
    document.getElementById("result").innerHTML = event.data;
};

And here's a working example http://jsfiddle.net/ubershmekel/YYzvr/

WebWorkers don't have access to below javascript objects since they are defined in an external files

Window object
Document object
Parent object

//-----------------------------------------------------------------------------------------

Indexed db
server - sent events

//-----------------------------------------------------------------------------------------

Iframe

//-----------------------------------------------------------------------------------------

Multi tab communication



//-----------------------------------------------------------------------------------------
Why do we need callbacks ?

    The callbacks are needed because javascript is a event driven language.That means instead of waiting for a response javascript will keep executing while listening for other events.Let's take an example with first function invoking an API call(simulated by setTimeout) and next function which logs the message.


//-----------------------------------------------------------------------------------------

Callback Hell is an anti - pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic.The callback hell looks like below,

    async1(function () {
        async2(function () {
            async3(function () {
                async4(function () {
                ....
            });
        });
    });
});

//-----------------------------------------------------------------------------------------

server - sent events ?

    Server - sent events(SSE) is a server push technology enabling a browser to receive automatic updates from a server via HTTP connection without resorting to polling.These are a one way communications channel - events flow from server to client only.

        server - sent event notifications ?

            The EventSource object is used to receive server - sent event notifications.For example, you can receive messages from server as below,

if (typeof (EventSource) !== "undefined") {
    var source = new EventSource("sse_generator.js");
    source.onmessage = function (event) {
        document.getElementById("output").innerHTML += event.data + "<br>";
    };
}

Below are the list of events available for server sent events
Event 	    Description
onopen 	    It is used when a connection to the server is opened
onmessage 	This event is used when a message is received
onerror 	It happens when an error occurs

//-----------------------------------------------------------------------------------------
purpose of race method in promise ?

    Promise.race() method will return the promise instance which is firstly resolved or rejected.Let's take an example of race() method where promise2 is resolved first

var promise1 = new Promise(function (resolve, reject) {
    console.log(resolve, typeof (resolve))
    setTimeout(resolve, 500, 'one');
});
var promise2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then(function (value) {
    console.log(value); // "two" // Both promises will resolve, but promise2 is faster
});

//-----------------------------------------------------------------------------------------
purpose of delete operator ?

    The delete keyword is used to delete the property as well as its value.

var user = { name: "John", age: 20 };
delete user.age;

console.log(user); // {name: "John"}


//-----------------------------------------------------------------------------------------


The window.navigator object contains information about the visitor's browser os details. Some of the OS properties are avaialble under platform property,
//-----------------------------------------------------------------------------------------
What is the difference between native, host and user objects ?

    Native objects are objects that are part of the JavaScript language defined by the ECMAScript specification.For example, String, Math, RegExp, Object, Function etc core objects defined in the ECMAScript spec.Host objects are objects provided by the browser or runtime environment(Node).For example, window, XmlHttpRequest, DOM nodes etc considered as host objects.User objects are objects defined in the javascript code.For example, User object created for profile information.

//-----------------------------------------------------------------------------------------
What is same - origin policy ?

    The same - origin policy is a policy that prevents JavaScript from making requests across domain boundaries.An origin is defined as a combination of URI scheme, hostname, and port number.If you enable this policy then it prevents a malicious script on one page from obtaining access to sensitive data on another web page using Document Object Model(DOM)
//-----------------------------------------------------------------------------------------
What is the purpose of void 0 ?

    Void(0) is used to prevent the page from refreshing.This will be helpful to eliminate the unwanted side - effect, because it will return the undefined primitive value.It is commonly used for HTML document that uses href = "JavaScript:Void(0);" within an element.i.e, when you click a link, the browser loads a new page or refreshes the same page.But this behavior will be prevented using this expression.For example, the below link notify the message without reloading the page

        < a href = "JavaScript:void(0);" onclick = "alert('Well done!')" > Click Me!</a >
            // -------------------------------------------------------------------------------------------------------------------


            What is the shortcut to get timestamp ?

                You can use new Date().getTime() to get the current timestamp.There is an alternative shortcut to get the value.

                    console.log(+new Date());
console.log(Date.now());

//-----------------------------------------------------------------------------------------
JS related questions, specifically around prototypal inheritance and then just kept expanding on the same problem
//-----------------------------------------------------------------------------------------
what is 'this', what is closure, var vs const vs let, DOM tree
//-----------------------------------------------------------------------------------------
Basic graph algo & DS style whiteboarding question
//-----------------------------------------------------------------------------------------
Basic JS questions about closure, map funciton, forEach function, apply function, call function, DOM tree, difference between array and object.
//-----------------------------------------------------------------------------------------
Flatten Array, Create Emitter

//-----------------------------------------------------------------------------------------
Signed NDA.
//-----------------------------------------------------------------------------------------
Explain the concept of ES6 Promises to a 5 - year - old.
//-----------------------------------------------------------------------------------------
What are the advantages of using ES6 maps over objects ? What about using ES6 sets over arrays ?
    //-----------------------------------------------------------------------------------------
    This interview ended up being my favorite as we got to touch on many topics in front end development which gave me a chance to demonstrate my experience.The third interview was with an engineering manager.The first half was behavorial where I was asked about my background, motivation, and previous experience.The second half was a technical question about CSS.

A couple days later my recruiter contacted me and said that I would be having a final 45 technical interview over the phone.I was asked a leetcode style question and after completing it was asked to optimize a snippet of code.A few days later my recruiter called and told me I had an offer.
    //-----------------------------------------------------------------------------------------

    // could be potentially more than 3 keys in the object above
    items = [
        { color: 'red', type: 'tv', age: 18 },
        { color: 'silver', type: 'phone', age: 20 }
    ...
    ]

excludes = [
    { k: 'color', v: 'silver' },
    { k: 'type', v: 'tv' },
    ....
    ]
function excludeItems(items, excludes) {
    excludes.forEach(pair => {
        items = items.filter(item => item[pair.k] === item[pair.v]);
    });
    return items;
}

1. Describe what this function is doing...
2. What is wrong with that function ?
3. How would you optimize it ?
    //-----------------------------------------------------------------------------------------
    Given 2 identical DOM trees(but not equal) and one element of the first DOM tree, how would you find this element in the second DOM tree ?
        //-----------------------------------------------------------------------------------------
        iterative and recursive patterns, complexity(big O notation) and data structures.
            Given 2 identical DOM trees(but not equal) and one element of the first DOM tree, how would you find this element in the second DOM tree ?
                Write an array flatten function.
Write an emitter class:
/*
emitter = new Emitter();

// 1. Support subscribing to events.
sub = emitter.subscribe('event_name', callback);
sub2 = emitter.subscribe('event_name', callback2);

// 2. Support emitting events.
// This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters.
emitter.emit('event_name', foo, bar);

// 3. Support unsubscribing existing subscriptions by releasing them.
sub.release(); // `sub` is the reference returned by `subscribe` above
//-----------------------------------------------------------------------------------------
Can you write a function that deeply flattens an array?
//-----------------------------------------------------------------------------------------
I was asked basic Javascript concepts for the phone interview. For the video call I was asked to flatten an array recursively and iteratively in Javascript as well as to do some HTML and CSS design given a picture by the interviewer.
//-----------------------------------------------------------------------------------------
Given two identical DOM tree structures, A and B, and a node from A, find the corresponding node in B.
//-----------------------------------------------------------------------------------------
No Offer
Positive Experience
Average Interview

Application

I applied through a recruiter. The process took a week. I interviewed at Facebook in April 2016.

Interview

Initial HR screen which included some basic front end questions: .call vs .apply,

Followup with a phone call + online coding screening with questions bellow. 40 minutes long followed by 20 minutes of questions. Interviewer was very enthusiastic and very welcoming, didn't feel any kind of negativity. Flopped on the easy questions so knew that I wasn't getting the on-site invite but interviewer was still very happy to answer company related questions and go into detail.
Continue Reading

Interview Questions

    Given a picture, how would you hide/show a child picture on hovering on this parent?
    4 Answers
    How would you ensure clicking on this picture would go to a specific link?
    8 Answers
    How would you ensure the child is positioned in the top right of the parent picture?
    1 Answer
    Given an array, return it's flattened structure(skip objects)
    10 Answers
//-----------------------------------------------------------------------------------------
Interviews were easier than expected...pretty much basic algorithm questions in JS with some HTML/CSS mixed in
//-----------------------------------------------------------------------------------------
The most difficult question was the initial puzzle, which is a sizeable project. The phone interview was mainly focused on Javascript DOM tree manipulation. On-site questions included a few quick algorithms questions (flatten an array), design/code a poll widget. All of the questions were heavy on JS, which is expected for this position.
//-----------------------------------------------------------------------------------------
Given a node from a DOM tree find the node in the same position from an identical DOM tree.
//-----------------------------------------------------------------------------------------
Given an input array and another array that describes a new index for each element, mutate the input array so that each element ends up in their new index. Discuss the runtime of the algorithm and how you can be sure there won't be any infinite loops.
//-----------------------------------------------------------------------------------------
     It was a tree traversal question. Given a tree with specific nodes to visit, traverse another tree with the same structure and visit the nodes in same positions.
//-----------------------------------------------------------------------------------------
The interview process was similar to the all that were mentioned here. The basic JS questions and algo + data structures. Just study javascript and try to find solve various questions following by optimization.

Interview Questions

    NDA

//-----------------------------------------------------------------------------------------
Interview Questions

    You are given an array of N elements in the form "property1: value1; property2: value2;...;propertyX: valueX;" for some some N and any X. There is also another array of M elements of the form "property: value". You are supposed to write an algorithm to remove every element in the N length array that has a "property: value" pair in the M length array.

    The trick is that the most intuitive solution…

//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

Explain the concept of ES6 Promises to a 5-year-old.
What are the advantages of using ES6 maps over objects? What about using ES6 sets over arrays?
//-----------------------------------------------------------------------------------------
phone interview questions were same as mentioned many times here: flatten array, optimize a function, implement a simple Observable.

//-----------------------------------------------------------------------------------------
Flatten Array, Create Emitter
//-----------------------------------------------------------------------------------------
 Basic JS questions about closure, map funciton, forEach function, apply function, call function, DOM tree, difference between array and object.

//-----------------------------------------------------------------------------------------

The Number.EPSILON property represents the difference between 1 and the smallest floating point number greater than 1.

You do not have to create a Number object to access this static property (use Number.EPSILON).

Polyfill

if (Number.EPSILON === undefined) {
    Number.EPSILON = Math.pow(2, -52);
}

Refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON
Examples
Testing equality

x = 0.2;
y = 0.3;
z = 0.1;
equal = (Math.abs(x - y + z) < Number.EPSILON);


Note: Never use Number.EPSILON for exact equal comparison by difference. I hope you got me.
//-----------------------------------------------------------------------------------------
In JavaScript, it is nothing but a single global object which will contain all our functions, methods, variables and all that. Here ‘MYAPPLICATION‘ is acted as a JavaScript namespace and the only global object which contains all other items.
Hide   Copy Code

var MYAPPLICATION = {
    calculateTax: function (item) {
        return item * 1.40;
    },
    product: function (cost) {
        this.cost = cost;
        this.getCost = function(){
                          return this.cost;
                       };
    },
    doTaxCalculations: function () {
        var p = new MYAPPLICATION.product(100);
        alert(this.calculateTax(p.getCost()));
    }
}

Nested JavaScript Namespace

It is nothing but a namespace inside a namespace, which provides better modularization for complex JavaScript application.
Hide   Copy Code

var MYNESTEDAPPLICATION = {

    MODEL: {
        product: function (price) {
			         this.price = price;
			        this.getCost = function(){
			             return this.price;
			         };
			     }
    },
    LOGIC: {
        calculateTax: function (item) {
            return item * 1.40;
        },
        doCalculations: function () {
            var p = new MYNESTEDAPPLICATION.MODEL.product(100);
            alert(this.calculateTax(p.getCost()));
        }
    }
}

Using Module

MYAPP.MODEL.PRODUCTS.product = function(cost) {

    //cost is the private variable
    var cost = cost;
    return {
        isTaxable: true,
        getCost: function(){
            return cost;
        }
    };
};

Do your naming convention in such a manner that it will be self explanatory and
not conflict other Library. May be I am not that good at those.
//-----------------------------------------------------------------------------------------
Named Function Expression

Another special case is the assignment of named functions.

var foo = function bar() {
    bar(); // Works
}
bar(); // ReferenceError

Here, bar is not available in the outer scope, since the function only gets assigned to foo; however, inside of bar, it is available. This is due to how name resolution in JavaScript works, the name of the function is always made available in the local scope of the function itself.


//-----------------------------------------------------------------------------------------

The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.

console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]
var a = [1,2,3,4];
var b =Array.from(a);
delete b[0]
console.log(a)
// Array [1, 2, 3, 4]
var c = a;
delete c[0]
console.log(c)
// Array [undefined, 2, 3, 4]
console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

https://gist.github.com/victorouse/56e05553db54cbb73fff62c36a2b4545

//-----------------------------------------------------------------------------------------
