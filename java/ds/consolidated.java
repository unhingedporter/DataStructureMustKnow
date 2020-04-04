// JAVA implementation of left rotation 
// of an array K number of times 
import java.util.*; 
import java.lang.*; 
import java.io.*; 

class arr_rot 
{ 
	// Function to leftRotate array multiple 
	// times 
	static void leftRotate(int arr[], int n, 
									int k) 
	{ 
		/* To get the starting point of 
		rotated array */
		int mod = k % n; 
	
		// Prints the rotated array from 
		// start position 
		for(int i = 0; i < n; ++i) 
		System.out.print(arr[(i + mod) % n] 
						+ " "); 
		
		System.out.println(); 
	} 
	
	// Driver program 
	public static void main (String[] args) 
	{ 
			int arr[] = { 1, 3, 5, 7, 9 }; 
			int n = arr.length; 

			int k = 2; 
			leftRotate(arr, n, k); 

			k = 3; 
			leftRotate(arr, n, k); 

			k = 4; 
			leftRotate(arr, n, k); 
	} 
} 

// This code is contributed by Sanjal 

-------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------

// Java program for different tree traversals 

/* Class containing left and right child of current 
node and key value*/
class Node 
{ 
	int key; 
	Node left, right; 

	public Node(int item) 
	{ 
		key = item; 
		left = right = null; 
	} 
} 

class BinaryTree 
{ 
	// Root of Binary Tree 
	Node root; 

	BinaryTree() 
	{ 
		root = null; 
	} 

	/* Given a binary tree, print its nodes according to the 
	"bottom-up" postorder traversal. */
	void printPostorder(Node node) 
	{ 
		if (node == null) 
			return; 

		// first recur on left subtree 
		printPostorder(node.left); 

		// then recur on right subtree 
		printPostorder(node.right); 

		// now deal with the node 
		System.out.print(node.key + " "); 
	} 

	/* Given a binary tree, print its nodes in inorder*/
	void printInorder(Node node) 
	{ 
		if (node == null) 
			return; 

		/* first recur on left child */
		printInorder(node.left); 

		/* then print the data of node */
		System.out.print(node.key + " "); 

		/* now recur on right child */
		printInorder(node.right); 
	} 

	/* Given a binary tree, print its nodes in preorder*/
	void printPreorder(Node node) 
	{ 
		if (node == null) 
			return; 

		/* first print data of node */
		System.out.print(node.key + " "); 

		/* then recur on left sutree */
		printPreorder(node.left); 

		/* now recur on right subtree */
		printPreorder(node.right); 
	} 

	// Wrappers over above recursive functions 
	void printPostorder() {	 printPostorder(root); } 
	void printInorder() {	 printInorder(root); } 
	void printPreorder() {	 printPreorder(root); } 

	// Driver method 
	public static void main(String[] args) 
	{ 
		BinaryTree tree = new BinaryTree(); 
		tree.root = new Node(1); 
		tree.root.left = new Node(2); 
		tree.root.right = new Node(3); 
		tree.root.left.left = new Node(4); 
		tree.root.left.right = new Node(5); 

		System.out.println("Preorder traversal of binary tree is "); 
		tree.printPreorder(); 

		System.out.println("\nInorder traversal of binary tree is "); 
		tree.printInorder(); 

		System.out.println("\nPostorder traversal of binary tree is "); 
		tree.printPostorder(); 
	} 
} 

-----------------------------------------------------------------------------
-----------------------------------------------------------------------------

// non-recursive java program for inorder traversal 
import java.util.Stack; 

/* Class containing left and right child of 
current node and key value*/
class Node 
{ 
	int data; 
	Node left, right; 

	public Node(int item) 
	{ 
		data = item; 
		left = right = null; 
	} 
} 

/* Class to print the inorder traversal */
class BinaryTree 
{ 
	Node root; 
	void inorder() 
	{ 
		if (root == null) 
			return; 


		Stack<Node> s = new Stack<Node>(); 
		Node curr = root; 

		// traverse the tree 
		while (curr != null || s.size() > 0) 
		{ 

			/* Reach the left most Node of the 
			curr Node */
			while (curr != null) 
			{ 
				/* place pointer to a tree node on 
				the stack before traversing 
				the node's left subtree */
				s.push(curr); 
				curr = curr.left; 
			} 

			/* Current must be NULL at this point */
			curr = s.pop(); 

			System.out.print(curr.data + " "); 

			/* we have visited the node and its 
			left subtree. Now, it's right 
			subtree's turn */
			curr = curr.right; 
		} 
	} 

