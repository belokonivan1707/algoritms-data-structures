const arrayQuick = [-1, 12, 23, 422, -3, 92, 23, 1, 5, 8, 2, 9, 12130, 182, 24, -17, 98, 45, 1];

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  
  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less = [];
  let greater = [];

  for (let i = 1; i < array.length; i++) {
    if (i === pivotIndex) {
      continue;
    }

    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
}

// another example
// function quickSort(arr) {
//   if (arr.length < 2) return arr;
//   let pivot = arr[0];
//   const left = [];
//   const right = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (pivot > arr[i]) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return quickSort(left).concat(pivot, quickSort(right));
// }
