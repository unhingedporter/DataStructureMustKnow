class Node {

    constructor(val) {
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

    // 1->2->3->4->5->6->7->8->9->null
    // 9->8->7->6->5->4->3->2->1->null

    // 1->2->3->null
    // null<-1<-2<-3

    reverse(head){

        var prev = null,
        current = head;

        while(current != null){            
            var next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
       // this.head = prev;
        
        return prev;

    }
    pairwiseSwap() {

    }

    NthfromLast() {

        // initialize two pointers
        // traverse one pointer initially nth places
        // traverse both pointers after that


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
        /*

                Method 1(Simply use two loops) 
                Use 2 nested for loops. The outer loop will be for each node of the 1st list and inner loop will be for 2nd list. In the inner loop, check if any of nodes of the 2nd list is same as the current node of the first linked list. The time complexity of this method will be O(M * N) where m and n are the numbers of nodes in two lists.
                
                Method 2 (Mark Visited Nodes) 
                This solution requires modifications to basic linked list data structure. Have a visited flag with each node. Traverse the first linked list and keep marking visited nodes. Now traverse the second linked list, If you see a visited node again then there is an intersection point, return the intersecting node. This solution works in O(m+n) but requires additional information with each node. A variation of this solution that doesn’t require modification to the basic data structure can be implemented using a hash. Traverse the first linked list and store the addresses of visited nodes in a hash. Now traverse the second linked list and if you see an address that already exists in the hash then return the intersecting node.
               
                Method 3(Using difference of node counts) 

                Get count of the nodes in the first list, let count be c1.
                Get count of the nodes in the second list, let count be c2.
                Get the difference of counts d = abs(c1 – c2)
                Now traverse the bigger list from the first node till d nodes so that from here onwards both the lists have equal no of nodes 
                Then we can traverse both the lists in parallel till we come across a common node. (Note that getting a common node is done by comparing the address of the nodes)
        */
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
        // To rotate a linked list by k, we can first make the linked list circular and then moving k-1 steps forward from head node, making it null and make kth node as head.
        /*
        static void rotate( int k)
        {
            if (k == 0)
                return;
        
            // Let us understand the below
            // code for example k = 4 and
            // list = 10.20.30.40.50.60.
            Node current = head;
        
            // Traverse till the end.
            while (current.next != null)
                current = current.next;
        
            current.next = head;
            current = head;
        
            // traverse the linked list to k-1 position which
            // will be last element for rotated array.
            for (int i = 0; i < k - 1; i++)
                current = current.next;
        
            // update the head_ref and last element pointer to null
            head = current.next;
            current.next = null;
        } */
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