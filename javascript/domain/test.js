


let debounce = (func, wait )=>{

    var context = this;
    var interval ;
    return function(...args){
        clearInterval(interval);
        interval = setTimeout(() => {
                return func.apply(context,args)
        }, wait);

    }
}


var debounce = function(func, wait){
    let timeout;
    return function(...args){
        let context = this;
        clearTimeout(timeout);
        timeout = setTimeout(function(){
            func.apply(context,  [args]);
        }, wait);
    }
}

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

let throttle = (func, wait)=>{
    // let previousCall ;
    // let context = this;
    return function(...args){

    let context = this;
        previousCall = this.lastcall;
        this.lastcall = new Date();

        if(lastcall === undefined || previousCall.getSeconds() - this.lastcall.getSeconds() > wait){
            return func.apply(context, args)
        }

    }



}