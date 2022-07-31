function spinWords(string) {
  return string
    .split(" ")
    .map((word) => {
      if (word.length < 5) {
        return word;
      } else {
        return word.split("").reverse().join("");
      }
    })
    .join(" ");
}

function flatArray(array) {
  const acc = [];

  function innerFlatArray(array) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        innerFlatArray(array[i]);
      } else {
        acc.push(array[i]);
      }
    }
    return acc;
  }
  return innerFlatArray(array);
}

function sortArrayOfIntegers(notSortedArray) {
  const array = [...notSortedArray];

  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }

  return array;
}

function digital_root(number) {
  const result = String(number)
    .split("")
    .reduce((acc, item) => {
      return (acc += parseInt(item));
    }, 0);

  if (String(result).length > 1) {
    return digital_root(result);
  }
  return result;
}
