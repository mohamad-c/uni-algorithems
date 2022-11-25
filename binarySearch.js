const numbers = Array.from(Array(100000000).keys());
// Binary Search: Recursive
// const binarySearch = (arr, key, min, max) => {
//   if (min === undefined) min = 0;
//   if (max === undefined) max = arr.length - 1;

//let guess = Math.floor(((max - min) / 2) + min);
//if (max <= min && arr[guess] !== key) return null;
//else if (arr[guess] === key) return guess;
//else if (arr[guess] < key) return binarySearch(arr, key, guess + 1, max);
//else return binarySearch(arr, key, min, guess - 1);
// };

// binarySearch(numbers, 99)

// ⏳Time complexity : O(log2(n))
// only can be done on sorted arrays.
//loop
function binarySearch(sortedArray, key) {
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
		
    if (sortedArray[middle] === key) {
      // found the key
      return middle;
    } else if (sortedArray[middle] < key) {
      // continue searching to the right
      start = middle + 1;
    } else {
      // search searching to the left
      end = middle - 1;
    }
  }
  // key wasn't found
  return -1;
}

const number = binarySearch(numbers, 99999);
console.log(number);
