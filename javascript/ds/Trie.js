

// class TrieNode {

//     constructor() {
//         this.key = '';
//         this.child = {};
//         this.isEndofWord = false;
//     }
// }

// class Trie {

//     constructor() {
//         this.root = this.getNode();
//     }

//     getNode() {
//         return new TrieNode();
//     }

//     charToNum(char) {
//         return char.charCodeAt(0) - 'a'.charCodeAt(0);
//     }

//     numToChar(num) {
//         return String.fromCharCode(num);
//     }

//     search(str) {

//     }


//     printAllTrie() {
//         var crawl = this.root;

//         for (let [key, values] of Object.entries(crawl.child)) {
//             var counter = 0;
//             while (!!crawl.child[key] && !!crawl.child[key].child && !!crawl.child[counter]) {
//                 console.log(crawl.child[key][counter]);
//                 crawl = crawl.child[counter];
//             }
//         }
//     }

//     insert(str) {

//         var crawl = this.root;
//         for (var i = 0; i < str.length; i++) {
//             var char = this.charToNum(str[i]);
//             if (!crawl.child[char]) {
//                 crawl.child[char] = this.getNode();
//             } else {
//                 crawl = crawl.child[char];
//             }
//         }
//         crawl.child.isEndofWord = true;
//     }



// }

// trie = new Trie();
// trie.insert('saras');
// trie.insert('saraswati');
// trie.insert('Mango');
// trie.insert('BabyMango');
// trie.insert('Baby');
// trie.insert('BabyPapaya');
// trie.insert('Papaya');
// trie.insert('Papaya');
// trie.printAllTrie();



// class Trie {

//     constructor(str) {
//         this.root = new Map();
//         this.endOfWord = null;
//         this.populateString(str);
//     }

//     populateString(str) {
//         var node = this.root;
//         for (var i = 0; i < str.length; i++) {

//             var keyStr = str[i];

//             if (node.has(keyStr)) {
//                 node = node[keyStr]
//             } else {
//                 this.insertSubStrStartingAt(node, str.substring(i))
//             }
//         }
//         node.set(this.endOfWord, true);

//         return this;
//     }

//     insertSubStrStartingAt(node, str) {
//         var localMap = new Map();
//         node.set(str[0], localMap);

//         for(var index = 1; index< str.length; index++){
             
//             localMap.set(str[index], localMap);
//             node = localMap;
//         }

//         return this;
//     }

//     contains(str) {
//         var node = this.root;

//         for (var i = 0; i < str.length; i++) {
//             var keyStr = str[i];
//             if (node.has(keyStr)) {
//                 node = node[keyStr]
//             }
//         }

//         return node === null;
//     }
// }

var trie = new Trie('saras');

trie.populateString('saraswati');
trie.populateString('Shilp');
trie.populateString('Papaya');
trie.populateString('PapayaIsSexy');
console.log(trie.contains('Papaya'));