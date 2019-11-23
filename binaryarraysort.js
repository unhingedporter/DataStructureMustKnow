a = [1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0]


left = 0
right = a.length - 1


swap = function (arr, index1, index2) {
    // x = x ^ y;  
    // y = x ^ y; 
    // x = x ^ y; 

    // x = x * y;  
    // y = x / y; 
    // x = x / y;  

    arr[index1] = arr[index1] + arr[index2];
    arr[index2] = arr[index1] - arr[index2];
    arr[index1] = arr[index1] - arr[index2];
}

while (left < right) {

    if (a[left] === 1 && a[right] === 0) {
        swap(a, left, right);
        left++;
        right--;
        console.log("Position after swap" + a);
    } else if (a[right] === 1) {
        right--;
    } else if (a[left] === 0) {
        left++;
    }

}

console.log(a.toString());