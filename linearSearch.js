const numbers = Array.from(Array(100000000).keys());

// Leaner search:
// ⏳Time Complexity: O(n)
function linearSearch(arr, key) {
  console.time("time ⌛")
  for (let i = 0; i < arr.length; i++) {
    arr[i] === key
  }
  console.timeEnd("time ⌛")
}

linearSearch(numbers, -1);