
// // // // var a = [1,8,30,-5,20,7];

// // // // //window size k
// // // // var windowSum=0;
// // // // var maximumSum= 0;
// // // // // calculate initial 

// // // // for(var iterator=0; iterator<k; iterator++){

// // // //     windowSum += a[iterator];
// // // // }

// // // // maximumSum = windowSum;

// // // // for(var iterator = k; iterator< a.length; iterator++){

// // // //     windowSum -= a[iterator-k];
// // // //     windowSum += a[iterator];

// // // //     if(windowSum > maximumSum){
// // // //         maximumSum = windowSum;
// // // //     }
// // // // }

// // // // return windowSum;


// // // // var a = 1;

// // // // var b = function(){

// // // //     console.log(`a ${a}` );
// // // //     var a = 5;
// // // //     console.log(`a ${a}` );

// // // // }
// // // // b();

// // // // console.log(`a ${a}` );


// // // var obj1 = {
// // //     p: 'aadsads',
// // //     q: false,
// // //     ob1: {
// // //         p1: 'aadsads',
// // //         q2: false,
// // //         k3: [
// // //             {
// // //                 p4: 'aadsads',
// // //                 q4: false
// // //             },
// // //             {
// // //                 p5: 'aadsads',
// // //                 q5: true,
// // //                 q6: true,
// // //                 // q6: [1,2,3,4,5,6,7,8,9]
// // //             }
// // //         ]
// // //     }
// // // };

// // // // let matchExists = (obj, type) =>{ return typeof(obj) === type};

// // // // let count = 0;
// // // // let frequencyCounterArr =[];
// // // // let frequencyCounter = function(obj, type){

// // // //     if(Array.isArray(obj)){

// // // //         for(var index=0; index<=obj.length; index++){
// // // //             let currentElem = obj[index];

// // // //             if(matchExists(currentElem, 'object')){
// // // //                   frequencyCounter(currentElem, type);
// // // //             } else if(matchExists(obj,type)){
// // // //                 frequencyCounterArr.push(obj);
// // // //                 count++;
// // // //             }

// // // //         }
// // // //     } else if(matchExists(obj, 'object')){
// // // //         var keys = Object.keys(obj);

// // // //         for(var index=0; index<=keys.length; index++){
// // // //             let currentElem = obj[keys[index]];

// // // //             if(matchExists(currentElem, 'object')){
// // // //                   frequencyCounter(currentElem, type);
// // // //             } else if(matchExists(currentElem,type)){
// // // //                 frequencyCounterArr.push(keys[index]);
// // // //                 count++;
// // // //             }
// // // //         }
// // // //     } 

// // // //     return count;
// // // // }

// // // // console.log(frequencyCounter(obj1, 'boolean'));
// // // // console.log(frequencyCounterArr);

var obj1 = {
    p: 'aadsads',
    _q2:1,
    get q2(){
        return this._q2++;
    },
    q: false,
    ob1: {
        p1: 'aadsads',
        q2: false,
        k3: [
            {
                p4: 'aadsads',
                q4: false
            },
            {
                p5: 'aadsads',
                q5: true,
                q6: true,
                // q6: [1,2,3,4,5,6,7,8,9]
            }
        ]
    }
};


// // // class FrequencyCounterByType {

// // //     constructor() {
// // //         this.count = 0;
// // //         this.frequencyCounterArr = [];
// // //     }


// // //     matchExists(obj, type) {
// // //         return typeof(obj) === type;
// // //     }

// // //     incrementCounter() {
// // //         this.count++;
// // //     }

// // //     addFrequencyCounter(obj) {
// // //         this.frequencyCounterArr.push(obj);
// // //     }

// // //     frequencyCounter(obj, type) {

// // //         if (Array.isArray(obj)) {

// // //             for (var index = 0; index <= obj.length; index++) {
// // //                 let currentElem = obj[index];

// // //                 if (this.matchExists(currentElem, 'object')) {
// // //                     this.frequencyCounter(currentElem, type);
// // //                 } else if (this.matchExists(obj, type)) {
// // //                     this.addFrequencyCounter(obj);
// // //                     this.incrementCounter();
// // //                 }
// // //             }
// // //         } else if (this.matchExists(obj, 'object')) {
// // //             var keys = Object.keys(obj);

// // //             for (var index = 0; index <= keys.length; index++) {
// // //                 let currentElem = obj[keys[index]];
// // //                 if (this.matchExists(currentElem, 'object')) {
// // //                     this.frequencyCounter(currentElem, type);
// // //                 } else if (this.matchExists(currentElem, type)) {
// // //                     this.addFrequencyCounter(keys[index]);
// // //                     this.incrementCounter();
// // //                 }
// // //             }
// // //         }

// // //         return this.count;
// // //     }

// // //     getFrequncyStats(obj1, type) {
// // //         console.log(this.frequencyCounter(obj1, type));
// // //         console.log(this.frequencyCounterArr);
// // //     }
// // //     // console.log(frequencyCounter(obj1, 'boolean'));
// // //     // console.log(frequencyCounterArr);

// // // }


// // // var frequencyCounterByType = new FrequencyCounterByType();

// // // frequencyCounterByType.getFrequncyStats(obj1, 'boolean');

// // // Complete repo
// // // Play with object for sorting, deep comparison and equal of datatype
// // // Don't even think about Maersk
// // // Don't sleep before 


// // var obj1 = {
// //     p3: 'aadsads',
// //     p4: 'aadsads',
// //     p2: 'aadsads',
// //     p1: 'aadsads',
// //     q: false,
// //     ob1: {
// //         p1: 'aadsads',
// //         q2: false,
// //         k3: [
// //             {
// //                 p4: 'aadsads',
// //                 p2: false
// //             },
// //             {
// //                 p5: 'aadsads',
// //                 q5: true,
// //                 q1: true,
// //                 // q6: [1,2,3,4,5,6,7,8,9]
// //             }
// //         ]
// //     }
// // };



// var debounce = function(func, wait){
//     let context = this;
//     clearInterval(clearTimeout);
//     var clearTimeout = setTimeout( 
//         function(param){
//             func.apply([this, ...param]);
//         }, wait);
// }

// var debounce = function(func, wait){
//     let timeout;
//     return function(...args){
//         let context = this;
//         clearTimeout(timeout);
//         timeout = setTimeout(function(){
//             func.apply(context,  [args]);
//         }, wait);
//     }
// }

// var printMyAlisaName= function(str){
//         console.log(str);
// };
// var debouncedAlisa = debounce(printMyAlisaName,100);

// for(var i=0; i<100; i++){
//     debouncedAlisa(i)
// }


// var throttle = function(func, throttleWait){

//     return function(...params){
//           const context = this;
//         //   var waitTime = Date.now() - this.lastCall();
// 		let previousCall = this.lastCall;
//         this.lastCall = Date.now();
//         if(previousCall=== undefined || (this.lastCall -previousCall >= throttleWait) ){
//            func.apply(context, params)
//         }
//     }
// }

// var printMyAlisaName= function(str){
//         console.log(str);
// };
// var throttleAlisa = throttle(printMyAlisaName,501);

// for(let i=0; i<100; i++){

//     setTimeout(
//         ()=>{
//             throttleAlisa(i);
//         }, i * 500);
// }




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
        reject('4')
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