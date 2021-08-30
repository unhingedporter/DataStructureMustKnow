const promise = new Promise(resolve => {
  setTimeout(() => {
    resolve('Hello from a Promise!');
  }, 2000);
});

promise.then(value => console.log(value));

Output => Promise pending

After 2 minutes ->
  Hello from a promise

Similar implementation of promise:

import { Observable } from 'rxjs';

const observable = new Observable(observer => {
  setTimeout(() => {
    observer.next('Hello from a Observable!');
  }, 2000);
});

observable.subscribe(value => console.log(value));

One of the significant differences between Observables and Promises is Observables support the ability to emit multiple asynchronous values.A Promise once it has resolved its async value it completes and can no longer be used.The one shot use falls short for the use case where we need multiple values over time.Some common use cases of this, web sockets with push notifications, user input changes, repeating intervals, etc.

Our next example is going to show how to create an Observable just like our previous example but instead of using a setTimeout we will use a setInterval to show multiple values.

  import { Observable } from 'rxjs';

const interval = new Observable(observer => {
  let count = 0;
  const interval = setInterval(() => {
    observer.next(count++);
  }, 1000);

  // once we stop listening to values clear the interval
  return () => {
    clearInterval(interval);
  };
});

interval.subscribe(value => console.log(value));

In this example, we have a new Observable with a setInterval.Notice we still call observer.next() to emit our value.With Observables, you can call emit() multiple times yielding multiple values.Multi - value support is the big advantage to Observables over Promises.Now since we can have long - running async tasks in our Observable like a setInterval we need to stop any tasks once we don’t care about receiving any more values.This leads us into unsubscribing from Observables.

With Observables, we can cancel them or unsubscribe from them when we no longer care about the values.To do this let’s look at the following code.






class PromiseSimple {
  constructor(executionFunction) {
    this.promiseChain = [];
    this.handleError = () => { };

    this.onResolve = this.onResolve.bind(this);
    this.onReject = this.onReject.bind(this);

    executionFunction(this.onResolve, this.onReject);
  }

  then(onResolve) {
    this.promiseChain.push(onResolve);

    return this;
  }

  catch(handleError) {
    this.handleError = handleError;

    return this;
  }

  onResolve(value) {
    let storedValue = value;

    try {
      this.promiseChain.forEach((nextFunction) => {
        storedValue = nextFunction(storedValue);
      });
    } catch (error) {
      this.promiseChain = [];

      this.onReject(error);
    }
  }

  onReject(error) {
    this.handleError(error);
  }
}

fakeApiBackend = () => {
  const user = {
    username: 'treyhuffine',
    favoriteNumber: 42,
    profile: 'https://gitconnected.com/treyhuffine'
  };

  // Introduce a randomizer to simulate the
  // the probability of encountering an error
  if (Math.random() > .05) {
    return {
      data: user,
      statusCode: 200,
    };
  } else {
    const error = {
      statusCode: 404,
      message: 'Could not find user',
      error: 'Not Found',
    };

    return error;
  }
};

// Assume this is your AJAX library. Almost all newer
// ones return a Promise Object
const makeApiCall = () => {
  return new PromiseSimple((resolve, reject) => {
    // Use a timeout to simulate the network delay waiting for the response.
    // This is THE reason you use a promise. It waits for the API to respond
    // and after received, it executes code in the `then()` blocks in order.
    // If it executed is immediately, there would be no data.
    setTimeout(() => {
      const apiResponse = fakeApiBackend();

      if (apiResponse.statusCode >= 400) {
        reject(apiResponse);
      } else {
        resolve(apiResponse.data);
      }
    }, 5000);
  });
};

makeApiCall()
  .then((user) => {
    console.log('In the first .then()');

    return user;
  })
  .then((user) => {
    console.log(`User ${user.username}'s favorite number is ${user.favoriteNumber}`);

    return user;
  })
  .then((user) => {
    console.log('The previous .then() told you the favoriteNumber')

    return user.profile;
  })
  .then((profile) => {
    console.log(`The profile URL is ${profile}`);
  })
  .then(() => {
    console.log('This is the last then()');
  })
  .catch((error) => {
    console.log(error.message);
  });


  //------------------------------------------------------------------------------------------------------------

var promise1 = new Promise(function(resolve, reject){

    setTimeout(function(){
        resolve('1')
    }, 500);
});

var promise2 = new Promise(function(resolve, reject){

    setTimeout(function(){
        resolve('2')
    }, 500);
});

var promise3 = new Promise(function(resolve, reject){

    setTimeout(function(){
        resolve('3')
    }, 500);
});

var promise4 = new Promise(function(resolve, reject){

    setTimeout(function(){
        resolve('4')
    }, 3000);
});

var promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('5')
    }, 100);
});

var promiseCollection = [promise1,promise2, promise3, promise4, promise5];

Promise.all(promiseCollection).then(function(response){
    console.log('All')
    console.log(response)
},
function(response){
    console.log('All Reject')
    console.log(response)
});

Promise.allSettled(promiseCollection).then(function(response){
    console.log('All Settled')
    console.log(response)
},function(response){
    console.log('All Settled Reject')
    console.log(response)
});

Promise.race(promiseCollection).then(function(response){
    console.log('race')
    console.log(response)
},function(response){
    console.log('Race reject')
    console.log(response)
});

 
 

var executeSequentially = function(tasks) {
  if (tasks && tasks.length > 0) {
    var task = tasks.shift();

    return task.then(function(output) {
      return executeSequentially(tasks).then(function(outputs) {
        outputs.push(output);
        return Promise.resolve(outputs);  
      });
    });
  }

  return Promise.resolve([]);
};

executeSequentially(promiseCollection)