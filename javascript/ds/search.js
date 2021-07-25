var arr = [
  2, 3, 3, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 88, 1000, 10000,
  1000000,
];

var search = function () {
  var binarySearch = function (arr, low, high, elem) {
    if (low > high) {
      return -1;
    }

    var mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] === elem) {
      return { elem, mid };
    } else if (arr[mid] < elem) {
      return binarySearch(arr, mid + 1, high, elem);
    } else if (arr[mid] > elem) {
      return binarySearch(arr, low, mid - 1, elem);
    }
  };
  var leftMostBinarySearch = function (arr, low, high, elem) {
    if (low > high) {
      return -1;
    }

    var mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] === elem && (mid === 0 || arr[mid - 1] !== elem)) {
      return { elem, key: mid };
    } else if (arr[mid] < elem) {
      return leftMostBinarySearch(arr, mid + 1, high, elem);
    } else if (arr[mid] >= elem) {
      return leftMostBinarySearch(arr, low, mid - 1, elem);
    }
  };
  var rightMostBinarySearch = function (arr, low, high, elem) {
    if (low > high) {
      return -1;
    }

    var mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] === elem && (mid === arr.length || arr[mid + 1] !== elem)) {
      return { elem, key: mid };
    } else if (arr[mid] <= elem) {
      return rightMostBinarySearch(arr, mid + 1, high, elem);
    } else if (arr[mid] > elem) {
      return rightMostBinarySearch(arr, low, mid - 1, elem);
    }
  };
  var countOccurrences = function (arr, elem) {
    console.log(
      rightMostBinarySearch(arr, 0, arr.length, elem).key -
        leftMostBinarySearch(arr, 0, arr.length, elem).key +
        1
    );
  };

  var findElementSortedRotatedArr = function(arr, elem){
      return null;
  };

  var peakElementArr = function(arr){
      return null;
  };

  var findSquareRootArr = function(arr){

  };

  return {
    binarySearch,
    leftMostBinarySearch,
    rightMostBinarySearch,
    countOccurrences,
  };
};

console.log(search().binarySearch(arr, 0, arr.length, 6));
console.log(search().leftMostBinarySearch(arr, 0, arr.length, 6));
console.log(search().rightMostBinarySearch(arr, 0, arr.length, 6));
console.log(search().countOccurrences(arr, 6));
