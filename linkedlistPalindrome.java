
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
