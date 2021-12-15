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

var node = head;
console.log("Before" + JSON.stringify(head));

while (!!node.next) {
    var previous;

    var nextElem = node.next;

    if (!!previous && previous !== node.next) {
        var tmp = node;
        node.next = previous
        previous.next = tmp.next;
    }

    previous = node;

    console.log("DATA-- >" + node.data);
    // console.log("location-- >" + JSON.stringify(n.next));
    node = nextElem;
}


console.log("After" + JSON.stringify(head));
// a-->b-->c-->d


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {


    let nodeA = headA,
        nodeB = headB,
        lengthA = 0,
        lengthB = 0;
    while (!!nodeA) {
        nodeA = nodeA.next;
        lengthA++;
    }

    while (!!nodeB) {
        nodeB = nodeB.next;
        lengthB++;
    }
    let difference = Math.abs(lengthA - lengthB);
    let counter = 0;
    let biggerLL, smallerLL;

    if (lengthA >= lengthB) {
        biggerLL = headA;
        smallerLL = headB;
    } else {
        biggerLL = headB;
        smallerLL = headA;
    }
    let intersectingValue;
    while (!!biggerLL) {

        if (counter >= difference) {

            if (biggerLL === smallerLL) {
                var value = biggerLL;
                intersectingValue = value;
                break;
            }
            biggerLL = biggerLL.next;
            smallerLL = smallerLL.next;
        } else {
            biggerLL = biggerLL.next;
        }
        counter++;
    }
    return intersectingValue !== undefined ? intersectingValue : null;



};