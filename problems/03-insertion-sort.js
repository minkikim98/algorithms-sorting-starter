// Implement Insertion Sort

function insertionSort(list) {
  let newArr = [list.shift()];
  while (list.length > 0) {
    let currentVal = list.shift();
    let inserted = false;
    let length = newArr.length;
    for (let i = 0; i < length; i++) {
      if (newArr[i] > currentVal) {
        inserted = true;
        newArr.splice(i, 0, currentVal);
        break;
      }
    }
    if (!inserted) newArr.push(currentVal);
  }
  newArr.forEach(el => {
    list.push(el);
  });
  return newArr;
}

module.exports = {
  insertionSort
};
