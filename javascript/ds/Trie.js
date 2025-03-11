

// // class TrieNode {

// //     constructor() {
// //         this.key = '';
// //         this.child = {};
// //         this.isEndofWord = false;
// //     }
// // }

// // class Trie {

// //     constructor() {
// //         this.root = this.getNode();
// //     }

// //     getNode() {
// //         return new TrieNode();
// //     }

// //     charToNum(char) {
// //         return char.charCodeAt(0) - 'a'.charCodeAt(0);
// //     }

// //     numToChar(num) {
// //         return String.fromCharCode(num);
// //     }

// //     search(str) {

// //     }


// //     printAllTrie() {
// //         var crawl = this.root;

// //         for (let [key, values] of Object.entries(crawl.child)) {
// //             var counter = 0;
// //             while (!!crawl.child[key] && !!crawl.child[key].child && !!crawl.child[counter]) {
// //                 console.log(crawl.child[key][counter]);
// //                 crawl = crawl.child[counter];
// //             }
// //         }
// //     }

// //     insert(str) {

// //         var crawl = this.root;
// //         for (var i = 0; i < str.length; i++) {
// //             var char = this.charToNum(str[i]);
// //             if (!crawl.child[char]) {
// //                 crawl.child[char] = this.getNode();
// //             } else {
// //                 crawl = crawl.child[char];
// //             }
// //         }
// //         crawl.child.isEndofWord = true;
// //     }



// // }

// // trie = new Trie();
// // trie.insert('saras');
// // trie.insert('saraswati');
// // trie.insert('Mango');
// // trie.insert('BabyMango');
// // trie.insert('Baby');
// // trie.insert('BabyPapaya');
// // trie.insert('Papaya');
// // trie.insert('Papaya');
// // trie.printAllTrie();



// // class Trie {

// //     constructor(str) {
// //         this.root = new Map();
// //         this.endOfWord = null;
// //         this.populateString(str);
// //     }

// //     populateString(str) {
// //         var node = this.root;
// //         for (var i = 0; i < str.length; i++) {

// //             var keyStr = str[i];

// //             if (node.has(keyStr)) {
// //                 node = node[keyStr]
// //             } else {
// //                 this.insertSubStrStartingAt(node, str.substring(i))
// //             }
// //         }
// //         node.set(this.endOfWord, true);

// //         return this;
// //     }

// //     insertSubStrStartingAt(node, str) {
// //         var localMap = new Map();
// //         node.set(str[0], localMap);

// //         for(var index = 1; index< str.length; index++){
             
// //             localMap.set(str[index], localMap);
// //             node = localMap;
// //         }

// //         return this;
// //     }

// //     contains(str) {
// //         var node = this.root;

// //         for (var i = 0; i < str.length; i++) {
// //             var keyStr = str[i];
// //             if (node.has(keyStr)) {
// //                 node = node[keyStr]
// //             }
// //         }

// //         return node === null;
// //     }
// // }

// // var trie = new Trie('saras');

// // trie.populateString('saraswati');
// // trie.populateString('Shilp');
// // trie.populateString('Papaya');
// // trie.populateString('PapayaIsSexy');
// // console.log(trie.contains('Papaya'));



// let Node = function() {
// 	this.keys = new Map();
// 	this.end = false;
// 	this.setEnd = function() {
// 		this.end = true;
// 	};
// 	this.isEnd = function() {
// 		return this.end;
// 	};
// };

// let Trie = function() {

// 	this.root = new Node();

// 	this.add = function(input, node = this.root) {
// 		if (input.length == 0) {
// 			node.setEnd();
// 			return;
// 		} else if (!node.keys.has(input[0])) {
// 			node.keys.set(input[0], new Node());
// 			return this.add(input.substr(1), node.keys.get(input[0]));
// 		} else {
// 			return this.add(input.substr(1), node.keys.get(input[0]));
// 		};
// 	};

// 	this.isWord = function(word) {
// 		let node = this.root;
// 		while (word.length > 1) {
// 			if (!node.keys.has(word[0])) {
// 				return false;
// 			} else {
// 				node = node.keys.get(word[0]);
// 				word = word.substr(1);
// 			};
// 		};
// 		return (node.keys.has(word) && node.keys.get(word).isEnd()) ? 
//       true : false;
// 	};

// 	this.print = function() {
// 		let words = new Array();
// 		let search = function(node, string) {
// 			if (node.keys.size != 0) {
// 				for (let letter of node.keys.keys()) {
// 					search(node.keys.get(letter), string.concat(letter));
// 				};
// 				if (node.isEnd()) {
// 					words.push(string);
// 				};
// 			} else {
// 				string.length > 0 ? words.push(string) : undefined;
// 				return;
// 			};
// 		};
// 		search(this.root, new String());
// 		return words.length > 0 ? words : mo;
// 	};

// };

// myTrie = new Trie()
// myTrie.add('ball'); 
// myTrie.add('bat'); 
// myTrie.add('doll'); 
// myTrie.add('dork'); 
// myTrie.add('do'); 
// myTrie.add('dorm')
// myTrie.add('send')
// myTrie.add('sense')
// console.log(myTrie.isWord('doll'))
// console.log(myTrie.isWord('dor'))
// console.log(myTrie.isWord('dorf'))
// console.log(myTrie.print())



// class TrieNode {
//     constructor() {
//         this.children = {};
//         this.isEndOfWord = false;  // Marks if this node is the end of a valid word
//     }
// }

// function buildTrie(words) {
//     let root = new TrieNode();
//     for (let word of words) {
//         let node = root;
//         for (let char of word) {
//             if (!node.children[char]) {
//                 node.children[char] = new TrieNode();
//             }
//             node = node.children[char];
//         }
//         node.isEndOfWord = true;  // Mark the last character as the end of a word
//     }
//     return root;
// }

// function searchTrie(root, word) {
//     let node = root;
//     for (let char of word) {
//         if (!node.children[char]) {
//             return false;  // Character not found
//         }
//         node = node.children[char];
//     }
//     return node.isEndOfWord;  // Ensure it's an actual word, not just a prefix
// }

// // Example Usage:
// const words = ["apple", "banana", "grape"];
// const trie = buildTrie(words);

// console.log(searchTrie(trie, "apple")); // true
// console.log(searchTrie(trie, "app"));   // false
// console.log(searchTrie(trie, "banana")); // true
// console.log(searchTrie(trie, "grapefruit")); // false



class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word into the Trie
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    // Find longest common prefix
    findLongestCommonPrefix() {
        let prefix = "";
        let node = this.root;

        while (Object.keys(node.children).length === 1 && !node.isEndOfWord) {
            let nextChar = Object.keys(node.children)[0];
            prefix += nextChar;
            node = node.children[nextChar];
        }

        return prefix;
    }
}

// Function to get the longest common prefix using Trie
function longestCommonPrefix(words) {
    if (!words.length) return "";

    let trie = new Trie();
    for (let word of words) {
        trie.insert(word);
    }

    return trie.findLongestCommonPrefix();
}

// Example Usage:
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // ""
console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"])); // "inters"
console.log(longestCommonPrefix(["apple", "ape", "april"])); // "ap"
