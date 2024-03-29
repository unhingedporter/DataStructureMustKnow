
What are Observables?

Observables are functions that throw values. Objects called observers subscribe to these values. Observables create a pub-sub system based on the observable design pattern. This makes observables popular with async programming in modern JavaScript frameworks like Angular and libraries like React.

Unlike Promises, observables are not yet inherit to JavaScript. This is why Angular and React rely on the RxJS library for implementing observables. RxJs stands for "Reactive Extension for JavaScript". The RxJS library defines its own Observable class along with supporting methods for Reactive programming.
While you can easily use observables by importing the RxJS library, it's easier to understand how observables work by implementing your own Observable class:

class Observable {
    constructor(functionThatTakesObserver){
      this._functionThatTakesObserver = functionThatTakesObserver;
    }

    subscribe(observer) {
      return this._functionThatTakesObserver(observer)
    }
}

let myObservable = new Observable(observer => {
  setTimeout(() => {
    observer.next("got data!")
    observer.complete()
  }, 1000)
})

let myObserver = {
  next(data) {
    console.log(data)
  },
  error(e) {
    console.log(e)
  },
  complete() {
    console.log("request complete")
  }
}

myObservable.subscribe(myObserver)
// (1 second) got data!
// (1 second) request complete

This is a basic example of how an Observable works and is largely based off Netanel Basal's JavaScript - Observables Under The Hood.

Notice how we first define an Observable class. The class takes a single constructor argument functionThatTakesObserver:

class Observable {
    constructor(functionThatTakesObserver){
      this._functionThatTakesObserver = functionThatTakesObserver;
    }
}

Within our class definition, we also define a subscribe() method. Notice how this method simply takes an observer as an argument and passes it to our constructor function functionThatTakesObserver:

subscribe(observer) {
  return this._functionThatTakesObserver(observer)
}

After defining our Observable class, we instantiate a new instance of Observable and assign it to myObservable. Notice how we pass in a function that takes an observer object as a parameter.

let myObservable = new Observable(observer => {
  setTimeout(() => {
    observer.next("got data!")
    observer.complete()
  }, 1000)
})

In this example, we've used setTimeout() to mimic an async HTTP request. After the operation completes, we call the next() and complete() methods on the observer we passed in.

We then define an observer object myObserver which implements the three callback methods, or notification types, an observable can send:

let myObserver = {
  next(data) {
    console.log(data)
  },
  error(e) {
    console.log(e)
  },
  complete() {
    console.log("request complete")
  }
}

Note that next() is the only required method for RxJS.

Once we've defined the observer object myObserver, we execute the observable by calling it's subscribe() method:

myObservable.subscribe(myObserver)
// (1 second) got data!
// (1 second) request complete

By calling subscribe() on myObservable, we fire the constructor function passed to the observable instance and register the callbacks as defined in our observer myObserver.

That's it! This represents the basics of implementing the observer design pattern in JavaScript and demonstrates how to gracefully handle async activity using observables. Continue reading for an even deeper dive into using observables in modern JavaScript programming.
Observables: A deeper dive...
What are Observables?

Observables represent a progressive way of handling events, async activity, and multiple values in JavaScript. Observables are really just functions that throw values. Objects called observers define callback functions for next(), error(), and complete(). These observer objects are then passed as arguments to the observable function. The observable function calls the observer methods based on a certain behavior (AJAX HTTP request, event, etc). This allows the observer to "listen" for state changes emitted by the observable function.
Why Observables?

Observables have surfaced through an evolution of handling async activity in JavaScript. While the Promise API has largely replaced the world of nested callbacks, observables demonstrate the next step forward in gracefully handling async activity and real-time events. In her article An Introduction to Observables for Angular Developers, Jen Looper does a great job explaining this evolution and the progressive need for the observable design pattern in JavaScript.
Reactive Programming

Observables implement reactive programming principles. Reactive programming is a programming paradigm involving async data streams and the propagation of change.

Observables represent these streams of data. Observers represent the registered callbacks used for listening or "subscribing" to changes in these streams.

Javascript Observables vs Promises

Those more experienced with Promises may ask "Why Observables?". After all, Promises are designed around handling async activity in a graceful way.

Everything you can do with a Promise you can do with an Observable. Everything you can do with an Observable you can't necessarily do with a Promise. Here are some of the key differences between Observables and Promises in JavaScript:

Eager vs Lazy

A promise will execute at the moment it's defined. When a promise has been initialized, it represents a process that has already started happening.

An observable defines a function that's executed only when subscribe() is called. You have to call subscribe() on an observable before the code will actually execute. This saves resources as observables only execute when they are subscribed to.

Cancel vs no cancel

