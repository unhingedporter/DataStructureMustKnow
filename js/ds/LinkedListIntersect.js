// User defined class node 
class Node {
    // constructor 
    constructor(element) {
        this.data = element;
        this.next = null
    }
}



var head = new Node(5);
var n1 = new Node(50);
var n2 = new Node(500);
var n3 = new Node(5000);
var n4 = new Node(50000);

head.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n4;

var n = head;
console.log("Before" + JSON.stringify(head));

while (n.next != null) {
    var previous;

    var nextElem = n.next;

    if (!!previous && previous !== n.next) {
        var tmp = n;
        n.next = previous
        previous.next = tmp.next;
    }

    previous = n;

    console.log("DATA-- >" + n.data);
    // console.log("location-- >" + JSON.stringify(n.next));
    n = nextElem;
}


console.log("After" + JSON.stringify(head));
// a-->b-->c-->d