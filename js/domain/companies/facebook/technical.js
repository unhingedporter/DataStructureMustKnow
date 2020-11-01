/* 
  Inputs
  -------
    (1): Empty array
    --
    []
    => []

    (2): Flattened already
    --
    [1]
    => [1]

    (3): One level deep
    --
    [[1]]
    => [1]

    (4): Mixed with one level deep
    --
    [1, [2]]
    => [1, 2]

    (5): One level deep multiple arrays
    --
    [[1, 2], [3, 4]]
    => [1, 2, 3, 4]

    (6): Two levels deep
    --
    [[1, [2, 3]], [4, [5, 6, 7]]]
    => [1, 2, 3, 4, 5, 6, 7]

    (7): Arbitrary depth
    --
    [1, [2, [[3]], [4, 5, 6]], [[[[[[7, 8, 9]]]]]]]
    => [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/

function flatten(arr) {
    return arr.reduce((flatArray, current) => {
        if (Array.isArray(current)) {
            return flatArray.concat(flatten(current));
        }

        flatArray.push(current);
        return flatArray;
    }, []);
}

function flattenIterative(arr) {
    const flatArray = [];
    let original = [...arr];

    while (original.length > 0) {
        const current = original.shift();

        if (Array.isArray(current)) {
            original = current.concat(original);
        } else {
            flatArray.push(current);
        }
    }

    return flatArray;
}

const input1 = [];
console.log('result', flatten(input1));
console.log('result', flattenIterative(input1));

const input2 = [1];
console.log('result', flatten(input2));
console.log('result', flattenIterative(input2));

const input3 = [
    [1]
];
console.log('result', flatten(input3));
console.log('result', flattenIterative(input3));

const input4 = [1, [2]];
console.log('result', flatten(input4));
console.log('result', flattenIterative(input4));

const input5 = [
    [1, 2],
    [3, 4]
];
console.log('result', flatten(input5));
console.log('result', flattenIterative(input5));

const input6 = [
    [1, [2, 3]],
    [4, [5, 6, 7]]
];
console.log('result', flatten(input6));
console.log('result', flattenIterative(input6));

const input7 = [1, [2, [
            [3]
        ],
        [4, 5, 6]
    ],
    [
        [
            [
                [
                    [
                        [7, 8, 9]
                    ]
                ]
            ]
        ]
    ]
];
console.log('result', flatten(input7));
console.log('result', flattenIterative(input7));


//----------------------------------------------------------------------------------
Given two identical DOM tree structures, A and B, and a node from A, find the corresponding node in B <
    !DOCTYPE html >
    <
    html >
    <
    head >
    <
    meta charset = "utf-8" >
    <
    meta name = "viewport"
content = "width=device-width" >
    <
    title > Facebook DOM Traversal < /title> <
    /head> <
    body >
    <
    div id = "rootA" >
    <
    div >
    <
    div > < /div> <
    /div>

<
div > < /div>


<
div >
    <
    div >
    <
    div id = "nodeA" > < /div> <
    div > < /div> <
    /div> <
    /div> <
    /div>

<
div id = "rootB" >
    <
    div >
    <
    div > < /div> <
    /div>

<
div > < /div>

<
div >
    <
    div >
    <
    div id = "nodeB" > < /div> <
    div > < /div> <
    /div> <
    /div> <
    /div> <
    /body> <
    /html>

const rootA = document.getElementById('rootA');
const rootB = document.getElementById('rootB');

const nodeA = document.getElementById('nodeA');
const nodeB = document.getElementById('nodeB');

function getPath(root, node) {

    const path = [];

    while (node !== root) {
        const parent = node.parentElement;
        const children = Array.from(parent.children);
        const nodeIndex = children.indexOf(node);
        path.push(nodeIndex);
        node = parent;
    }

    return path;
}

function getNodeFromPath(node, path) {
    const toWalk = [...path];

    while (toWalk.length > 0) {
        node = node.children[toWalk.pop()];
    }

    return node;
}

function getSymmetricNode(rootA, rootB, nodeA) {
    const pathToNode = getPath(rootA, nodeA);
    return getNodeFromPath(rootB, pathToNode);
}


const targetNode = getSymmetricNode(rootA, rootB, nodeA);

console.log(nodeB === targetNode);