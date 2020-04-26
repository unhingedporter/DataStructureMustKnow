class Node {

    int data;
    Node next;

    public Node(int num) {
        this.next = null;
        this.data = num;
    }

}

class LinkedList {

    Node head;

    public static void main(String args[]) {

        LinkedList ll = new LinkedList();

        ll.insertAtBegin(22);
        ll.insertAtBegin(222);
        ll.insertAtBegin(2222);
        ll.insertAtBegin(22222);
        ll.insertAtEnd(4488, 0);
        ll.printLinkedList();
    }

    // Needs to implement location
    public void insertAtEnd(int n, int location) {
        Node node = head;

        if (head == null) {
            head = new Node(n);
            return;
        }
        while (node.next != null) {

            node = node.next;
        }
        Node tempNode = new Node(n);
        node.next = tempNode;
        System.out.println("node added");
    }

    public void insertAtBegin(int n) {

        Node node = new Node(n);
        node.next = head;
        head = node;
    }

    public void printLinkedList() {
        Node node = head;

        while (node.next != null) {
            System.out.println(node.data);
            node = node.next;
        }
    }
}