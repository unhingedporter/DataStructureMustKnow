/*Debouncing makes it so a function can only be executed after a certain amount of time since it was last invoked. For example, “only execute this function if it has been 1000 milliseconds since it was last invoked.”

A common use case for debouncing is in search bars. We don’t want to make expensive http requests while the user is still typing their query, so we debounce the requesting function and only invoke it once the user has stopped typing.

*/


function debounce(func, wait) {
  let timeout
  return function(...args) {
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(context, [args]), wait)
  }
}

function sayHello() {
  console.log('My name is', this.name + new Date().getMilliseconds())
}

const amy = {
  name: 'Saraswati',
  speak: debounce(sayHello),
}

console.log(new Date().getMilliseconds());
amy.speak()
console.log(new Date().getMilliseconds());

amy.speak()
console.log(new Date().getMilliseconds());
amy.speak()
console.log(new Date().getMilliseconds());
amy.speak()
console.log(new Date().getMilliseconds());
amy.speak()
console.log(new Date().getMilliseconds());
amy.speak()

 

// 'My name is Saraswati'

// Refer https://medium.com/@griffinmichl/implementing-debounce-in-javascript-eab51a12311e



To throttle a function means to ensure that the function is called at most once in a specified time period (for instance, once every 10 seconds). This means throttling will prevent a function from running if it has run “recently”. Throttling also ensures a function is run regularly at a fixed rate.

Conversely, a debounced function will ignore all calls to it until the calls have stopped for a specified time period. Only then will it call the original function. For instance, if we specify the time as two seconds, and the debounced function is called 10 times with an interval of one second between each call, the function will not call the original function until two seconds after the last (tenth) call.

* Analogy using a real-world scenario:

  - Suppose you’re working at your PC and also chatting with your friend Bill on a chat app (such as Telegram), who's telling you a story in bits and pieces (heh). You get push notifications every minute or so. Normally, you’d read every message as it comes in. But you're busy, so you can’t afford to switch context that often. What can you do?


    - Throttling: Ignore your notifications, and decide that you’ll check your messages only once every five minutes.
    
    - Debouncing: Ignore your notifications. When no new notifications have come in for the last five minutes, assume Bill is done with his story and then check your messages.


Throttling code example 


// Need to pass context 

<pre>
function throttle(func, throttleWait) {
  return function (...args) {
    let context = this;
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall === undefined // function is being called for the first time
        || (this.lastCall - previousCall) > throttleWait) { // throttle time has elapsed
      func.apply(context,args);
    }
  }
}

let logger = (args) => console.log(`My args are ${args}`);
// throttle: call the logger at most once every two seconds
let throttledLogger = throttle(logger, 2000); 

throttledLogger([1, 2, 3]);
throttledLogger([1, 2, 3]);
throttledLogger([1, 2, 3]);
throttledLogger([1, 2, 3]);
throttledLogger([1, 2, 3]);
</pre>

// "My args are 1, 2, 3" - logged only once
