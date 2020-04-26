# Find height of a given binary tree


class Node():

    def __init__(self, value):
        self.left = None
        self.right = None
        self.value = value


class Tree():

    def height(self, node: Node):

        if node is None or (node.left is None and node.right is None):
            return 0
        else:
            left_sub_tree_height = self.height(node.left)
            right_sub_tree_height = self.height(node.right)
            return max(left_sub_tree_height, right_sub_tree_height) + 1


n = Node(15)
n.left = Node(10)
n.right = Node(20)

n.left.right = Node(12)
n.right.left = Node(18)
n.right.right = Node(30)

# Creating left skewed tree
n1 = Node(5)
n1.left = Node(0)
n1.left.left = Node(0)
n1.left.left.left = Node(0)
n1.left.left.left.left = Node(0)
n1.left.left.left.left.left = Node(0)
n1.left.left.left.left.left.left = Node(0)

n.left.left = n1

print(f'The height of the tree is {Tree().height(n)}')
