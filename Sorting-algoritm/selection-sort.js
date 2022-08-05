const arraySelection = [-1, 12, 23, 422, -3, 92, 23, 1, 5, 8, 2, 9, 12130, 182, 24, -17, 98, 45, 1];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
    }

    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }

  return array;
}
