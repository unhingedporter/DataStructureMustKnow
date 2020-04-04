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