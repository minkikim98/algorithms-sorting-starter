// Implement Bubble Sort

function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function bubbleSort(array) {
  // your code here
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 1; i < array.length; i++) {
      let idx1 = i - 1;
      let idx2 = i;
      if (array[idx2] < array[idx1]) {
        swap(array, idx1, idx2);
        swapped = true;
      }
    }
  }
}

module.exports = {
  bubbleSort,
  swap
};
