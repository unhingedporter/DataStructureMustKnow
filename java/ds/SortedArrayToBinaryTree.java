// Sorted Array to Balanced BST

/*
Given a sorted array. Write a function that creates a Balanced Binary Search Tree using array elements.


1) Get the Middle of the array and make it root.
2) Recursively do same for left half and right half.
      a) Get the middle of left half and make it left child of the root
          created in step 1.
      b) Get the middle of right half and make it right child of the
          root created in step 1.
          
*/
class TreeNode {
    int data;
    TreeNode left, right;

    public TreeNode(int data) {
        this.data = data;
        this.left = this.right = null;
    }
}

class BST {

    public TreeNode createBST(int arr[], int low, int high) {

        if (low > high) {
            return null;
        }
        int mid = high - (high - low) / 2;
        TreeNode node = new TreeNode(arr[mid]);

        node.left = createBST(arr, low, mid - 1);

        node.right = createBST(arr, mid + 1, high);

        return node;
    }

    /* A utility function to print preorder traversal of BST */
    void preOrder(TreeNode node) {
        if (node == null) {
            return;
        }
        System.out.print(node.data + " ");
        preOrder(node.left);
        preOrder(node.right);
    }

    /* A utility function to print inorder traversal of BST */
    void inOrder(TreeNode node) {
        if (node == null) {
            return;
        }
        inOrder(node.left);

        System.out.print(node.data + " ");
        inOrder(node.right);
    }

    public static void main(String args[]) {
        int array[] = { 1, 2, 8, 4, 5, 6, 7, 9, 12, 222, 223, 224, 225, 226 };
        BST bst = new BST();

        TreeNode tn = bst.createBST(array, 0, array.length - 1);
        bst.inOrder(tn);
        System.out.println("-------------------------");

        bst.preOrder(tn);
    }
}