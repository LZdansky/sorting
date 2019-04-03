function bubbleSort(arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      let current = arr[i];
      let next = arr[i + 1];
      if (current > next) {
        swapObj.swap(arr, i);
      }
    }
  }
  return arr;
}

const swapObj = {
  swap(arr, i) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    return arr;
  }
};

// class bubbleSortClass {
//   constructor(arr) {
//     this.arr = arr;
//   }

//   bubbleSort(arr) {
//     for (let j = 0; j < arr.length; j++) {
//       for (let i = 0; i < arr.length; i++) {
//         let current = arr[i];
//         let next = arr[i + 1];
//         if (current > next) {
//           swap(arr, i);
//         }
//       }
//     }
//     return arr;
//   }

//   swap(arr, i) {
//     [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//     return arr;
//   }
// }
