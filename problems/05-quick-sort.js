// Implement Quick Sort

function quickSort(array) {
  if (array.length === 1 || array.length === 0) return array;
  let pivot = array[0];

  let newArr = partition(array, pivot);
  let lowSorted = quickSort(newArr[0]);
  let highSorted = quickSort(newArr[1]);
  return [...lowSorted, pivot, ...highSorted];
}

function partition(array, pivot) {
  let highArr = [];
  let lowArr = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] >= pivot) highArr.push(array[i]);
    else if (array[i] < pivot) lowArr.push(array[i]);
  }

  return [lowArr, highArr];
}

module.exports = {
  quickSort,
};
