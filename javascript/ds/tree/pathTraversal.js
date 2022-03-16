
var pathSum = function (root, targetSum) {

    const listArr1 = [];


    const createList = function (node, targetSum, listArr) {


        if (!node) {
            return;
        }
        listArr.push(node.val);

        if (!node.left && !node.right) {
            var sum = listArr.reduce((partialSum, a) => partialSum + a, 0);

            console.log(`Sum is ${sum}`);
            if (sum === targetSum) {
                listArr1.push(listArr);
            }
        }
        return createList(node.left, targetSum, listArr) + createList(node.right, targetSum, listArr);

    }
    createList(root, targetSum, [])
    return listArr1;
};


var pathSum = function (root, targetSum) {

    const listArr1 = [];


    const createList = function (node, targetSum, listArr) {


        if (!node) {
            return;
        }
        listArr.push(node.val);

        if (!node.left && !node.right) {
            var sum = listArr.reduce((partialSum, a) => partialSum + a, 0);

            if (sum === targetSum) {
                listArr1.push([...listArr]);
            } else {
                listArr.pop();
            }
        }


        return createList(node.left, targetSum, listArr.slice()) + createList(node.right, targetSum, listArr.slice());


    }
    createList(root, targetSum, [])
    return listArr1;
};