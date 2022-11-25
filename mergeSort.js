// mergeSort:
// ⏳Time complexity : O(nlog2(n))
const mergeSort = (leftA, rightA) => {
  let arr = [],
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < leftA.length && rightIndex < rightA.length) {
    if (leftA[leftIndex] < rightA[rightIndex]) {
      arr.push(leftA[leftIndex++]);
    } else {
      arr.push(rightA[rightIndex++]);
    }
  }
  let leftRemains = leftA.slice(leftIndex),
    rightRemains = rightA.slice(rightIndex);

  return arr.concat(leftRemains).concat(rightRemains);
};

const sth = mergeSort([10, 8 , 10, 20], [2, 3, 6]);
console.log(sth);