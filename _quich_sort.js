let a = [1, 40, 3, 0, 5, 6, 7, 1, 9, -1];

let count = 0;

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivotIndex = Math.floor(array.length / 2);

  let pivot = array[pivotIndex];

  let less = [];
  let greater = [];

  for (let i = 0; i < array.length; i++) {
    count += 1;
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

// console.log(quickSort(a));
// console.log(count);

// function recursiveBinarySearch(array, item, start, end) {

// }

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(array.length);

let i = 0;
let n = 0;

// while (i < 5) {
//   i++;
//   // console.log(i);

//   if (i === 3) {
//     // console.log("fucking continue");
//     continue;
//   }
//   n = n + i;
//   // console.log("it is n " + n);
// }

console.log("fuck");
let counter = 0;
let array = [10, 2, 3, 4, 5, 7, 56, 8, 9, 1];

function sort(array) {
  if (array.length <= 1) {
    return array;
  }
  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];

  let less = [];
  let greater = [];

  for (let i = 0; i < array.length; i++) {
    counter++;
    if (i === pivotIndex) {
      continue;
    }
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return [...sort(less), pivot, ...sort(greater)];
}

console.log(sort(array));
console.log(array);
console.log(counter);
