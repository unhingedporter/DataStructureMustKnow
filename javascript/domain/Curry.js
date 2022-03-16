function curry(callback) {
    // Write your code here.
      const curriedCallback = (...args)=>{
  
          if(args.length === 0){
            return callback();
          }
  
          return(...otherArgs)=>{
            if(otherArgs.length === 0){
              return callback(...args);
            }
  
            return curriedCallback(...args, ...otherArgs);
  
          }
      }
      return curriedCallback;
  
  }