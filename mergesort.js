function split(wholeArray) {
  //1 returns something to mergeSort
  if (wholeArray.length === 1) {
    return wholeArray;
  }

  const midpoint = Math.floor(wholeArray.length / 2);
  let left = wholeArray.slice(0, midpoint);
  let right = wholeArray.slice(midpoint);

  return [left, right];

  /* your code here to define the firstHalf and secondHalf arrays */
}

function mergeSort(array) {
  //take what split send us and send it to merge
  //3 we call merge in here and combine it together
  // sort left and sort the right
  // merge them

  let splitArr = split(array);
  let left = splitArr[0];
  let right = splitArr[1];

  return merge(mergeSort(left), mergeSort(right));
 
}

function merge(left, right) {
  //2 we need to sort here and send it to the mergeSort
  let sortedArr = [];

  if (left > right) {
    sortedArr.push(right[0])
    sortedArr.push(left[0]);
  } else {
    sortedArr.push(left[0])
    sortedArr.push(right[0]);
  }
  return sortedArr;
}

console.log(mergeSort([7,0,5,3,1]));
