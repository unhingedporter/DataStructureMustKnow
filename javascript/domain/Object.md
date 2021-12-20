// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(target === returnedTarget)
// true 
Syntax

Object.assign(target, ...sources)

Parameters

target
    The target object — what to apply the sources’ properties to, which is returned after it is modified.
sources
    The source object(s) — objects containing the properties you want to apply.

Return value

The target object.


Copying deep into javascript without lodash merge

-----------------------------------------------------------------
var object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};

var other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};

_.merge(object, other);
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
-------------------------------------------------------------------

export function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

export default function mergeDeep(target, source) {
  let output = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target))
          Object.assign(output, { [key]: source[key] });
        else
          output[key] = mergeDeep(target[key], source[key]);
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
}

--------------------
let object1 = {
  id: 1,
  name: {
    forename: 'John',
    surname: 'McClane'
  },
};

let object2 = {
  id: 2,
  name: {
  }
};

// merge objects
let objExtend = $.extend(true, {}, object1, object2);
let objAssign = Object.assign({}, object1, object2);

// diff
console.log(objExtend.name.forename); // "John"
console.log(objAssign.name.forename); //  undefined

-----------------------------------------------------------------------------------------------

Object.assign() copies property values. If the source value is a reference to an object, it only copies that reference value.

-----------------------------------------------------------------------------------------------

The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"

--------------------------------------------------------------------------------------------
The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop. (The only important difference is that a for...in loop enumerates properties in the prototype chain as well).

The order of the array returned by Object.entries() does not depend on how an object is defined. If there is a need for certain ordering, then the array should be sorted first, like Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));.

const object1 = {
  a: 'somestring',
  b: 42
};

for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

--------------------------------------------------------------------------------------------------
The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.
const obj = {
  prop: 42
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// expected output: 42

--------------------------------------------------------------------------------------------------


The Object.getOwnPropertyDescriptor() method returns a property descriptor for an own property (that is, one directly present on an object and not in the object's prototype chain) of a given object.

Property flags

Object properties, besides a value, have three special attributes (so-called “flags”):

    writable – if true, the value can be changed, otherwise it’s read-only.
    enumerable – if true, then listed in loops, otherwise not listed.
    configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.

const object1 = {
  property1: 42
};

const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');

console.log(descriptor1.configurable);
// expected output: true

console.log(descriptor1.value);
// expected output: 42


--------------------------------------------------------------------------------------------------
The Object.getPrototypeOf() method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.

const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1);
// expected output: true


--------------------------------------------------------------------------------------------------
Object.is
Object.is() determines whether two values are the same value. Two values are the same if one of the following holds:

    both undefined
    both null
    both true or both false
    both strings of the same length with the same characters in the same order
    both the same object (means both object have same reference)
    both numbers and
        both +0
        both -0
        both NaN
        or both non-zero and both not NaN and both have the same value

This is not the same as being equal according to the == operator. The == operator applies various coercions to both sides (if they are not the same Type) before testing for equality (resulting in such behavior as "" == false being true), but Object.is doesn't coerce either value.

This is also not the same as being equal according to the === operator. The === operator (and the == operator as well) treats the number values -0 and +0 as equal and treats Number.NaN as not equal to NaN.

Polyfill:
if (!Object.is) {
  Object.is = function(x, y) {
    // SameValue algorithm
    if (x === y) { // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  };
}

Examples:
Object.is('foo', 'foo');     // true
Object.is(window, window);   // true

Object.is('foo', 'bar');     // false
Object.is([], []);           // false

var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo);         // true
Object.is(foo, bar);         // false

Object.is(null, null);       // true

// Special Cases
Object.is(0, -0);            // false
Object.is(-0, -0);           // true
Object.is(NaN, 0/0);         // true

Caveats: Not reusable for deep comparison


Note:
In JavaScript, every primitive gets it’s own memory space when declared. When assigned a value, that value goes into the memory space.


The important thing to understand here is that the variables, obj1 and obj2 (which could be an Object, Array or Function) each contain only a reference to a location in memory. Not the value of the object.
--------------------------------------------------------------------------------------------------
    Deep comparing objects:
    Known issues (well, they have very low priority, probably you'll never notice them):

    objects with different prototype structure but same projection
    functions may have identical text but refer to different closures

function deepCompare () {
  var i, l, leftChain, rightChain;

  function compare2Objects (x, y) {
    var p;

    // remember that NaN === NaN returns false
    // and isNaN(undefined) returns true
    if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
         return true;
    }

    // Compare primitives and functions.
    // Check if both arguments link to the same object.
    // Especially useful on the step where we compare prototypes
    if (x === y) {
        return true;
    }

    // Works in case when functions are created in constructor.
    // Comparing dates is a common scenario. Another built-ins?
    // We can even handle functions passed across iframes
    if ((typeof x === 'function' && typeof y === 'function') ||
       (x instanceof Date && y instanceof Date) ||
       (x instanceof RegExp && y instanceof RegExp) ||
       (x instanceof String && y instanceof String) ||
       (x instanceof Number && y instanceof Number)) {
        return x.toString() === y.toString();
    }

    // At last checking prototypes as good as we can
    if (!(x instanceof Object && y instanceof Object)) {
        return false;
    }

    if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
        return false;
    }

    if (x.constructor !== y.constructor) {
        return false;
    }

    if (x.prototype !== y.prototype) {
        return false;
    }

    // Check for infinitive linking loops
    if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
         return false;
    }

    // Quick checking of one object being a subset of another.
    // todo: cache the structure of arguments[0] for performance
    for (p in y) {
        if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
            return false;
        }
        else if (typeof y[p] !== typeof x[p]) {
            return false;
        }
    }

    for (p in x) {
        if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
            return false;
        }
        else if (typeof y[p] !== typeof x[p]) {
            return false;
        }

        switch (typeof (x[p])) {
            case 'object':
            case 'function':

                leftChain.push(x);
                rightChain.push(y);

                if (!compare2Objects (x[p], y[p])) {
                    return false;
                }

                leftChain.pop();
                rightChain.pop();
                break;

            default:
                if (x[p] !== y[p]) {
                    return false;
                }
                break;
        }
    }

    return true;
  }

  if (arguments.length < 1) {
    return true; //Die silently? Don't know how to handle such case, please help...
    // throw "Need two or more arguments to compare";
  }

  for (i = 1, l = arguments.length; i < l; i++) {

      leftChain = []; //Todo: this can be cached
      rightChain = [];

      if (!compare2Objects(arguments[0], arguments[i])) {
          return false;
      }
  }

  return true;
}
--------------------------------------------------------------------------------------------------
The Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.
const object1 = {
  property1: 42
};

Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1);
// expected output: 33

delete object1.property1; // cannot delete when sealed
console.log(object1.property1);
// expected output: 33

Comparison to Object.freeze()

Existing properties in objects frozen with Object.freeze() are made immutable. Objects sealed with Object.seal() can have their existing properties changed.

--------------------------------------------------------------------------------------------------
The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it).


const object1 = {};

console.log(Object.isExtensible(object1));
// expected output: true

Object.preventExtensions(object1);

console.log(Object.isExtensible(object1));
// expected output: false

--------------------------------------------------------------------------------------------

The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop enumerates properties in the prototype chain as well.)

const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]

------------------------------------------------------------------------------------