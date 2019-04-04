function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  let firstHalf = [];
  let secondHalf = [];
  const splitIdx = Math.floor(wholeArray.length / 2);
  //   if(wholeArray.length % 2 === 0){
  firstHalf = wholeArray.slice(0, splitIdx);
  secondHalf = wholeArray.slice(splitIdx);
  //   }
  return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf) {
  // const mergedArr = [...firstHalf, ...secondHalf];
  //insert sorting logic
  return mergedArr;
}

function mergeSort(array) {
  /* your code here */
}
