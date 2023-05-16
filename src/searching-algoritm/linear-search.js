// const array = [1, 2, 3, 4, 5, 9, 23, 1, 5, 8, 2, 9, 10, 18, 4];

export function linearSearch(array, item) {
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
  
  return null;
}