While some Promise libraries implement cancel functionality, the inherit JavaScript Promise is not cancellable. Just like you can subscribe to an observer, you can also unsubscribe.
Always Async vs Sometimes Async

A promise always resolves or rejects itself based on some async activity. While observables are often used with async activity (such as the Angular HTTP request client), observables can also be used for sync activities as well. For example, you can use an observable to iterate through the elements in an array.

Multicast vs Unicast

Promises are multicast. This means any reference to the promise will receive the same resolved value. Observables are unicast by default. For every observer that subscribes to an observable, a separate instance of the observable function is executed.

Things can be done to make observables multicast. The RxJs library implements a share() method for sharing the same observable instance across all subscribers. Remember that observables are unicast by nature.

Push vs Pull

A promise either resolves or rejects. It can't emit multiple values. An observable can call next() multiple times.

Because of this, observables create a pub-sub relationship where the observable "pushes" updated values to its subscribers.

Conclusion:

Observables are functions that throw values. Observers subscribe to these functions and register callbacks to listen for updates. This results in lazy execution of async data streams popularized by Reactive programming.

While observables aren't yet inherit to JavaScript, the RxJS library implements them in popular frameworks like Angular and libraries like React.


When the data is produced by the Observable itself, we call it a cold Observable. When the data is produced outside the Observable, we call it a hot Observable.

Cold Observables

So, we call an Observable “cold” when the data is produced inside the Observable. As you might have read in my previous article, Observables are lazy. Observables are lazy in the sense that they only execute values when something subscribes to it. For each subscriber the Observable starts a new execution, resulting in the fact that the data is not shared. If your Observable produces a lot of different values it can happen that two Observables that subscribe at more or less the same receive two different values. We call this behaviour “unicasting”. To demonstrate this:

import * as Rx from "rxjs";

const observable = Rx.Observable.create((observer) => {
    observer.next(Math.random());
});

// subscription 1
observable.subscribe((data) => {
  console.log(data); // 0.24957144215097515 (random number)
});

// subscription 2
observable.subscribe((data) => {
   console.log(data); // 0.004617340049055896 (random number)
});

As you see the data is produced inside the Observable, making it cold. We have two subscriptions which subscribe more or less at the same time. Since the Observable does a new execution for every subscriber and the Observable generates a random number, the data the subscriber receives is different. This is not a bad thing, you just have to be aware of this behaviour.

Of course this behaviour is not always desirable. Luckily it’s easy to change this behaviour:


Turning it into Hot Observable:

import * as Rx from "rxjs";

const random = Math.random()

const observable = Rx.Observable.create((observer) => {
    observer.next(random);
});

// subscription 1
observable.subscribe((data) => {
  console.log(data); // 0.11208711666917925 (random number)
});

// subscription 2
observable.subscribe((data) => {
   console.log(data); // 0.11208711666917925 (random number)
});

Woah, that was easy! All we did was moving the data producer out of the Observable. We still have two subscribers and the Observable will still execute two times, but since the data is produced outside the Observable our subscriptions will receive the same data.

I hope this rings a bell, because we just turned our cold Observable into a hot Observable.

Hot Observables

Yes, it is that easy. An Observable is cold when data is produced inside the Observable and the Observable is hot when the data is produced outside the Observable. As we just saw the hot Observable is able to share data between multiple subscribers. We call this behaviour “multicasting”.

Generating a random number is not a good real life usecase. A good usecase would be DOM events. Let’s say we’re tracking clicking behaviour and have multiple subscribers do something with the coordinates

import * as Rx from "rxjs";

const observable = Rx.Observable.fromEvent(document, 'click');

// subscription 1
observable.subscribe((event) => {
  console.log(event.clientX); // x position of click
});

// subscription 2
observable.subscribe((event) => {
   console.log(event.clientY); // y position of click
});

The data is produced outside of the Observable itself. Which makes it hot, because the data is being created regardless of if there is a subscriber or not. If there is no subscriber when the data is being produced, the data is simply lost.
Is one better than the other?

Well, that depends on the usecase. A cold Observable is usually fine, unless:

    You want to make sure multiple subscribers get the same data.
    Your creating a new instance of something on each Observable execution, let’s say a websocket connection. You don’t want to create a new connection for each subscriber, but instead just share it to all the subscribers. Moving the instantiation of the connection outside the Observable will make it hot and fixes this.

Conclusion

I hope this article helps you understand better how Observables work and what the implications are of producing data inside (cold) or outside (hot) your Observable. If you want to dive deeper into rxjs i recommend you to read one of my other articles about Subjects or BehaviorSubjects, ReplaySubjects and AsyncSubjects.

Credits: https://luukgruijs.medium.com/understanding-hot-vs-cold-observables-62d04cf92e03