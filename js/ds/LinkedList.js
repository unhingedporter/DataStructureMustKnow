class Node {

    constructor(val) {
        // this.left = this.right = null;
        this.next = null;
        this.value = val;
    }
}


class LinkedList {

    constructor(head) {
        this.head = head;
    }

    print() {
        var node = this.head;
        while (node) {
            console.log(node.value);
            node = node.next;
        }
    }

    printMiddle() {

        var slow_pointer = this.head;
        var fast_pointer = this.head;

        while (slow_pointer && fast_pointer && fast_pointer.next) {
            slow_pointer = slow_pointer.next;
            fast_pointer = fast_pointer.next.next;
        }

        console.log(`The middle value is ${slow_pointer.value}`);

    }


    reverse() {
        var prev = null,
            current = this.head;
        while (current.next) {
            var next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    pairwiseSwap() {

    }

    NthfromLast() {

    }

    sort() {
        // Use merge sort
        /*
        # Function to merge two sorted linked list. 
        def mergeLists(head1, head2): 
        
            # create a temp node NULL 
            temp = None
        
            # List1 is empty then return List2 
            if head1 is None: 
                return head2 
        
            # if List2 is empty then return List1 
            if head2 is None: 
                return head1 
        
            # If List1's data is smaller or 
            # equal to List2's data 
            if head1.data <= head2.data: 
        
                # assign temp to List1's data 
                temp = head1 
        
                # Again check List1's data is smaller or equal List2's  
                # data and call mergeLists function. 
                temp.next = mergeLists(head1.next, head2) 
                
            else: 
                # If List2's data is greater than or equal List1's  
                # data assign temp to head2 
                temp = head2 
        
                # Again check List2's data is greater or equal List's 
                # data and call mergeLists function. 
                temp.next = mergeLists(head1, head2.next) 
        
            # return the temp list. 
            return temp 
        */

    }

    detectLoop() {
        var fast_pointer = this.head;
        var slow_pointer = this.head;
        while (slow_pointer && fast_pointer && fast_pointer.next) {
            slow_pointer = slow_pointer.next;
            fast_pointer = fast_pointer.next.next;

            if (slow_pointer == fast_pointer) {
                console.log('Loop exists');
                return true;
            }
        }
        return false;
    }

    removeLoop() {

        // use isVisited flag
        // or when fast and slow pointers meet at a common point then it is the erroring node
    }

    detectYShape() {

    }

    isPalindrome() {
        var slow_pointer = this.head;
        var fast_pointer = this.head;
        var stack = [];
        var counter = 0;
        while (slow_pointer && fast_pointer && fast_pointer.next) {
            slow_pointer = slow_pointer.next;
            fast_pointer = fast_pointer.next.next;
            counter++;
            stack.push(slow_pointer.value);
        }

        console.log(`The middle is found at ${counter}`);

        while (slow_pointer) {

            var val = stack.pop();
            if (slow_pointer.value !== val) {
                console.log('No Palindrome detected');
                return;
            }
            slow_pointer = slow_pointer.next;
        }
        console.log('It is a palindromw');

    }

    rotateLeft() {

    }

}

var head = new Node(60);
var one = new Node(1);
var second = new Node(2);
var third = new Node(3);
var fourth = new Node(4);
var five = new Node(5);
var sixth = new Node(6);
var seventh = new Node(7);
var eight = new Node(8);
var nine = new Node(9);
var tenth = new Node(10);

// Validate palindrome
// var sixth = new Node(4);
// var seventh = new Node(3);
// var eight = new Node(2);
// var nine = new Node(1);
// var tenth = new Node(60);

head.next = one;
one.next = second;
second.next = third;
third.next = fourth;
fourth.next = five;
five.next = sixth;
sixth.next = seventh;
seventh.next = eight;
eight.next = nine;
// nine.next = tenth;


var ll = new LinkedList(head);

// ll.print();
// ll.reverse();
// ll.print();
// ll.detectLoop();
// ll.printMiddle();
ll.isPalindrome();