	public static void main(String args[]) 
	{ 

		/* creating a binary tree and entering 
		the nodes */
		BinaryTree tree = new BinaryTree(); 
		tree.root = new Node(1); 
		tree.root.left = new Node(2); 
		tree.root.right = new Node(3); 
		tree.root.left.left = new Node(4); 
		tree.root.left.right = new Node(5); 
		tree.inorder(); 
	} 
} 



-----------------------------------------------------------------------------
-----------------------------------------------------------------------------


// Java program to print inorder traversal without recursion and stack 

/* A binary tree tNode has data, a pointer to left child 
and a pointer to right child */
class tNode { 
	int data; 
	tNode left, right; 

	tNode(int item) 
	{ 
		data = item; 
		left = right = null; 
	} 
} 

class BinaryTree { 
	tNode root; 

	/* Function to traverse a binary tree without recursion and 
	without stack */
	void MorrisTraversal(tNode root) 
	{ 
		tNode current, pre; 

		if (root == null) 
			return; 

		current = root; 
		while (current != null) { 
			if (current.left == null) { 
				System.out.print(current.data + " "); 
				current = current.right; 
			} 
			else { 
				/* Find the inorder predecessor of current */
				pre = current.left; 
				while (pre.right != null && pre.right != current) 
					pre = pre.right; 

				/* Make current as right child of its inorder predecessor */
				if (pre.right == null) { 
					pre.right = current; 
					current = current.left; 
				} 

				/* Revert the changes made in the 'if' part to restore the 
					original tree i.e., fix the right child of predecessor*/
				else { 
					pre.right = null; 
					System.out.print(current.data + " "); 
					current = current.right; 
				} /* End of if condition pre->right == NULL */

			} /* End of if condition current->left == NULL*/

		} /* End of while */
	} 

	public static void main(String args[]) 
	{ 
		/* Constructed binary tree is 
			1 
			/ \ 
			2	 3 
		/ \ 
		4	 5 
		*/
		BinaryTree tree = new BinaryTree(); 
		tree.root = new tNode(1); 
		tree.root.left = new tNode(2); 
		tree.root.right = new tNode(3); 
		tree.root.left.left = new tNode(4); 
		tree.root.left.right = new tNode(5); 

		tree.MorrisTraversal(tree.root); 
	} 
} 

// This code has been contributed by Mayank Jaiswal(mayank_24) 


-----------------------------------------------------------------------------
-----------------------------------------------------------------------------


import java.util.HashSet; 

import java.util.*;
//  class Node {
//       public int val;
//       public Node next;
//       Node(int x) { val = x; next = null; }
//   }
public class linkedlist{

    Node head;

    static class Node{
        int data;
        Node next;
        Boolean visit = false;
        Node(int d)  { data = d;  next=null; } 
    }
    public static void main(String args[]){
        linkedlist ll = new linkedlist();       
        Node one = new Node(1);
        Node second = new Node(2);
        Node third = new Node(3);
        Node fourth = new Node(4);
        Node five = new Node(5);
        Node sixth = new Node(6);
        Node seventh = new Node(7);
        Node eight = new Node(8);
        Node nine = new Node(9);
        Node tenth = new Node(10);
        ll.head = one;
        one.next = second;
        second.next = third;
        third.next = fourth;
        fourth.next = five;
        five.next = sixth;
        sixth.next = seventh;
        seventh.next = eight;
        eight.next = nine;
        nine.next = tenth;
        ll.printList();
        // ll.removeDuplicates();
        ll.printList();
        ll.lPalin();
        // ll.markVisitedNodes();
        // ll.middleElement();
    }
    public void printList(){
        Node n = head;
        while( n != null){
            System.out.print(n.data+ "  ---> ");
            n = n.next;
        }
    }

    public void removeDuplicates(){
        HashSet<Integer> hs = new HashSet();
        Node n = head;
        Node prev = null;
        while(n != null){
            if(hs.contains(n.data)){
                prev.next = n.next;
                System.out.println("Duplicate item" + n.data);
            } else{
                prev = n;
                hs.add(n.data);
            }
            System.out.println("Items value found at " + n.data);
            n= n.next;
        }
    } 
       
