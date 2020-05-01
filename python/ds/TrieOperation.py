class TrieNode:

    def __init__(self):
        self.children = [None] * 26
        self.isEndOfWord = False


class Trie:

    def __init__(self):
        self.root_node = self.TrieNode()

    def getNewNode(self):
        return TrieNode()

    def char_to_index(self, char):
        return ord(char) - ord('a')

    def add(self, msg: str):

        for char in range(len(str)):
            ordinal = self.char_to_index(char)
            if ordinal not in self.root_node[msg[char]]:
                self.root_node[msg[char]] = self.getNewNode()
            self.root_node = self.root_node.children[char]
        self.root_node.isEndOfWord = True

    def search(self, msg: str):
        char = 0
        node = self.root_node
        for counter in range(len(msg)):
            ordinal = self.char_to_index(msg[counter])
            if ordinal not in node.children[counter]:
                return False
            node = self.children[counter]

        return self.root_node.isEndOfWord


# if(self.node ==)


if __name__ == '__main__':

    data = [
        'moto',
        'nokia',
        'samsung',
        'appple',
        'google',
        'facebook',
        'cognizant',
        'Mango',
        'Papaya',
        'GameOfthrone',
        'Hp'
    ]
    trie = Trie()
    for d in data:
        trie.insert(d)
