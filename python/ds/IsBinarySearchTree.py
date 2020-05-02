#  check if a binary tree is a binary search tree

# Two approaches
# i. Inorder traversal O(n)
# ii. Recursively check O(n)


class Node():

    def __init__(self, value):
        self.left = None
        self.right = None
        self.val = value


class BinaryTree():

    def __init__(self):
        pass

    def isBinarySearchTree(self, root: Node, left: Node = None, right: Node = None):

        # Check for a leaf or null node
        # Empty tree is a binary tree
        if root == None:
            return True
        elif left != None and root.val <= left.val:
            return False
        elif right != None and root.val >= right.val:
            return False

        # Not Required
        # elif left != None and right != None and left > right:
        #     return False
        # check for every subtree with its opposite sibling counterpart
        return self.isBinarySearchTree(root.left, left, root) and \
            self.isBinarySearchTree(root.right, root, right)


#         # Root
#         #                         50
#         #             25                          75
#         #        12         40            60              90
#         #      10
#         #     8
#         #    7


if __name__ == '__main__':
    root = Node(50)
    root.left = Node(25)
    root.right = Node(75)
    root.left.right = Node(40)
    root.right.left = Node(60)
    root.right.right = Node(90)
    # # Creating left skewed tree
    n1 = Node(12)
    n1.left = Node(10)
    n1.left.left = Node(8)
    n1.left.left.left = Node(7)
    root.left.left = n1

    print(
        f'The Status of BinarySearchTree is {BinaryTree().isBinarySearchTree(root)}')
