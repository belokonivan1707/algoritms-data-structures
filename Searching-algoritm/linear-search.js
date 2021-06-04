const array = [1, 2, 3, 4, 5, 9, 23, 1, 5, 8, 2, 9, 10, 18, 4];

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      console.log("index searching element equal: " + i);
      return i;
    }
  }
  return null;
}

// console.log(linearSearch(array, 8));