        public int lPalin() {
            Node n = head;
            Node head = n;
            Node headFaster = n.next;
           int counter = 0;
           Stack<Integer> s  = new Stack();
           Boolean isPalindrome = true;
           while(head.next != null && headFaster.next.next !=null){
              s.push(head.data);
              System.out.println("Values in stack is " + head.data);
               
               if(headFaster.next.next !=null){
                   head= head.next;
                   headFaster.next = headFaster.next.next;
               } else {
                   head = head.next;
               }

               counter++;
           }
           
           
           //1 2 3 3 2 1
           // 1234 5 4321
           if(n != null){
           Boolean firstRun = true;
               while(head.next !=null){
                    if(firstRun && counter % 2 == 0){
                       head = head.next;
                       firstRun = false;
                    }
                   
                    // if(s.empty()){
                    //     break;
                    // }
                    int val = s.pop();
                    System.out.println("values coming in " + val + "--" + head.data);
                   if(val != head.data)
                   {
                       System.out.println("Palindrome mismatch" +val + "<>" + head.data );
                       isPalindrome = false;
                   }
                   head = head.next;
               }
            
           }
           return isPalindrome?1:0;
           
           
           
       }
    public void markVisitedNodes(){
        Node n = head;
        while(n.next != null){
            System.out.println("Node val " + n.data);
            if(n.visit){
                System.out.println("Loop detected at node val " + n.data);
                return;
            }
            n.visit = true;
            n= n.next;

        }
        System.out.println("No Loop Detected");
    }
 

    public void middleElement(){
        Node headPointer = head;
        Node headFasterPointer = head;
        int counter = 0;

        if(head != null){
        while(headFasterPointer.next != null ){
            
            if(headFasterPointer.next.next != null){
            headFasterPointer = headFasterPointer.next.next;
            headPointer = headPointer.next;
            } 
            else
             {
            headFasterPointer = headFasterPointer.next;
            } 
            counter++;
        }

        System.out.println();
        System.out.println("The value of counter is "+ counter);
        if(counter %2 == 0){
         System.out.println("The middle element is " + headPointer.data +","+ headPointer.next.data);
        } else 
        {
         System.out.println("The middle element is " + headPointer.data );
        }
        
        

        }

}
}

-----------------------------------------------------------------------------
-----------------------------------------------------------------------------


import java.util.*;
 class ListNode {
      public int val;
      public ListNode next;
      ListNode(int x) { val = x; next = null; }
  }
 class Solution {
   
    public int lPalin(ListNode A) {
         ListNode head = A;
        ListNode headFaster = A.next;
        int counter = 0;
        Stack<Integer> s  = new Stack();
        Boolean isPalindrome = true;
        while(head.next != null && headFaster.next.next !=null){
            
            if(headFaster.next.next !=null){
                head= head.next;
                headFaster.next = headFaster.next.next;
            } else {
                head = head.next;
            }
            s.push(head.val);
            counter++;
        }
        
        //1 2 3 3 2 1
        // 1234 5 4321
        if(A != null){
        if(counter % 2 == 0){
            while(head.next !=null){
                int val = s.pop();
                
                 if(!s.empty()){
                     break;
                 }
                if(val != head.val)
                {
                    System.out.println("Palindrome mismatch" +val + "<>" + head.val );
                    isPalindrome = false;
                }
                head = head.next;
            }
        } else {
             head = head.next;
             while(head.next != null){
                 
                 if(!s.empty()){
                     break;
                 }
                 
                     int val = s.pop();
            
                if(val != head.val)
                {
                    System.out.println("Palindrome mismatch" +val + "<>" + head.val );
                    isPalindrome = false;
                }
                head = head.next;
                }
            
        }
        }
        return isPalindrome?1:0;
        
        
        
    }
}


-----------------------------------------------------------------------------
-----------------------------------------------------------------------------

//Wrong solution.. Contain edge cases
//https://www.geeksforgeeks.org/find-element-array-sum-left-array-equal-sum-right-array/

// Java program to find an element 
// such that sum of right side element 
// is equal to sum of left side 
public class GFG { 
	
	// Function to compute partition 
	static int findElement(int arr[], int size) 
	{ 
		int right_sum = 0, left_sum = 0; 
	
		// Computing right_sum 
		for (int i = 1; i < size; i++) 
			right_sum += arr[i]; 
	
		// Checking the point of partition 
		// i.e. left_Sum == right_sum 
		for (int i = 0, j = 1; j < size; i++, j++) { 
			right_sum -= arr[j]; 
			left_sum += arr[i]; 
	
			if (left_sum == right_sum) 
				return arr[i + 1]; 
		} 
	
		return -1; 
	} 
	
	// Driver 
	public static void main(String args[]) 
	{ 
		int arr[] = { 2, 3, 4, 1, 4, 5 }; 
		int size = arr.length; 
		System.out.println(findElement(arr, size)); 
	} 
} 
// This code is contributed by Sumit Ghosh 


-----------------------------------------------------------------------------
-----------------------------------------------------------------------------



-----------------------------------------------------------------------------
-----------------------------------------------------------------------------



-----------------------------------------------------------------------------
-----------------------------------------------------------------------------

