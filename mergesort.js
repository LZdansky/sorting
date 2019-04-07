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
  let mergedArr = [];
  let shorterArr = [];
  let longerArr = [];
  //whose shorter or longer?
  if (firstHalf > secondHalf) {
    shorterArr = secondHalf;
    longerArr = firstHalf;
  } else {
    shorterArr = firstHalf;
    longerArr = secondHalf;
  }
  //compare elements
  while (shorterArr.length !== 0 || longerArr.length !== 0) {
    let smallerElem = 0;
    //find who has a smaller elem
    if (firstHalf[0] < secondHalf[0]) {
      smallerElem = firstHalf.shift(); //take the smaller one off
      mergedArr.push(smallerElem); //push the smaller value to the merged array
    } else {
      smallerElem = secondHalf.shift();
      mergedArr.push(smallerElem);
    }
  }
  //take any remaining elements in the longer array and push it onto the merged array
  let arrayWithRemainingElems = [];
  if (longerArr.length === 0) {
    arrayWithRemainingElems = shorterArr;
  } else arrayWithRemainingElems = longerArr;

  if (arrayWithRemainingElems.length !== 0) {
    let [remainingElems] = arrayWithRemainingElems;
    mergedArr.push(remainingElems);
  }
  return mergedArr;
}

function mergeSort(array) {
  /* your code here */
}
