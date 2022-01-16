function moveElementToEnd(array, toMove) {

	console.log(array + "" + array.length + "to move positin" + toMove);
	var k = array.length - 1;
	var swap = function (arr, firstElem, secondElem) {
		console.log(`swapping ${arr[firstElem]} with ${arr[secondElem]}`)
		var thirdAux = arr[firstElem];
		arr[firstElem] = arr[secondElem];
		arr[secondElem] = thirdAux;
	}
	while (k > 0 && array[k] === toMove) {
		k--;
	}

	console.log("The value of k is " + k + "Array is" + array + "with length" + array.length);
	for (var index = 0; index < array.length; index++) {
		if (array[index] === toMove && k >= index) {
			console.log('length before swap is ' + array.length);
			swap(array, index, k--);
			while (k > 0 && array[k] === toMove) {
				k--;
			}
			console.log('length after swap is ' + array.length);
		}
	}
	console.log(array);
	return array;

}


