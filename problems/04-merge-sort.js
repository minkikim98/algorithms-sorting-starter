// Implement Merge Sort

function merge(array1, array2) {
    let newArr = [];
    let arrIdx1 = 0;
    let arrIdx2 = 0;
    while (arrIdx1 < array1.length || arrIdx2 < array2.length){
      if (arrIdx1 >= array1.length ){
        newArr.push(array2[arrIdx2]);
        arrIdx2++;

      } else if (array1[arrIdx1] > array2[arrIdx2]){
        newArr.push(array2[arrIdx2]);
        arrIdx2++;
      } else if (arrIdx2 >= array2.length){
        newArr.push(array1[arrIdx1]);
        arrIdx1++;

      } else if (array2[arrIdx2] >= array1[arrIdx1]){
        newArr.push(array1[arrIdx1]);
        arrIdx1++;
      }
      
      
      
    }
    return newArr;
}

function mergeSort(array) {
    if (array.length === 0){
      return array;
    }
    if (array.length === 1){
      return array;
    }
    let midpoint = Math.floor(array.length/2);
    console.log(midpoint, array.length);
    let left = array.slice(0, midpoint);
    let right = array.slice(midpoint, array.length);

    let leftSorted = mergeSort(left);
    let rightSorted = mergeSort(right);

    return merge(leftSorted, rightSorted);

}

module.exports = {
  merge,
  mergeSort
};
