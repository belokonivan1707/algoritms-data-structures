(function () {
  let set = new Set();

  let john = { name: "John" };
  let pete = { name: "Pete" };
  let mary = { name: "Mary" };

  set.add(john);
  set.add(pete);
  set.add(mary);
  set.add(john);
  set.add(mary);

  // set.size; // 3

  //   We can loop over a set either with for..of or using forEach:
  for (let value of set) {
    // console.log(value); // { name: 'John' } . . .
  }
  // the same with forEach:
  set.forEach((value, valueAgain, set) => {
    // console.log(value); // { name: 'John' } . . .
  });
  // Note the funny thing. The callback function passed in forEach has 3 arguments: a value,
  // then the same value valueAgain, and then the target object. Indeed, the same value appears in the arguments twice.
  // That’s for compatibility with Map where the callback passed forEach has three arguments. Looks a bit strange,
  // for sure. But may help to replace Map with Set in certain cases with ease, and vice versa.

  let values = [
    "Hare",
    "Krishna",
    "Hare",
    "Krishna",
    "Krishna",
    "Krishna",
    "Hare",
    "Hare",
    ":-O",
  ];
  //   console.log(new Set(values));
  //   console.log(Array.from(new Set(values)));
})();
