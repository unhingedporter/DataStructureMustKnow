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
semantics -the branch of linguistics and logic concerned with meaning.

//-----------------------------------------------------------------------------------------
Tell me about the factors that determine which technologies you'll use on a project.
//-----------------------------------------------------------------------------------------
My algorithm questions were presented as DOM traversals. Using CS concepts here is the key. Casually refer to an array as a stack or queue depending on how you're using it, mention why you're using breadth first instead of depth, etc.

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


JavaScript is always synchronous and single-threaded. If you're executing a JavaScript block of code on a page then no other JavaScript on that page will currently be executed.

JavaScript is only asynchronous in the sense that it can make, for example, Ajax calls. The Ajax call will stop executing and other code will be able to execute until the call returns (successfully or otherwise), at which point the callback will run synchronously. No other code will be running at this point. It won't interrupt any other code that's currently running.

JavaScript timers operate with this same kind of callback.

Describing JavaScript as asynchronous is perhaps misleading. It's more accurate to say that JavaScript is synchronous and single-threaded with various callback mechanisms.

jQuery has an option on Ajax calls to make them synchronously (with the async: false option). Beginners might be tempted to use this incorrectly because it allows a more traditional programming model that one might be more used to. The reason it's problematic is that this option will block all JavaScript on the page until it finishes, including all event handlers and timers.



//-----------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------
