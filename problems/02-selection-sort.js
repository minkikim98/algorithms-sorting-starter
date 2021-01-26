// Implement Selection Sort

// Implement swap without looking at bubble sort
function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  
}

function selectionSort(list) {
  for (let i = 0; i < list.length; i++) {
    let minIdx = i;
    for (let j = i; j < list.length; j++) {
      if (list[j] < list[minIdx]){
        minIdx = j;
      }
    }
    swap(list, minIdx, i)
  }
}

module.exports = {
  selectionSort,
  swap
};
