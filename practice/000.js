const arr_000 = ["f", "u", "c", "k", "a", "s", "h", "o", "r", "t"];
const arr_001 = ["l", "i", "f", "e", "i", "w", "a", "n", "t", "m", "o", "r", "e"];

function compareTwoArrays_0(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        console.log(arr1[i] + " " + arr2[j]);
      }
    }
  }
}

// compareTwoArrays_0(arr_000, arr_001); // O(n * n) || O(n^2)

function compareTwoArrays_1(arr1, arr2) {
  const obj = {};

  for (let i = 0; i < arr1.length; i++) {
    if (!obj[arr1[i]]) {
      const item = arr1[i];
      obj[item] = true;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (obj[arr2[i]]) {
      console.log(obj[arr2[i]] + " " + arr2[i]);
    }
  }
}

// compareTwoArrays_1(arr_000, arr_001); // O(n + n) || O(n)

function compareTwoArrays_2(arr1, arr2) {
  console.log(arr1.some((item) => arr2.includes(item)));
}

// compareTwoArrays_2(arr_000, arr_001);
