# // Write a program to check if the given binary tree is balanced
# // A tree is called binary if absolute difference of its left and right
# // node is not greater than one.


# Find height of a given binary tree


class Node():

    def __init__(self, value):
        self.left = None
        self.right = None
        self.value = value


class Tree():

    def isBalanced(self, node: Node):

        # check for the empty input and leaf node
        if (node == None or (node.left == None and node.right == None)):
            return 0
        else:
            leftSubtreeBalanceStatus = self.isBalanced(node.left)
            rightSubtreeBalanceStatus = self.isBalanced(node.right)

            if abs(leftSubtreeBalanceStatus - rightSubtreeBalanceStatus) > 1:
                return -1
            else:
                return 1 + max(self.isBalanced(node.left), self.isBalanced(node.right))

            # return max(, self.isBalanced(node.right)) + 1


if __name__ == '__main__':
    root = Node(15)
    root.left = Node(10)
    root.right = Node(20)
    root.left.right = Node(12)
    root.right.left = Node(18)
    root.right.right = Node(30)

    # Creating left skewed tree
    # n1 = Node(5)
    # n1.left = Node(0)
    # n1.left.left = Node(0)
    # n1.left.left.left = Node(0)
    # n1.left.left.left.left = Node(0)
    # n1.left.left.left.left.left = Node(0)
    # n1.left.left.left.left.left.left = Node(0)

    # root.left.left = n1

    print(
        f'The Status for balance of the binary tree is {True if Tree().isBalanced(root) > 0 else False}')
