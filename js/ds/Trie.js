

class TrieNode {

    constructor() {
        this.child = [];
        this.isEndofWord = false;
    }
}

class Trie {

    constructor() {
        this.root = this.getNode();
    }

    getNode() {
        return new TrieNode();
    }

    charToNum(char) {
        return char.charCodeAt(0) - 'a'.charCodeAt(0);
    }

    search(str) {

    }


    printAllTrie() {
        var crawl = this.root;

        for (var i = 0; i < crawl.child.length; i++) {
            var counter = 0;
            while (crawl.child[i].length > 0 && !!crawl.child[counter]) {

                console.log(crawl.child[counter])
                crawl = crawl.child[counter];
            }
        }
    }

    insert(str) {

        var crawl = this.root;

        for (var i = 0; i < str.length; i++) {

            var char = this.charToNum(str[i]);
            if (!crawl.child.includes(char)) {
                crawl.child[char] = this.getNode();
            } else {
                crawl = crawl.child[char];

            }

        }
        crawl.child.isEndofWord = true;
    }



}

trie = new Trie();
trie.insert('saras');
trie.insert('saraswati');
trie.insert('Mango');
trie.insert('BabyMango');
trie.insert('Baby');
trie.insert('BabyPapaya');
trie.insert('Papaya');
trie.insert('Papaya');
trie.printAllTrie()