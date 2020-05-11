/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.


*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    class Node {

        construtor(val) {
            this.value = val;
            this.next = null;
        }
    }

    // Reverse the second linked list 
    var prev = null,
        head = l2

    while (l2) {
        next = current.next;
        current.next = prev;
        prev = next;
        next = current;
    }

    l2.next = head;

    var l3;
    var carryOver = 0;
    while (l1 && l2) {

        var value = l1.value + l2.value + carryOver;

        if (value >= 10) {
            carryOver = 1
        } else {
            carryOver = 0
        }

        l3.next = new Node(value)


        l1 = l1.next;
        l2 = l2.next;
        l3 = l3.next;
    }

    return l3;

};