Immediately Invoked Function Expression - IIFE

Immediately Invoked Function Expression (IIFE) is one of the most popular design patterns in JavaScript. It pronounces like iify. IIFE has been used since long by JavaScript community but it had misleading term "self-executing anonymous function". Ben Alman gave it appropriate name "Immediately Invoked Function Expression"

As you know that a function in JavaScript creates the local scope. So, you can define variables and function inside a function which cannot be access outside of that function. However, sometime you accidently pollute the global variables or functions by unknowingly giving same name to variables & functions as global variable & function names. For example, there are multiple .js files in your application written by multiple developers over a period of time. Single JavaScript file includes many functions and so these multiple .js files will result in large number of functions. There is a good chance of having same name of function exists in different .js files written by multiple developer and if these files included in a single web page then it will pollute the global scope by having two or more function or variables with the same name. Consider following example of two different JavaScript file included in single page.

Consider the following example of MyScript1.js and MyScript2.js with same variable & function name.

var userName = "Bill";

function display(name)
{
    alert("MyScript1.js: " + name);
}

display(userName);



var userName = "Steve";

function display(name)
{
    alert("MyScript2.js: " + name);
}

display(userName);

Now, if you include these JS files in your web page then guess what will happen?
Example: Script tag in <head>

<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width" />
    <title>JavaScript Demo</title>
    <script src="/MyScript1.js"></<script> 
    <script src="/MyScript2.js"></<script> 
</head>
<body>
    <h1> IIFE Demo</h1>
</body>
</html>

If you run above example, you will find that every time it call display() function in MyScript2.js because MyScript2.js included after MyScript1.js in a web page. So JavaScript considers last definition of a function if two functions have the same name.

IEFE solves this problem by having its own scope and restricting functions and variables to become global. The functions and variables declare inside IIFE will not pollute global scope even they have same name as global variables & functions.\

 IIFE is a function expression that automatically invokes after completion of the definition. The parenthesis () plays important role in IIFE pattern. In JavaScript, parenthesis cannot contain statements; it can only contain an expression. 

 (function () {
        // write your js code here
    })();

You can write all the functions and variables inside IIFE without worrying about polluting the global scope or conflict with other's JavaScript code which have functions or variables with same name. 

Further sometimes you wants to create a namespace for your variables. So anonymous functions helps you there too. For example

(function($) {
    $.fn.pluginName = function(opt) {
        // implementation goes here...
    }
}(jQuery));
